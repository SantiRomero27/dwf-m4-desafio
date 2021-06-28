// Modal button function
function manageModal() {
    // Get the modal elements
    const modalBurgerEl = document.querySelector(".header__burger");
    const modalWindowEl = document.querySelector(".burger-window");
    const modalCloseEl = document.querySelector(".burger-window__close");

    // Then, add the event listeners
    modalBurgerEl.addEventListener("click", () => {
        modalWindowEl.style.display = "flex";
    });

    modalCloseEl.addEventListener("click", () => {
        modalWindowEl.style.display = "";
    });
}
