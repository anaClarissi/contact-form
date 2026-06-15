const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const textsFields = document.querySelectorAll('input[type="text"], textarea');

    const email = document.querySelector("#email");

    const query = document.querySelector('input[name="query-group"]:checked');

    const consent = document.querySelector("#consent");


    checkTextsInput(textsFields);

    checkEmail(email);

    checkQueryRadio(query);

    checkCosentCheckBox(consent);

});

function checkTextsInput (fields) {

    fields.forEach(field => {

        if (field.value.trim() === "") {

            showMErrorState(field);

        } else {

            removeErrorState(field);

        }

    });

}

function checkEmail (email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email.value)) {

        removeErrorState(email);
        
    } else {
        
        showMErrorState(email);

    }

}

function checkQueryRadio (query) {

    if (query === null) {

        shownQueryErrorState();

    } else {

        removeQueryErrorState();

    }

}

function checkCosentCheckBox (checkbox) {

    if (!checkbox.checked) {

        showMErrorState(checkbox);

    } else {

        removeErrorState(checkbox);

    }

}


function removeErrorState(element) {

    const errorId = element.getAttribute("aria-describedby");

    const messageError = document.getElementById(errorId);

    messageError.hidden = true;

    element.classList.remove("error-state");

}

function removeQueryErrorState() {

    const messageError = document.getElementById("query-error");

    messageError.hidden = true;

    const queryLabels = document.querySelectorAll("#querys label");

    queryLabels.forEach(label => label.classList.remove("error-state"));

}

function shownQueryErrorState() {

    const messageError = document.getElementById("query-error");

    messageError.hidden = false;

    const queryLabels = document.querySelectorAll("#querys label");

    queryLabels.forEach(label => label.classList.add("error-state"));

}

function showMErrorState (element) {

    const errorId = element.getAttribute("aria-describedby");

    const messageError = document.getElementById(errorId);

    messageError.hidden = false;

    element.classList.add("error-state");

}
