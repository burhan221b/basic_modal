// Find All Buttons that Open/Close Modal
var openModalButtons = document.querySelectorAll('[data-modal-target]');
var closeModalButtons = document.querySelectorAll('[data-btn-modal-close]');
// Get the overlay element so we can add/remove classes
var overlay = document.querySelector('#overlay');
// Close all active modals if overlay is clicked
overlay.addEventListener('click', function () {
    var modals = document.querySelectorAll('.modal.active');
    modals.forEach(function (modal) { return closeModal(modal); });
});
// Add addEventListener to all elements to open modal
openModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});
// Add addEventListener to all elements to close modal
closeModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the closest parent Element with class 'modal'
        var modal = button.closest('.modal');
        closeModal(modal);
    });
});
// Function that adds active to classList when modal needs to open
function openModal(modal) {
    if (modal === null)
        return;
    modal.classList.add("active");
    overlay.classList.add("active");
}
// Function that removes active to classList when modal needs to close
function closeModal(modal) {
    if (modal === null)
        return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
