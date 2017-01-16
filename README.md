# WaterMark
A WaterMarking System using basic JS

#What is it? 

Basically, what it can do is insert a watermark so people know what libary it is powered by etc. Really, if you have a bigger libary in terms of popularity this isn't reccomended.


#Setting Up:

Each step is repeated because we have (1) for the HTML and (1) for the Styling (CSS)

Step 1 :

Declare Variables:

`var div = document.createElement("div");`

`var style  = document.createElement("style");`

These are essential to it working properly,  and create elements to inject the HTML - While this solution isn't 100% hacker proof , you can [Obfuscate](http://www.javascriptobfuscator.com/Javascript-Obfuscator.aspx) your code, so it is. 

Step 2 :

Adding the Powered By text. 


**WARNNING: Reccomended to leave to defaults, then  follow the Customizing Guide. Only change the "Powered By _ " text.**

`div.innerHTML =  '<div style="opacity: 0.5;   color: BLACK;position: fixed; top: auto; bottom:50%; left: 80%;"> <a #">Powered By Example</a></div>';`

Add the CSS (Defaults)

**WARNNING: Reccomended to leave to defaults then follow the customizing guide. DO NOT change anything here.**

 1: `css.type = "text/css";`  Required to work
 
 
2: Defaults: `css.innerHTML = "a:link,a:visited{opacity:0.5;color:black;text-decoration:none}a:active,a:hover{text-decoration:none opacity: 0.5;color:black;}";`

Step 3 : Finalizing.

Finalize the HTML:

`document.body.appendChild(div);`

Finalize the CSS:

`document.body.appendChild(css);`  


**Setup Complete**

You can now Customize it. Look at the `CustomizingGuide.MD` for information. 

