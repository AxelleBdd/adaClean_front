// Variables et constantes

const inputFName = document.getElementById("fname");
const inputLastName = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputLocation = document.getElementById("location");
const addButton = document.getElementById("addVolunteer");
const submitButton = document.getElementById("add");
const cancelButton = document.getElementById("cancel");
const modal = document.getElementById("modal");
const editButton = document.getElementById("edit");
const editCancelButton = document.getElementById("editCancel");
const editModal = document.getElementById("editModal");



const getUserURL = ("http://localhost:8081/api/volunteer/all");
const userURL = ("http://localhost:8081/api/volunteer");

// Fonctions 

async function fetchUsers() { // api call to Get volunteers created (Volunteer management)

    try {
        const response = await fetch(`${getUserURL}`);
        const result = await response.json();
        console.log(result);

        const nameContainer = document.querySelector("#container");
        nameContainer.innerHTML = "";
        result.forEach(user => {
            const volunteerItem = document.createElement("div");
            volunteerItem.className = "volunteer-item";

            const volunteerInfo = document.createElement("div");
            volunteerInfo.className = "volunteer-info";

            const volunteerFName = document.createElement("h3");
            const volunteerCity = document.createElement("p");

            const VolunteerAction = document.createElement("div");
            VolunteerAction.className = "volunteer-actions";

            volunteerFName.innerText = `${user.first_name} ${user.last_name}`;
            volunteerCity.innerText = `${user.city}`;

            volunteerInfo.appendChild(volunteerFName);
            volunteerInfo.appendChild(volunteerCity);

            volunteerItem.appendChild(volunteerInfo);
            nameContainer.appendChild(volunteerItem);

            const updateButton = document.createElement('button'); //Création bouton update
            updateButton.className = "action-btn";
            updateButton.className = "edit-btn";

            const deleteButton = document.createElement('button'); //Création bouton delete
            deleteButton.className = "action-btn";
            deleteButton.className = "delete-btn";


            svgUpdate(updateButton);
            svgDelete(deleteButton);

            deleteButton.addEventListener("click", () => {
                deleteUser(user.id);

            });

            updateButton.addEventListener("click", () => {
                editModal.style.display = "flex";
                // editUser(user.id);

            });

            volunteerItem.appendChild(VolunteerAction);
            VolunteerAction.appendChild(updateButton);
            VolunteerAction.appendChild(deleteButton);





        });

    }
    catch (error) {
        console.error(error.message);
    }
}

function svgDelete(button) {

    // Créer le SVG avec createElementNS
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('class', 'lucide lucide-trash2 lucide-trash-2');
    svg.setAttribute('aria-hidden', 'true');

    // Créer chaque élément path avec createElementNS
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M3 6h18');

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6');

    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2');

    // Créer chaque élément line avec createElementNS
    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '10');
    line1.setAttribute('x2', '10');
    line1.setAttribute('y1', '11');
    line1.setAttribute('y2', '17');

    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '14');
    line2.setAttribute('x2', '14');
    line2.setAttribute('y1', '11');
    line2.setAttribute('y2', '17');

    // Assembler tous les éléments dans le SVG
    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    svg.appendChild(line1);
    svg.appendChild(line2);

    button.appendChild(svg);

}

function svgUpdate(button) {
    // Créer le SVG avec createElementNS

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('class', 'lucide lucide-trash2 lucide-trash-2');
    svg.setAttribute('aria-hidden', 'true');
    // Créer chaque élément path avec createElementNS
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z');
    // Assembler tous les éléments dans le SVG
    svg.appendChild(path1);
    button.appendChild(svg);
}

async function createUser() {

    const dataUser = {
        first_name: inputFName.value,
        last_name: inputLastName.value,
        city: inputLocation.value,
        status: "user",
        email: inputEmail.value,
        password: inputPassword.value,
    }

    try {

        const response = await fetch(userURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

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

async function deleteUser(id) {

    try {

        const response = await fetch(`${userURL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",

            }

        });

        // const result = await response.json();

        if (response.ok) {

            alert("Utilisateur supprimé !");
            // document.querySelector("#card").innerHTML = "";
            fetchUsers();
        } else {
            alert("Erreur lors de la suppression");
        }

    }

    catch (error) {
        console.error(error.message);
    }

}

async function editUser(id) {

     const dataUser = {
        first_name: inputFName.value,
        last_name: inputLastName.value,
        city: inputLocation.value,
        status: "user",
        email: inputEmail.value,
        password: inputPassword.value,
    }

    try {

        const response = await fetch(`${userURL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(dataUser)

        });

        const result = await response.json();

        if (result.ok) {
            alert("Utilisateur modifié !");
            document.querySelector("#card").innerHTML = "";
            fetchUsers();
        } else {
            alert("Erreur lors de la modification");
        }

    }

    catch (error) {
        console.error(error.message);
    }

}




// Exécution du code 

fetchUsers();
modal.style.display = "none";
editModal.style.display = "none";

addButton.addEventListener("click", function () {
    modal.style.display = "flex";
});

submitButton.addEventListener("click", function () {
    createUser();
    modal.style.display = "none";
})

editButton.addEventListener("click", function () {
    editUser(id);
    modal.style.display = "flex";
});

editCancelButton.addEventListener("click", function () {
    modal.style.display = "none";
    inputFName.innerText = "";
    inputLastName.innerText = "";
    inputEmail.innerText = "";
    inputPassword.innerText = "";
    inputLocation.innerText = "";
})

cancelButton.addEventListener("click", function () {
    modal.style.display = "none";
    inputFName.innerText = "";
    inputLastName.innerText = "";
    inputEmail.innerText = "";
    inputPassword.innerText = "";
    inputLocation.innerText = "";
})