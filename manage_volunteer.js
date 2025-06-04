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
           

            volunteerFName.innerText = `${user.first_name} ${user.last_name}`;
            volunteerCity.innerText = `${user.city}`;

            volunteerInfo.appendChild(volunteerFName);
            volunteerInfo.appendChild(volunteerCity);

            volunteerItem.appendChild(volunteerInfo);
            nameContainer.appendChild(volunteerItem);

            
            const deleteButton = document.createElement('button'); //Création bouton delete
            deleteButton.className = "action-btn" 
            deleteButton.className ="delete-btn";


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


            deleteButton.appendChild(svg);
            volunteerItem.appendChild(VolunteerAction);
            VolunteerAction.appendChild(deleteButton);

            return deleteButton;
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



