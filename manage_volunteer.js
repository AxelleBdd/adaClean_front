// Variables et constantes

const dashboardButton = document.getElementById("dashboard");
const gatheringButton = document.getElementById("gatherings");
const profileButton = document.getElementById("profile");
const addButton = document.getElementById("addVolunteer");
const getUserURL = ("http://localhost:8081/api/volunteer/all");
const createUserURL = ("http://localhost:8081/api/volunteer");

const inputFName = document.getElementById("fname");
const inputLastName = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("Password");
const inputLocation = document.getElementById("Location");

const submitButton = document.getElementById("add");
const cancelButton = document.getElementById("cancel");
const modal = document.getElementById("modal");








// Fonctions 

async function fetchUsers() { // Get users (Volunteer management)
    try {
        const response = await fetch(`${getUserURL}`);
        const result = await response.json();
        console.log(result);

        const nameContainer = document.querySelector(".volunteers-list");
        nameContainer.innerHTML = ""; 

        result.forEach(user => {
            const volunteerItem = document.createElement("div");
            volunteerItem.className = "volunteer-item";

            const volunteerInfo = document.createElement("div");
            volunteerInfo.className = "volunteer-info";

            const volunteerFName = document.createElement("h3");
            const volunteerCity = document.createElement("p");

            volunteerFName.innerText = `${user.first_name} ${user.last_name}`;
            volunteerCity.innerText = `${user.city}`;

            volunteerInfo.appendChild(volunteerFName);
            volunteerInfo.appendChild(volunteerCity);

            volunteerItem.appendChild(volunteerInfo);
            nameContainer.appendChild(volunteerItem); 
        });


    }
    catch (error) {
        console.error(error.message);
    }
}


async function createUser() { // to create the users

    const dataUser = {
        first_name: inputFName.value,
        last_name: inputLastName.value,
        city: inputLocation.value,
        status: "user",
        email: inputEmail.value,
        password: inputPassword.value,
    }
     

    try {

        const response = await fetch(createUserURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // unsupported media type 
                
            },
            body: JSON.stringify(dataUser)

        });
        const result = await response.json();
        alert("Utilisateur créé :", result)



    }
    catch (error) {
        console.error(error.message);
    }


}




// Exécution du code 

fetchUsers();
modal.style.display = "none";

addButton.addEventListener("click", function () {
    modal.style.display = "flex";
});

submitButton.addEventListener("click", function () {
    createUser();
    modal.style.display = "none";
})

cancelButton.addEventListener("click", function () {
    modal.style.display = "none";
    inputFName.innerText = "";
    inputLastName.innerText = "";
    inputEmail.innerText = "";
    inputPassword.innerText = "";
    inputLocation.innerText = "";
})