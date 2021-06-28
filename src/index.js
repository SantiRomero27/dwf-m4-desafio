// Main function for index page
function main() {
    // Aux variables
    const upperContainerEl = document.querySelector(".upper-container");
    const welcomeSectionEl = document.querySelector(".welcome");
    const infoSectionEl = document.querySelector(".info");
    const servicesContainerEl = document.querySelector(".services__container");

    // Modal behavior management
    manageModal();

    // Get the Welcome content
    getWelcomeContent(welcomeSectionEl, upperContainerEl);

    // Get the info content
    getInfoContent(infoSectionEl);

    // Get the service cards
    getServices(servicesContainerEl);
}

// Main execution
main();
