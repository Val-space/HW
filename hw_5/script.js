// const registrationForm = document.getElementById("registration-form"),
//     userName = document.querySelector('.name'),
//     userEmail = document.querySelector('.email'),
//     userAge = document.querySelector('.age'),
//     userComment = document.querySelector(".comment"),
//     userCountry = document.querySelector(".selectedCountry");

// const createUser = (name, email, age, comment, country) => {
//     let user = {
//         name,
//         email,
//         age,
//         comment,
//         country
//     }
//     return user;
// }

// registrationForm.onsubmit = (e) => {
//     e.preventDefault();
//     console.log(createUser(userName.value, userEmail.value, userAge.value, userComment.value, userCountry.value));
// }





const registrationForm = document.getElementById("registration-form");

registrationForm.onsubmit = (e) => {
    let name = document.querySelector('#registration-form input[name="name"]')?.value,
        email = document.querySelector('#registration-form input[name="email"]')?.value,
        age = +document.querySelector('#registration-form input[name="age"]')?.value,
        comment = document.querySelector('#registration-form [name="comment"]')?.value,
        country = document.querySelector('#registration-form [name="country"]')?.value;

    let user = {
        name,
        email,
        age,
        comment,
        country
    }
    e.preventDefault();
    console.log(user);
}