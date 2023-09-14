const validateAndSetEmail = (email, setEmail) => {
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValid = regExp.test(String(email).toLowerCase());

    if (isValid) {
        setEmail(email);
        return true;
    } else {
        return false;
    }
};

export default validateAndSetEmail;

