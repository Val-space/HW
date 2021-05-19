const submitBtn = document.querySelector(".submit-btn"),
    userName = document.getElementById('name'),
    userEmail = document.getElementById('email'),
    userAge = document.getElementById('age'),
    userComment = document.getElementById("textarea"),
    userCountry = document.getElementById("selectedCountry");

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

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(createUser(userName.value, userEmail.value, userAge.value, userComment.value, userCountry.value));
})