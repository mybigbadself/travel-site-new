"use strict";(self.webpackChunktravel_site_new=self.webpackChunktravel_site_new||[]).push([[222],{222:(a,b,c)=>{c.r(b),c.d(b,{default:()=>g});var d=c(671),e=c(144),f=function(){function b(){(0,d.Z)(this,b),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}return(0,e.Z)(b,[{key:"events",value:function(){var c=this;this.closeIcon.addEventListener("click",function(){return c.closeTheModal()}),document.addEventListener("keyup",function(a){return c.keyPressHandler(a)})}},{key:"keyPressHandler",value:function(b){27==b.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend","\n            <div class=\"modal\">\n                <div class=\"modal__inner\">\n                <h2 class=\"section-title section-title--blue section-title--less-margin\"><img src=\"assets/images/icons/mail.svg\" class=\"section-title__icon\"> Get in <strong>Touch</strong></h2>\n                <div class=\"wrapper wrapper--narrow\">\n                    <p class=\"modal__description\">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n                </div>\n\n                <div class=\"social-icons\">\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/facebook.svg\" alt=\"Facebook\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/twitter.svg\" alt=\"Twitter\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/instagram.svg\" alt=\"Instagram\"></a>\n                    <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/youtube.svg\" alt=\"YouTube\"></a>\n                </div>\n                </div>\n                <div class=\"modal__close\">X</div>\n            </div>\n        ")}}]),b}();const g=f}}]);