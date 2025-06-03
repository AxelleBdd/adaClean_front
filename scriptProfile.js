// Variables et constantes

const dashboardButton = document.getElementById("dashboard");
const gatheringButton = document.getElementById("gatherings");
const profileButton = document.getElementById("profile");
const updateButton = document.getElementById("update");
const userURL = ("http://localhost:8081/api/volunteer/all"); 





// Fonctions 

async function fetchUsers () { // Get users
        try {
            const response = await fetch(`${userURL}`);
           
               const result = await response.json();
               console.log(result);
                 
        } 
        catch (error) {
            console.error(error.message);
        }
    }

    
async function createUser() {
    



}











// Exécution du code 
updateButton.addEventListener("click", function () {
fetchUsers()
});

