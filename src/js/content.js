// Function to process the welcome data
function processWelcome(data, welcomeSection, upperContainer) {
    // Get all the attributes
    const welcomeImageUrl = data.includes.Asset[0].fields.file.url;
    const welcomeTitle = data.items[0].fields.welcomeTitle;
    const welcomeSubtitle = data.items[0].fields.welcomeSubtitle;

    // Modify the section content
    upperContainer.style.backgroundImage = `url(${welcomeImageUrl})`;
    welcomeSection.querySelector(".welcome__title").textContent = welcomeTitle;
    welcomeSection.querySelector(".welcome__title:last-of-type").textContent =
        welcomeSubtitle;
}

// Function to get the Welcome content
function getWelcomeContent(welcomeSection, upperContainer) {
    // API Fetch
    fetch(
        "https://cdn.contentful.com/spaces/9635uuvwn9dq/environments/master/entries?access_token=cgtQv23ag7qZw92QlPnJwslq6vWfK8sDwB8fNk62QTI&content_type=welcome"
    )
        .then((resp) => resp.json())
        .then((data) => processWelcome(data, welcomeSection, upperContainer));
}

// Function to process the info data
function processInfo(data, infoSection) {
    // Get the attributes
    const infoTitle = data.items[0].fields.presentationTitle;
    const infoText = data.items[0].fields.presentationText;
    const infoImageUrl = data.includes.Asset[0].fields.file.url;

    // Modify the section content
    infoSection.querySelector(".info__image").setAttribute("src", infoImageUrl);
    infoSection.querySelector(".info__title").textContent = infoTitle;
    infoSection.querySelector(".info__text").textContent = infoText;
}

// Function to get the Info content
function getInfoContent(infoSection) {
    // API Fetch
    fetch(
        "https://cdn.contentful.com/spaces/9635uuvwn9dq/environments/master/entries?access_token=cgtQv23ag7qZw92QlPnJwslq6vWfK8sDwB8fNk62QTI&content_type=presentation"
    )
        .then((resp) => resp.json())
        .then((data) => processInfo(data, infoSection));
}

// Function to get the image URL of a service
function getImageUrl(imageId, assetArray) {
    // Get the image ID that matches with the service ID
    const result = assetArray.find((item) => item.sys.id == imageId);

    return result.fields.file.url;
}

// Function to process the services data
function processServices(data, parentEl) {
    // Get all the items in order, and the assets
    const items = data.items.reverse();
    const assets = data.includes.Asset;

    // Iterate all the items
    items.forEach((item) => {
        // Create the service card element
        let cardEl = document.createElement("div");
        cardEl.setAttribute("class", "services-card");

        // Get all data from the item
        let title = item.fields.serviceTitle;
        let description = item.fields.serviceDescription;
        let imageUrl = getImageUrl(item.fields.serviceImage.sys.id, assets);

        // Give properties to the card element
        cardEl.innerHTML = `<img class="services-card__image" />
        <article class="services-card__article">
            <h3 class="services-card__title">${title}</h3>
            <p class="services-card__text">${description}</p>
        </article>`;

        // Set the src attribute for the img tag
        cardEl
            .querySelector(".services-card__image")
            .setAttribute("src", imageUrl);

        // Append the card to its parent
        parentEl.appendChild(cardEl);
    });
}

// Function to get the services content
function getServices(parentEl) {
    // API Fetch
    fetch(
        "https://cdn.contentful.com/spaces/9635uuvwn9dq/environments/master/entries?access_token=cgtQv23ag7qZw92QlPnJwslq6vWfK8sDwB8fNk62QTI&content_type=service"
    )
        .then((resp) => resp.json())
        .then((data) => processServices(data, parentEl));
}

// Function to process the portfolio content
function processPortfolio(data, parentEl) {
    // Get all the items, and the assets
    const items = data.items.reverse();
    const assets = data.includes.Asset;

    // Iterate all the items, and create the portfolio cards
    items.forEach((item) => {
        // Create the card
        let cardEl = document.createElement("div");
        cardEl.setAttribute("class", "portfolio-card");

        // Get all item data
        let title = item.fields.portfolioTitle;
        let description = item.fields.portfolioDescription;
        let link = item.fields.portfolioLink;

        // Get the image URL
        let imageUrl = getImageUrl(item.fields.portfolioImage.sys.id, assets);

        // Give properties to the portfolio card
        cardEl.innerHTML = `<img class="portfolio-card__image" />
        <article class="portfolio-card__article">
            <h3 class="portfolio-card__title">${title}</h3>
            <p class="portfolio-card__description">${description}</p>
            <a class="portfolio-card__link" target="_blank">Ver más</a>
        </article>`;

        // Give the remaining attributes
        cardEl
            .querySelector(".portfolio-card__image")
            .setAttribute("src", imageUrl);
        cardEl
            .querySelector(".portfolio-card__link")
            .setAttribute("href", link);

        // Append the portfolio card
        parentEl.appendChild(cardEl);
    });
}

// Function to get the portfolio content
function getPortfolio(parentEl) {
    // API Fetch
    fetch(
        "https://cdn.contentful.com/spaces/9635uuvwn9dq/environments/master/entries?access_token=cgtQv23ag7qZw92QlPnJwslq6vWfK8sDwB8fNk62QTI&content_type=portfolio"
    )
        .then((res) => res.json())
        .then((data) => processPortfolio(data, parentEl));
}
