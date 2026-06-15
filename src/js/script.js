const submitBtn = document.querySelector("#submit-btn");

const informations = document.querySelectorAll('input[type="text"] input[type="email"] textarea');

submitBtn.addEventListener("click", () => {

    names.forEach(name => console.log(name.value));

});