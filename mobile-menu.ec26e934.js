("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6.register("cs7FV",(function(e,o){var t,n,d;t=document.querySelector(".js-menu-container"),n=document.querySelector(".toggle-menu"),(d=document.querySelector(".js-open-menu")).addEventListener("click",(function(){var e="true"===d.getAttribute("aria-expanded")||!1;d.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),n.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(t.classList.remove("is-open"),d.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}));
//# sourceMappingURL=mobile-menu.ec26e934.js.map
