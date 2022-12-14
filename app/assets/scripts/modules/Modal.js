class Modal {
    constructor(){
        this.injectHTML();
        this.modal = document.querySelector(".modal");
        this.closeIcon = document.querySelector(".modal__close");
        /* this.openModalButtons = document.querySelectorAll(".open-modal");  */
        this.events();
    }

    events() {
        /* Listen for open click 
        this.openModalButtons.forEach(el => {
            el.addEventListener("click", e => {
                this.openTheModal(e);
            });
        });

        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e))); << no need anymore when we use code splitting
        */



        /* Listen for close click */
        this.closeIcon.addEventListener("click", () => this.closeTheModal())

        /* pushes any key  */
        document.addEventListener("keyup", e => this.keyPressHandler(e));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal();
        }
    }

    openTheModal() {
        // e.preventDefault();
        this.modal.classList.add("modal__is-visible");

    }
    closeTheModal() {
        this.modal.classList.remove("modal__is-visible");
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <!-- Leave this commented out HTML here until you need it for an upcoming "modal" lesson -->
        <div class="modal">
          <div class="modal__inner">
            <h2 class="section-title section-title__blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
            <div class="wrapper wrapper--narrow">
              <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
            </div>
      
            <div class="social-icons">
              <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
              <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
              <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
              <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
            </div>
          </div>
          <div class="modal__close">X</div>
        </div>
          <!-- This is the end of the "modal" reference HTML -->
        `);
    }
}

export default Modal;