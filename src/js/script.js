const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const textsFields = document.querySelectorAll('input[type="text"], textarea');

    const email = document.querySelector("#email");

    const query = document.querySelector('input[name="query-group"]:checked');

    const consent = document.querySelector("#consent");


    const textsValid = checkTextsInput(textsFields);

    const emailValid = checkEmail(email);

    const radioValid = checkQueryRadio(query);

    const consentValid = checkCosentCheckBox(consent);

    if (textsValid && emailValid && radioValid && consentValid) {

        showSuccessMessage();

    }

});

function checkTextsInput (fields) {

    let isValid = true;

    fields.forEach(field => {

        if (field.value.trim() === "") {

            showMErrorState(field);

            isValid = false;

        } else {

            removeErrorState(field);

        }

    });

    return isValid;

}

function checkEmail (email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email.value)) {

        removeErrorState(email);

        return true;
        
    } else {
        
        showMErrorState(email);

        return false;

    }

}

function checkQueryRadio (query) {

    if (query === null) {

        shownQueryErrorState();

        return false;

    } else {

        removeQueryErrorState();

        return true;

    }

}

function checkCosentCheckBox (checkbox) {

    if (!checkbox.checked) {

        showMErrorState(checkbox);

        return false;

    } else {

        removeErrorState(checkbox);

        return true;

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


function showSuccessMessage() {

    const successMessage = document.querySelector("#message-sent-alert");

    successMessage.hidden = false;

    successMessage.classList.add("active");

    setTimeout(() => {
        
        successMessage.classList.remove("active");
        
        successMessage.hidden = true;

    }, 3000);

}