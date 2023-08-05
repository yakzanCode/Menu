// Wait for the document to be fully loaded before applying the JS code
document.addEventListener("DOMContentLoaded", function () {

    // Get all the menu items
    const menuItems = document.querySelectorAll(".menu-item");

    // Function to handle the Save button click event
    function handleSaveButtonClick(event) {
        const menuItem = event.target.closest(".menu-item");
        const newName = menuItem.querySelector("input[type='text']").value;
        const newPrice = menuItem.querySelector("input[type='number']").value;
        menuItem.querySelector(".name").innerText = newName;
        menuItem.querySelector(".price").innerText = "$" + newPrice;
        // Hide the input fields and the Save button after saving
        menuItem.querySelector(".below").classList.remove("show");
    }

    // Function to handle the Edit icon click event
    function handleEditIconClick(event) {
        const menuItem = event.target.closest(".menu-item");
        menuItem.querySelector(".below").classList.toggle("show");
    }

    // Attach event listeners to the Save buttons and Edit icons
    menuItems.forEach((menuItem) => {
        const saveButton = menuItem.querySelector(".save-button");
        const editIcon = menuItem.querySelector(".edit-icon");
        saveButton.addEventListener("click", handleSaveButtonClick);
        editIcon.addEventListener("click", handleEditIconClick);
    });

});