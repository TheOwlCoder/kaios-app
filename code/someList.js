(function (app) {
    const listLength = 15; /* list items */

    window.addEventListener("load", function () {
        var listContainer = document.getElementById('generatedList');
        populateList(listContainer);
    })

    function populateList(container) {
        for (let i = 0; i < listLength; i++) {
            var entry = document.createElement("div");
            entry.className = 'navItem';
            entry.tabIndex = i * 10;
            entry.setAttribute('data-function', 'changeColor');

            var headline = document.createElement("h3");
            headline.innerText = 'Post Placeholder #' + (i+1);
            entry.appendChild(headline);
            container.appendChild(entry);
        }
    }

    return app;
}(MODULE));