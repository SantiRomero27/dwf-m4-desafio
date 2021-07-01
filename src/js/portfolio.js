// Main function for the portfolio page
function mainPortfolio() {
    // Aux variables
    const containerEl = document.querySelector(".portfolio-section__container");

    // Add components
    addComponent(headerComponent(), ".upper-container", "afterbegin");
    addComponent(footerComponent(), ".portfolio-section", "afterend");

    // Get the portfolio content
    getPortfolio(containerEl);
}

// Exceution
mainPortfolio();
