// Main function for services
function mainServices() {
    // Aux variables
    const containerEl = document.querySelector(".services-section__container");

    // Add components
    addComponent(headerComponent(), ".upper-container", "afterbegin");
    addComponent(footerComponent(), ".services-section", "afterend");

    // Get services content
    getServices(containerEl);
}

// Execution
mainServices();
