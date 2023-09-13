const validateAndSetMessage = (message, setMessage, minSize, maxSize) => {
    const errors = [];

    if (!message) {
        errors.push('Please write a message.');
    }

    if (message.length < minSize) {
        errors.push('Message is too short.');
    }

    if (message.length > maxSize) {
        errors.push('Message is too long. 5000 characters are allowed.');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        setMessage(message);
    }
};

export default validateAndSetMessage;
