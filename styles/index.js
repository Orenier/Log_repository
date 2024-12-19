        (function() {
            let currentPageIndex = 0;
            let pageMode = 1;
            let cursorIndex = Math.floor(currentPageIndex / pageMode);
            let pdfInstance = null;
            let totalPagesCount = 0;
          
            const viewport = document.querySelector("#viewport");
            window.initPDFViewer = function(pdfURL) {
              pdfjsLib.getDocument(pdfURL).then(pdf => {
                  pdfInstance = pdf;
                  totalPagesCount = pdf.numPages;
                  pageMode = totalPagesCount;
                  cursorIndex = Math.floor(currentPageIndex / pageMode);
                  render();
              });
            };
          
            function render() {
              cursorIndex = Math.floor(currentPageIndex / pageMode);
              const startPageIndex = cursorIndex * pageMode;
              const endPageIndex =
                startPageIndex + pageMode < totalPagesCount
                  ? startPageIndex + pageMode - 1
                  : totalPagesCount - 1;
          
              const renderPagesPromises = [];
              for (let i = startPageIndex; i <= endPageIndex; i++) {
                renderPagesPromises.push(pdfInstance.getPage(i + 1));
              }
          
              Promise.all(renderPagesPromises).then(pages => {
                const pagesHTML = `<div style="width: 100%;margin-top:20px;"><canvas></canvas></div>`.repeat(pages.length);
                viewport.innerHTML = pagesHTML;
                pages.forEach(renderPage);
              });
            }
          
            function renderPage(page) {
              let pdfViewport = page.getViewport(1);
          
              const container =
                viewport.children[page.pageIndex - cursorIndex * pageMode];
              pdfViewport = page.getViewport(container.offsetWidth / pdfViewport.width);
              const canvas = container.children[0];
              const context = canvas.getContext("2d");
              canvas.height = pdfViewport.height;
              canvas.width = pdfViewport.width;
          
              page.render({
                canvasContext: context,
                viewport: pdfViewport
              });
            }
          })();