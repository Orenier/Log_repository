const popupButton = document.getElementById('side-bar');
        popupButton.addEventListener('click', rightClick);
 
        //document.onclick = hideMenu;
        document.oncontextmenu = rightClick;
 
        function hideMenu() {
            document.getElementById(
                "side-bar-ui").style.display = "none"
        }
 
        function rightClick(e) {
            e.preventDefault();
 
            if (document.getElementById(
                "side-bar-ui").style.display == "block")
                hideMenu();
            else {
                var menu = document
                    .getElementById("side-bar-ui")
 
                menu.style.display = 'block';

 
            }
        
        }

const popupButto = document.getElementById('side-bar2');
        popupButto.addEventListener('click', ightClick);
 
        //document.onclick = hideMenu;
        document.oncontextmenu = ightClick;
 
        function hideMen() {
            document.getElementById(
                "side-bar2-ui").style.display = "none"
        }
 
        function ightClick(e) {
            e.preventDefault();
 
            if (document.getElementById(
                "side-bar2-ui").style.display == "block")
                hideMen();
            else {
                var menu = document
                    .getElementById("side-bar2-ui")
 
                menu.style.display = 'block';

 
            }
        
        }

const popupButt = document.getElementById('side-bar3');
        popupButt.addEventListener('click', ghtClick);
 
        //document.onclick = hideMenu;
        document.oncontextmenu = ghtClick;
 
        function hideMe() {
            document.getElementById(
                "side-bar3-ui").style.display = "none"
        }
 
        function ghtClick(e) {
            e.preventDefault();
 
            if (document.getElementById(
                "side-bar3-ui").style.display == "block")
                hideMe();
            else {
                var menu = document
                    .getElementById("side-bar3-ui")
 
                menu.style.display = 'block';

 
            }
        
        }


        function() {
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
                initPager();
                initPageMode();
                render();
              });
            };
          
            function onPagerButtonsClick(event) {
              const action = event.target.getAttribute("data-pager");
              if (action === "prev") {
                if (currentPageIndex === 0) {
                  return;
                }
                currentPageIndex -= pageMode;
                if (currentPageIndex < 0) {
                  currentPageIndex = 0;
                }
                render();
              }
              if (action === "next") {
                if (currentPageIndex === totalPagesCount - 1) {
                  return;
                }
                currentPageIndex += pageMode;
                if (currentPageIndex > totalPagesCount - 1) {
                  currentPageIndex = totalPagesCount - 1;
                }
                render();
              }
            }
            function initPager() {
              const pager = document.querySelector("#pager");
              pager.addEventListener("click", onPagerButtonsClick);
              return () => {
                pager.removeEventListener("click", onPagerButtonsClick);
              };
            }
          
            function onPageModeChange(event) {
              pageMode = Number(event.target.value);
              render();
            }
            function initPageMode() {
              const input = document.querySelector("#page-mode input");
              input.setAttribute("max", totalPagesCount);
              input.addEventListener("change", onPageModeChange);
              return () => {
                input.removeEventListener("change", onPageModeChange);
              };
            }
          
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
                const pagesHTML = `<div style="width: ${
                  pageMode > 1 ? "50%" : "100%"
                }"><canvas></canvas></div>`.repeat(pages.length);
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
          }
          