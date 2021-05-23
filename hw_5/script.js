const submitBtn = document.querySelector(".submit-btn"),
<<<<<<< HEAD
    registrationForm = document.getElementById("registration-form"),
    userName = document.querySelector('.name'),
    userEmail = document.querySelector('.email'),
    userAge = document.querySelector('.age'),
    userComment = document.querySelector(".comment"),
    userCountry = document.querySelector(".selectedCountry");
=======
    userName = document.getElementById('name'),
    userEmail = document.getElementById('email'),
    userAge = document.getElementById('age'),
    userComment = document.getElementById("textarea"),
    userCountry = document.getElementById("selectedCountry");
>>>>>>> 62b36416a1d079bd8d7b1713c233137a77c4a506

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

<<<<<<< HEAD
// submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(createUser(userName.value, userEmail.value, userAge.value, userComment.value, userCountry.value));
// })
registrationForm.onsubmit = (e) => {
    e.preventDefault();
    console.log(createUser(userName.value, userEmail.value, userAge.value, userComment.value, userCountry.value));
}
=======
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(createUser(userName.value, userEmail.value, userAge.value, userComment.value, userCountry.value));
})
>>>>>>> 62b36416a1d079bd8d7b1713c233137a77c4a506
