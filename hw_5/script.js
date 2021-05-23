const submitBtn = document.querySelector(".submit-btn"),
    registrationForm = document.getElementById("registration-form"),
    userName = document.querySelector('.name'),
    userEmail = document.querySelector('.email'),
    userAge = document.querySelector('.age'),
    userComment = document.querySelector(".comment"),
    userCountry = document.querySelector(".selectedCountry");

const createUser = (name, email, age, comment, country) => {
    let user = {
        name,
        email,
        age,
        comment,
        country
    }
    return user;
}

// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(createUser(userName.value, userEmail.value, userAge.value, userComment.value, userCountry.value));
// })
registrationForm.onsubmit = (e) => {
    e.preventDefault();
    console.log(createUser(userName.value, userEmail.value, userAge.value, userComment.value, userCountry.value));
}