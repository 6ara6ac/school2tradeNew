(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelectorAll("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.forEach((e=>e.addEventListener("click",t))),e.closeModalBtn.forEach((e=>e.addEventListener("click",t)))})();const e=document.querySelector(".checkbox__input"),t=document.querySelector(".modal__button");e.addEventListener("change",(function(){e.checked?t.removeAttribute("disabled"):t.setAttribute("disabled",!0)}));
//# sourceMappingURL=index.67a7f431.js.map
