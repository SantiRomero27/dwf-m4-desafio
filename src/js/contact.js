// Function for contact page
function mainContact() {
    // Add components
    addComponent(headerComponent(), ".upper-container", "afterbegin");
    addComponent(
        contactComponent("Contacto"),
        ".contact-section",
        "afterbegin"
    );
    addComponent(footerComponent(), ".upper-container", "afterend");
}

// Execution
mainContact();
