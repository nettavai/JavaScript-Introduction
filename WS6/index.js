// Exercise 1: Saving Data to LocalStorage
function getData() {
    // Get the input values
    const destination = document.getElementById('destination').value;
    const arrival = document.getElementById('arrival').value;

    // Validate inputs
    if (!destination || !arrival) {
        alert("Please fill out all fields before saving!");
        return;
    }

    // Get selected services
    const services = [];
    document.querySelectorAll('#services input[type="checkbox"]:checked').forEach((checkbox) => {
        services.push(checkbox.value);
    });

    // Save data to LocalStorage
    localStorage.setItem('destination', destination);
    localStorage.setItem('arrival', arrival);
    localStorage.setItem('services', JSON.stringify(services));

    alert('Data saved to LocalStorage!');
}

// Exercise 2: Reloading Saved Data from LocalStorage
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

// Exercise 3: Using SessionStorage
function getSessionData() {
    // Get the input values
    const destination = document.getElementById('destination').value;
    const arrival = document.getElementById('arrival').value;

    // Validate inputs
    if (!destination || !arrival) {
        alert("Please fill out all fields before saving!");
        return;
    }

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

// Reload SessionStorage Data
function loadSessionData() {
    const destination = sessionStorage.getItem('destination');
    const arrival = sessionStorage.getItem('arrival');
    const services = JSON.parse(sessionStorage.getItem('services'));

    if (destination || arrival || services) {
        const sessionDataDiv = document.getElementById('sessiondata');
        sessionDataDiv.innerHTML = `
            <p><strong>Destination:</strong> ${destination || 'N/A'}</p>
            <p><strong>Arrival:</strong> ${arrival || 'N/A'}</p>
            <p><strong>Services:</strong> ${services ? services.join(', ') : 'None'}</p>
        `;
    }
}

// Clear All Saved Data
function clearData() {
    localStorage.clear();
    sessionStorage.clear();
    alert("All saved data has been cleared!");
    document.getElementById('sessiondata').innerHTML = "Session data goes here!";
}

// Call load functions on page load
window.onload = function () {
    loadData(); // Load LocalStorage data
    loadSessionData(); // Load SessionStorage data
};
