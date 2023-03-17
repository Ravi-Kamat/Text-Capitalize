
function capitalizeName(name) {
    return name.charAt(0).toLowerCase() === name.charAt(0)
        ? name.charAt(0).toUpperCase() + name.slice(1)
        : name;
}

function capitalizeNameInput() {
    const nameInput = document.getElementById("nameInput");
    const capitalized = capitalizeName(nameInput.value);
    nameInput.value = capitalized;
}