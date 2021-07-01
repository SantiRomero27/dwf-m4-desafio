// Modal button function
function manageModal(headerEl) {
    // Get the modal elements
    const modalBurgerEl = headerEl.querySelector(".header__burger");
    const modalWindowEl = headerEl.querySelector(".burger-window");
    const modalCloseEl = headerEl.querySelector(".burger-window__close");

    // Then, add the event listeners
    modalBurgerEl.addEventListener("click", () => {
        modalWindowEl.style.display = "flex";
    });

    modalCloseEl.addEventListener("click", () => {
        modalWindowEl.style.display = "";
    });
}

// Send mail from contact form function
function sendMail(contactEl) {
    // First, get all the form data through an event listener
    const formEl = contactEl.querySelector(".contact-form");

    formEl.addEventListener("submit", (e) => {
        // Prevent default form submit behavior
        e.preventDefault();

        // Get all data
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData.entries());

        // And shape the message...
        let message = dataObject.name + " te acaba de enviar un mensaje!\n\n";
        message += "> Te quiere decir esto: " + dataObject.message;
        message += "\n\n> Podés contactarte acá: " + dataObject.email;

        // Fetch, and send mail
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                to: "romerogherdinasantiago@gmail.com",
                message: message,
            }),
        })
            // Solve the promise
            .then(() => alert("El mensaje fue enviado con éxito!"))
            .catch(() => {
                alert("Algo salió mal al enviar el mensaje...");
            });
    });
}

// Header component function
function headerComponent() {
    const headerEl = document.createElement("header");
    headerEl.setAttribute("class", "header");

    // Set content
    headerEl.innerHTML = `<a href="./index.html"
    ><img src="./assets/SantiLogo.png" class="header__logo"
    /></a>
    <img src="./assets/burger.svg" class="header__burger" />
    <nav class="header__desktop-nav">
    <a href="./portfolio.html" class="header__desktop-nav-link"
        >Portfolio</a
    >
    <a href="./services.html" class="header__desktop-nav-link"
        >Servicios</a
    >
    <a href="./contact.html" class="header__desktop-nav-link">Contacto</a>
    </nav>

    <div class="burger-window">
    <img src="./assets/cross.svg" class="burger-window__close" />
    <nav class="burger-window__navigation">
        <a href="./portfolio.html" class="burger-window__link"
            >Portfolio</a
        >
        <a href="./services.html" class="burger-window__link"
            >Servicios</a
        >
        <a href="./contact.html" class="burger-window__link">Contacto</a>
    </nav>
    </div>`;

    // Manage header modal
    manageModal(headerEl);

    return headerEl;
}

// Contact component function
function contactComponent(contactTitle) {
    const contactEl = document.createElement("div");
    contactEl.setAttribute("class", "contact__content");

    // Set content
    contactEl.innerHTML = `<h2 class="contact__content-title">${contactTitle}</h2>
    <form class="contact-form">
        <label for="name" class="contact-form__label">Nombre</label>
        <input type="text" class="contact-form__input" id="name" name="name" />
        <label for="email" class="contact-form__label">Email</label>
        <input type="email" class="contact-form__input" id="email" name="email" />
        <label for="message" class="contact-form__label">Mensaje</label>
        <textarea
            name="message"
            class="contact-form__textarea"
            id="message"
            cols="30"
            rows="10"
        ></textarea>
        <button class="contact-form__button">Enviar</button>
    </form>
    `;

    // Event to get all the form data, and send a mail
    sendMail(contactEl);

    return contactEl;
}

// Footer component function
function footerComponent() {
    const footerEl = document.createElement("section");
    footerEl.setAttribute("class", "footer");

    // Set content
    footerEl.innerHTML = `<a href="./index.html">
    <img src="./assets/SantiLogo.png" class="footer__logo" />
    </a>
    <div class="footer__container">
    <a
        href="https://www.instagram.com/santiromero_27/"
        class="footer__container-link"
        target="_blank"
    >
        <img
            src="./assets/instagram.svg"
            class="footer__container-link-image"
        />
        <span class="footer__container-link-title">Instagram</span>
    </a>
    <a
        href="https://www.linkedin.com/in/santiago-romero-gherdina-6a92071b3/"
        class="footer__container-link"
        target="_blank"
    >
        <img
            src="./assets/LinkedinLogo.svg"
            class="footer__container-link-image"
        />
        <span class="footer__container-link-title">Linkedin</span>
    </a>
    <a
        href="https://github.com/SantiRomero27"
        class="footer__container-link"
        target="_blank"
    >
        <img
            src="./assets/GithubLogo.svg"
            class="footer__container-link-image"
        />
        <span class="footer__container-link-title">Github</span>
    </a>
    </div>`;

    return footerEl;
}

// Function to append a component, using a container as a reference
function addComponent(componentEl, containerSelector, location) {
    const containerEl = document.querySelector(containerSelector);

    containerEl.insertAdjacentElement(location, componentEl);
}
