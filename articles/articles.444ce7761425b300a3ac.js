!function(e){var t={};function o(s){if(t[s])return t[s].exports;var p=t[s]={i:s,l:!1,exports:{}};return e[s].call(p.exports,p,p.exports,o),p.l=!0,p.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var p in e)o.d(s,p,function(t){return e[t]}.bind(null,p));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([,,function(e,t,o){"use strict";o.r(t);o(3);const s=document.querySelector(".header__menu"),p=document.querySelector(".header"),r=document.querySelector(".header__mobile-menu-pic"),u=document.querySelector(".popup__signup"),n=document.querySelector(".popup__signin"),c=document.querySelector(".header__auth-button"),i=document.querySelector(".popup__link"),d=document.querySelector(".popup__message .popup__link"),a=document.querySelector(".popup__signup .popup__close"),l=document.querySelector(".popup__signin .popup__close"),_=document.querySelector(".header__logout-pic"),m=document.querySelector(".header__auth-text"),h=document.querySelector(".articles"),L=document.querySelector(".popup__message"),v=document.querySelector(".popup__message .popup__close");r.addEventListener("click",()=>{s.classList.toggle("header__menu_open"),r.classList.toggle("header__mobile-menu-pic_open_dark"),p.classList.toggle("header_dark")}),c.addEventListener("click",()=>{"Авторизоваться"===m.textContent?(u.classList.remove("popup_hide"),u.classList.add("popup_show")):(m.textContent="Авторизоваться",_.classList.remove("header__logout-pic_show"),h.classList.add("header__link_hide"),s.classList.remove("header__menu_auth"))}),u.addEventListener("submit",e=>{L.classList.remove("popup_hide"),L.classList.add("popup_show"),u.classList.remove("popup_show"),u.classList.add("popup_hide"),e.preventDefault(),e.target.reset()}),n.addEventListener("submit",e=>{_.classList.add("header__logout-pic_show"),m.textContent="Грета",n.classList.remove("popup_show"),n.classList.add("popup_hide"),h.classList.remove("header__link_hide"),s.classList.add("header__menu_auth"),e.preventDefault(),e.target.reset()}),i.addEventListener("click",e=>{u.classList.remove("popup_show"),u.classList.add("popup_hide"),n.classList.add("popup_show"),n.classList.remove("popup_hide"),e.preventDefault()}),d.addEventListener("click",e=>{L.classList.remove("popup_show"),L.classList.add("popup_hide"),n.classList.add("popup_show"),n.classList.remove("popup_hide"),e.preventDefault()}),l.addEventListener("click",()=>{n.classList.remove("popup_show"),n.classList.add("popup_hide")}),a.addEventListener("click",()=>{u.classList.remove("popup_show"),u.classList.add("popup_hide")}),v.addEventListener("click",()=>{L.classList.remove("popup_show"),L.classList.add("popup_hide")})},function(e,t,o){}]);