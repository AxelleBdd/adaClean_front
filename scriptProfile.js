// Variables et constantes

const dashboardButton = document.getElementById("dashboard");
const gatheringButton = document.getElementById("gatherings");
const profileButton = document.getElementById("profile");
const userURL = ("http://localhost:8081/api/volunteer/all");
const updateButton = document.getElementById("update");





// Fonctions 

async function newUser () { // Create a user
        try {
            const response = await fetch(`${userURL}`);
           // if (!response.ok) {
               // throw new Error(`Response status: ${response.status}`);

               const result = await response.json();
               console.log(result);
           // }

                 
       
        } 
        catch (error) {
            console.error(error.message);
        }
    }

    












// Exécution du code 
updateButton.addEventListener("click", function () {
newUser()
});

