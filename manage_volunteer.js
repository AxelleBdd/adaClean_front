// Variables et constantes

const addButton = document.getElementById("addVolunteer");
const getUserURL = ("http://localhost:8081/api/volunteer/all");


// Fonctions 

async function fetchUsers() { // api call to Get volunteers created (Volunteer management)
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
            
            const VolunteerAction = document.createElement("div")
            VolunteerAction.classList.add("volunteer-actions");
            const deleteButton = document.createElement("button"); // added delete button for Delete request. 
            deleteButton.classList.add("action-btn", "delete-btn");

            volunteerFName.innerText = `${user.first_name} ${user.last_name}`;
            volunteerCity.innerText = `${user.city}`;

            volunteerInfo.appendChild(volunteerFName);
            volunteerInfo.appendChild(volunteerCity);

            volunteerItem.appendChild(volunteerInfo);
            nameContainer.appendChild(volunteerItem);

            volunteerItem.appendChild(VolunteerAction);
            VolunteerAction.appendChild(deleteButton);
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

// addButton.addEventListener("click", function () {
//     fetchUsers()
// });

