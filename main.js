const formFeedBack = document.querySelector("#formFeedBack");

function showErrorMessage(selectorName, errorMessage) {
    document.querySelector(`#error-${selectorName}`).textContent = errorMessage;
}

formFeedBack.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formFeedBack);
    const name = formData.get("username");
    const message = formData.get("message");
    const email = formData.get("email");
    const phone = formData.get("phone");

    let hasError = false;

    if (!name) {
        showErrorMessage("name", "The name is required.");
        hasError = true;
    } else if (!/^[a-zA-Zа-яА-ЯёЁ]+$/.test(name)) {
        showErrorMessage("name", "The name must contain only letters.");
    } else {
        showErrorMessage("name", "");
    }

    if (!message) {
        showErrorMessage("message", "The message is required.");
        hasError = true;
    } else if (message.length < 5) {
        showErrorMessage("message", "The message cannot contain less than 5 characters.");
    } else {
        showErrorMessage("message", "");
    }

    if (!phone) {
        showErrorMessage("phone", "Phone required!");
        hasError = true;
    } else if (!/^\+380/.test(phone)) {
        showErrorMessage("phone", "The number must start with +380!");
        hasError = true;
    } else if (phone.length !== 13) {
        showErrorMessage("phone", "Incorrect number of digits");
        hasError = true;
    } else {
        showErrorMessage("phone", "");
        hasError = false;
    }

    if (!email) {
        showErrorMessage("email", "Email required!");
        hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showErrorMessage("email", "Email should be correct!");
        hasError = true;
    } else {
        showErrorMessage("email", "");
        hasError = false;
    }

    if (!hasError) {
        console.log('Sending date....')
    }
})