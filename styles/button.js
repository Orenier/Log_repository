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


        function goPage(page){
            fetch(page + ".html")
            .then(response => {
                return response.text()
            })
            .then(data => {
                document.querySelector('#contents').innerHTML = data;
            })
            .catch(error => {
                alert(error);
            });
        }