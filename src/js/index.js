// Main function for index page
function mainIndex() {
    // Aux variables
    const upperContainerEl = document.querySelector(".upper-container");
    const welcomeSectionEl = document.querySelector(".welcome");
    const infoSectionEl = document.querySelector(".info");
    const servicesContainerEl = document.querySelector(".services__container");

    // Add components
    addComponent(headerComponent(), ".upper-container", "afterbegin");
    addComponent(contactComponent("Escribime"), ".contact", "afterbegin");
    addComponent(footerComponent(), ".contact", "afterend");

    // Get the Welcome content
    getWelcomeContent(welcomeSectionEl, upperContainerEl);

    // Get the info content
    getInfoContent(infoSectionEl);

    // Get the service cards
    getServices(servicesContainerEl);
}

// Main execution
mainIndex();
