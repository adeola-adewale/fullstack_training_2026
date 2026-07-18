document.addEventListener("DOMContentLoaded", () =>{
    const registrationForm = document.getElementById("registrationForm");
    const outputContainer = document.getElementById("output");

  // display previously saved Data -- function ()
displaySavedData();

registrationForm.addEventListener("submit", (e) => {
        e.preventDefault(); // stop page reload

    // form validations

    // basic password check
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return; // stop form submission if passwords don't match
    }

    // Capture the selected text from dropdowns instead of the numeric values
        const accountSelect = document.getElementById("accountType");
        const selectedAccountText = accountSelect.options[accountSelect.selectedIndex].text;

        const idSelect = document.getElementById("idType");
        const selectedIdText = idSelect.options[idSelect.selectedIndex].text;

    // Collecting all form values into a structured data object
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        gender: document.getElementById("gender").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        dateOfBirth: document.getElementById("dateOfBirth").value,
        address: document.getElementById("address").value,
        extFirstName: document.getElementById("externalFirstName").value,
        extLastName: document.getElementById("externalLastName").value,
        extPhoneNumber: document.getElementById("externalPhoneNumber").value,
        extEmail: document.getElementById("externalEmail").value,
        accountType: selectedAccountText, // saved text selected from the dropdown
        idType: selectedIdText, // saved text selected from the dropdown
        password: confirmPassword // storing the confirmed password
    };

    // Load existing records from session storage or start an empty array if none exists
    const existingData = JSON.parse(sessionStorage.getItem("registrations")) || [];

    // Add a new record object into the array
    existingData.push(formData);

    // Save updated array back to session storage named registrations
    sessionStorage.setItem("registrations", JSON.stringify(existingData));

    // refresh your form display function to show the new record
    displaySavedData();

    // reset the form after submission
    registrationForm.reset();
});


function displaySavedData() {
    const data = JSON.parse(sessionStorage.getItem("registrations")) || [];

    if (data.length === 0) {
        outputContainer.innerHTML = "<p>No registration/records saved yet.</p>";
        return;
    }

    let html = "<h2>Saved Registrations</h2>";
    data.forEach((entry, index) => {
        html += `
            <div>
                <h3>Registration #${index + 1}</h3>
                <p>Name: ${entry.firstName} ${entry.lastName}</p>
                <p>Gender: ${entry.gender}</p>
                <p>Phone Number: ${entry.phoneNumber}</p>
                <p>Date of Birth: ${entry.dateOfBirth}</p>
                <p>Address: ${entry.address}</p>
                <p>External Contact: ${entry.extFirstName} ${entry.extLastName}, Phone: ${entry.extPhoneNumber}, Email: ${entry.extEmail}</p>
                <p>Account Type: ${entry.accountType}</p>
                <p>ID Type: ${entry.idType}</p>
            </div>
        `;
    });

    outputContainer.innerHTML = html;
}

});