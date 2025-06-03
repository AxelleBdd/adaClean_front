// Variables et constantes

const dashboardButton = document.getElementById("dashboard");
const gatheringButton = document.getElementById("gatherings");
const profileButton = document.getElementById("profile");
const addButton = document.getElementById("addVolunteer");
const getUserURL = ("http://localhost:8081/api/volunteer/all");
const createUserURL = ("http://localhost:8081/api/volunteer");






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

fetchUsers();

addButton.addEventListener("click", function () {
    fetchUsers()
});

