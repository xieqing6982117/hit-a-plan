"use strict";onload=function(){for(var e=document.getElementById("list"),t=e.getElementsByTagName("li"),n=0;n<t.length;n++)t[n].onclick=function(){e.parentNode.removeChild(e),myPlane.fireInterval=this.value-0,gameEngine.init().start()}};