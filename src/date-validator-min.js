"use strict",module.exports=function(){function a(a,b,c){if(typeof a=="undefined"||typeof b=="undefined"||typeof c=="undefined")return!1;if(isNaN(b)||isNaN(c)||isNaN(a))return!1;b=parseInt(b,10),c=parseInt(c,10),a=parseInt(a,10);if(b<1||c<1||a<1)return!1;var d=new Date(b+"/"+c+"/"+a);return isNaN(d.getDate())?!1:d.getDate()!==c?!1:d.getMonth()+1!==b?!1:!0}return{validate:a}}();