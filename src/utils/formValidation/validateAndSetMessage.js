const validateAndSetMessage = (message, setMessage, maxSize, setMessageError) => {

    if (!message) {
        setMessageError('Please write a message.');
        return;
    }

    if (message.length > maxSize) {
        setMessageError('Message is too long. 5000 characters are allowed.');
        return;
    }
    setMessageError(null);
    setMessage(message);

};

export default validateAndSetMessage;
