// TEHTÄVÄ 1
function getData() {
    // Get the input values
    let destination = document.getElementById('destination').value;
    let arrival = document.getElementById('arrival').value;

    // Get selected services
    let services = [];
    document.querySelectorAll('#services input[type="checkbox"]:checked').forEach((checkbox) => {
        services.push(checkbox.value);
    });

    // Save data to LocalStorage
    localStorage.setItem('destination', destination);
    localStorage.setItem('arrival', arrival);
    localStorage.setItem('services', JSON.stringify(services));

    alert('Data saved to LocalStorage!');
}

// TEHTÄVÄ 2
function loadData() {
    // Retrieve data from LocalStorage
    const destination = localStorage.getItem('destination');
    const arrival = localStorage.getItem('arrival');
    const services = JSON.parse(localStorage.getItem('services'));

    // Display data if it exists
    if (destination || arrival || services) {
        const sessionDataDiv = document.getElementById('sessiondata');
        sessionDataDiv.innerHTML = `
            <p><strong>Destination:</strong> ${destination || 'N/A'}</p>
            <p><strong>Arrival:</strong> ${arrival || 'N/A'}</p>
            <p><strong>Services:</strong> ${services ? services.join(', ') : 'None'}</p>
        `;
    }
}

// TEHTÄVÄ 3
function getSessionData() {
    // Get the input values
    const destination = document.getElementById('destination').value;
    const arrival = document.getElementById('arrival').value;

    // Get selected services
    const services = [];
    document.querySelectorAll('#services input[type="checkbox"]:checked').forEach((checkbox) => {
        services.push(checkbox.value);
    });

    // Save data to SessionStorage
    sessionStorage.setItem('destination', destination);
    sessionStorage.setItem('arrival', arrival);
    sessionStorage.setItem('services', JSON.stringify(services));

    alert('Data saved to SessionStorage!');
}

function loadSessionData() {
    // Retrieve data from SessionStorage
    const destination = sessionStorage.getItem('destination');
    const arrival = sessionStorage.getItem('arrival');
    const services = JSON.parse(sessionStorage.getItem('services'));

    // Display data if it exists
    if (destination || arrival || services) {
        const sessionDataDiv = document.getElementById('sessiondata');
        sessionDataDiv.innerHTML = `
            <p><strong>Destination:</strong> ${destination || 'N/A'}</p>
            <p><strong>Arrival:</strong> ${arrival || 'N/A'}</p>
            <p><strong>Services:</strong> ${services ? services.join(', ') : 'None'}</p>
        `;
    }
}

// Call load functions on page load
window.onload = function () {
    // Load LocalStorage data for Exercise 2
    loadData();

    // Load SessionStorage data for Exercise 3
    loadSessionData();
};
