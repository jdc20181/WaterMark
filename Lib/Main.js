var div = document.createElement("div");
var style  = document.createElement("style");
div.innerHTML =  '<div style="opacity: 0.5;   color: BLACK;position: fixed; top: auto; bottom:50%; left: 80%;"> <a href="https://github.com/jdc20181/SpeedTest">Powered By Example</a></div>';
document.body.appendChild(div);
    var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "a:link,a:visited{opacity:0.5;color:black;text-decoration:none}a:active,a:hover{text-decoration:none opacity: 0.5;color:black;}";
document.body.appendChild(css);
