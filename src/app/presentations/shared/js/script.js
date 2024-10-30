// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la connexion
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === 'admin' && password === 'admin') {
                window.location.href = '../home.html';
            } else {
                alert('Identifiant ou mot de passe incorrect');
            }
        });
    }

    // Génération des boîtes de statistiques
    const statsContainer = document.getElementById('statsContainer');
    if (statsContainer) {
        const stats = [
            { title: "Nombre d'élève", value: "128,100" },
            { title: "Nombre de professeur", value: "128,100" },
            { title: "Nombre d'utilisateur", value: "128,100" },
            { title: "Élève par genre", value: "<div id='piechart'></div>" }
        ];

        stats.forEach(stat => {
            const statBox = document.createElement('div');
            statBox.className = 'stat-box';
            statBox.innerHTML = `<h3>${stat.title}</h3><p>${stat.value}</p>`;
            statsContainer.appendChild(statBox);
        });
    }

    // Gestion de la déconnexion
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
});



google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Genre', 'Nombre'],
                ['Homme', 70000],
                ['Femme', 58100]
            ]);

            var options = {
                title: 'Élève par genre'
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
            chart.draw(data, options);
}



// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la déconnexion
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    // Gestion de l'ajout d'un élève
    const addStudentForm = document.getElementById('addStudentForm');
    if (addStudentForm) {
        addStudentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Logique pour ajouter un élève
            alert('Élève ajouté avec succès');
        });
    }

    // Gestion du bouton Annuler
    const cancelBtn = document.getElementById('cancel');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            window.location.href = 'eleves.html';
        });
    }
});

function showConfirmationPopup() {
    const popup = document.getElementById("confirmationPopup");
    popup.style.display = "block"; // Affiche le pop-up
    console.log("Pop-up affiché");
}

function hideConfirmationPopup() {
    const popup = document.getElementById("confirmationPopup");
    popup.style.display = "none"; // Cache le pop-up
    console.log("Pop-up caché");
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("cancelBtn").addEventListener("click", hideConfirmationPopup);
    document.getElementById("confirmBtn").addEventListener("click", function() {
        hideConfirmationPopup();
        // Logique supplémentaire pour la suppression ici
    });

    window.onload = function() {
        hideConfirmationPopup(); // S'assurer que le pop-up est caché au chargement
    };
});
