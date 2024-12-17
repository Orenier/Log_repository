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