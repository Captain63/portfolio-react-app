export const requiredMessage = (event) => {
    // RegEx for whitepace
    if (/^\s+/.test(event.target.value) || event.target.value === "") {
        event.target.value = "";
        const fieldName = event.target.id;

        // Capitalizes ID name
        const capFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
        const message = `${capFieldName} is required!`;
        event.target.placeholder = message;
    }
}

export const validEmail = (event) => {
    if (/^\s+/.test(event.target.value) || event.target.value === "") {
        requiredMessage(event);
        return;
    }

    if (!/^\S+@\S+$/.test(event.target.value)) {
        event.target.value = "";
        event.target.placeholder = "Please enter valid email!";
    }
}