// Find All Buttons that Open/Close Modal
const openModalButtons: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal-target]');
const closeModalButtons: NodeListOf<HTMLElement> = document.querySelectorAll('[data-btn-modal-close]');

// Get the overlay element so we can add/remove classes
const overlay: Element = document.querySelector('#overlay');

// Close all active modals if overlay is clicked
overlay.addEventListener('click', () => {
    const modals: NodeListOf<HTMLElement> = document.querySelectorAll('.modal.active');
    modals.forEach((modal: HTMLElement) => closeModal(modal))
})

// Add addEventListener to all elements to open modal
openModalButtons.forEach((button: HTMLElement) => {
    button.addEventListener('click', () => {
        const modal: HTMLElement = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

// Add addEventListener to all elements to close modal
closeModalButtons.forEach((button: HTMLElement) => {
    button.addEventListener('click', () => {
        // Get the closest parent Element with class 'modal'
        const modal: HTMLElement = button.closest('.modal')
        closeModal(modal);
    })
})

// Function that adds active to classList when modal needs to open
function openModal(modal: HTMLElement) {
    if (modal === null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

// Function that removes active to classList when modal needs to close
function closeModal(modal: HTMLElement) {
    if (modal === null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}