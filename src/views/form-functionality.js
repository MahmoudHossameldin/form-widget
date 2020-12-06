export class FormFunctionality{
    constructor(){
        this.modal = document.querySelector('.modal');
        this.modalFormData = document.querySelector('.modal__form-data');
        this.overlay = document.querySelector('.overlay');
        this.btnCloseModal = document.querySelector('.modal__close');
        this.dateInput = document.querySelector(".input-datepicker");
        this.contactPersonSelector = document.querySelector('.input-contact-list');
        this.textAreaSelector = document.querySelector('.input-comment');
        this.theForm = document.querySelector(".form-widget");


        //On form submit show the modal and print the modal content
        this.theForm.addEventListener("submit", this.validateForm.bind(this));

        //Close modal on clicking the overlay or the X button
        this.btnCloseModal.addEventListener('click', this.closeModal.bind(this));
        this.overlay.addEventListener('click', this.closeModal.bind(this));

        //Close modal on pressing Esc key
        document.addEventListener('keydown', this.closeOnEsc.bind(this));
    }

    validateForm(e){
        if (this.dateInput.value){
            e.preventDefault();
            this.openModal();
            this.modalContact();
        }
    }

    closeOnEsc(e){
        if(e.key === 'Escape' && !this.modal.classList.contains('hidden')){
            this.closeModal();
        }
    }

    openModal(){
        //Open the modal by showing the overlay and the modal popup itself
        this.modal.classList.remove('hidden');
        this.overlay.classList.remove('hidden');
    }

    closeModal(){
        //Close the modal by hiding it and the overlay
        this.modal.classList.add('hidden');
        this.overlay.classList.add('hidden');

        //Empty the modal data so as to work as expected if we submitted the form again
        document.querySelector('.modal__form-data').innerHTML = '';
    }

    modalContact(){
        //Get the contact person name by the option text because the alue is the email address to pass it easily for the database
        this.contactPerson = this.contactPersonSelector.options[this.contactPersonSelector.selectedIndex].text;

        //Insert the modal content
        this.modalFormData.insertAdjacentHTML('beforeend', '<span class="modal__label">Contat person: </span><span class="modal__value">'+ this.contactPerson +'</span><br>');
        this.modalFormData.insertAdjacentHTML('beforeend', '<span class="modal__label">Date: </span><span class="modal__value">' + this.dateInput.value + '</span><br>');

        //Print the comment only if the user wrote a comment
        if (this.textAreaSelector.value)  this.modalFormData.insertAdjacentHTML('beforeend', '<span class="modal__label">Your comments: </span><span class="modal__value value-comment">' + this.textAreaSelector.value + '</span>');
            
    }

}