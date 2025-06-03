// Variables
const inputFName = document.getElementById("fname");
const inputLastName = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("Password");
const inputLocation = document.getElementById("Location");
const submitButton = document.getElementById("add")
const createUserURL = ("http://localhost:8081/api/volunteer");



// Fonctions 


async function createUser() { // to create the users

    const dataUser = {
        first_name: inputFName.value,
        last_name: inputLastName.value,
        city: inputLocation.value,
        status: "user",
        email: inputEmail.value,
        password: inputPassword.value,
    }
    console.log(dataUser) // ok fonctionnel 

    try {

        const response = await fetch(createUserURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // unsupported media type 
                
            },
            body: JSON.stringify(dataUser)

        });
        const result = await response.json();
        console.log("Utilisateur créé :", result)



    }
    catch (error) {
        console.error(error.message);
    }


}


//Exécution du code 
submitButton.addEventListener("click", function () {
    createUser()

})
