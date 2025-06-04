// Variables et constantes

const dashboardButton = document.getElementById("dashboard");
const gatheringButton = document.getElementById("gatherings");
const profileButton = document.getElementById("profile");
const updateButton = document.getElementById("update");
const firstNamefield = document.getElementById("firstName")
const getUserURL = ("http://localhost:8081/api/volunteer/all");
const createUserURL = ("http://localhost:8081/api/volunteer");


// Fonctions 

async function fetchUsers() { // Get users (Volunteer management)
    try {
        const response = await fetch(`${getUserURL}`);

        const result = await response.json();
        console.log(result);

    }
    catch (error) {
        console.error(error.message);
    }
}


async function createUser() {
    try {

        const response = await fetch(`${createUserURL}`);
        const result = await response.json();
        console.log(result);


    }
    catch (error) {
        console.error(error.message);
    }


}



// Exécution du code 
updateButton.addEventListener("click", function () {
    fetchUsers()
});

