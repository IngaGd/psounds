import React, { useState } from 'react';
import validateAndSetFile from '../utils/formValidation/validateAndSetFile';
import validateAndSetMessage from '../utils/formValidation/validateAndSetMessage';

const URL = 'http://localhost:3003/submit-form';

export default function FormNewSecond() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);
    const [fileError, setFileError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState(''); // New state for message
    const [sanitizedMessage, setSanitizedMessage] = useState(''); // New state for sanitized message
    const [messageError, setMessageError] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const maxSize = 15 * 1024 * 1024; // 15MB
        const allowedTypes = [
            'audio/ogg',
            'audio/aac',
            'audio/mpeg',
            'audio/wav',
            'audio/aiff',
        ];

        validateAndSetFile(
            selectedFile,
            setFile,
            maxSize,
            allowedTypes,
            setFileError
        );
    };

    const handleMessageChange = (e) => {
        const rawMessage = e.target.value;
        setSanitizedMessage(rawMessage); // Set sanitized message (assuming some sanitation function elsewhere)
    };

    function isValidEmail(email) {
        const regExp =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isValid = regExp.test(String(email).toLocaleLowerCase());
        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Emali validation
        if (!isValidEmail(email)) {
            setError('Please enter a valid email.');
            setTimeout(() => {
                setError(null);
                setEmail('');
                setSubmitted(false);
            }, 2000);
            return;
        }
        setError(null);
        setSuccessMessage(null);

        // Message validation and setting
        const minMessageSize = 2; // Assuming a min size
        const maxMessageSize = 5000;
        validateAndSetMessage(
            sanitizedMessage, // Using sanitizedMessage instead of raw message for validation
            setMessage,
            minMessageSize,
            maxMessageSize,
            setMessageError // Pass the setMessageError as a callback
        );

        // Create a FormData instance
        const formData = new FormData();
        formData.append('email', email);
        formData.append('message', message);
        formData.append('file', file);

        // Using async/await with fetch instead of axios
        try {
            const response = await fetch(URL, {
                method: 'PUT', // Using PUT as before
                body: formData,
            });

            if (!response.ok) {
                // Check if response failed
                throw new Error('Network response was not ok');
            }

            if (!response.ok) {
                // Check if response failed
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('responseData: ', responseData);

            setSuccessMessage('Your email is confirmed!');
            setSubmitted(true);
            setMessage('');
            setEmail('');
            setFile(null);
        } catch (error) {
            setError('Failed to submit.');
            setMessage('');
            setEmail('');
            setFile(null);
            setSubmitted(false);
        }
    };

    function handleClear() {
        setEmail('');
        setSubmitted(false);
        setMessage(''); // Clear message
    }

    return (
        <div className="form-box">
            <div className="messages">
                {error && (
                    <div className="error-message">
                        <span>{error}</span>
                    </div>
                )}
                {successMessage && (
                    <div className="success">
                        <span>{successMessage}</span>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="cell-1">
                    <input
                        submitted={submitted ? 'true' : 'false'}
                        className={!submitted ? 'input-reg' : 'input-subm'}
                        id="email"
                        type="email"
                        required
                        placeholder={
                            submitted
                                ? 'https://ratepunk.com/referral'
                                : 'Enter your email address'
                        }
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {submitted && (
                        <button
                            className="submitted-btn"
                            type="button"
                            onClick={handleClear}
                        >
                            Submited
                        </button>
                    )}
                </div>
                {messageError && (
                    <div className="error-message">
                        <span>{messageError}</span>
                    </div>
                )}
                <div className="cell-1">
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="message"
                        value={sanitizedMessage}
                        onChange={handleMessageChange}
                    ></textarea>
                </div>
                {fileError && (
                    <span className="error-message">{fileError}</span>
                )}
                <div className="cell-1">
                    <input
                        type="file"
                        id="myFile"
                        name="filename"
                        onChange={handleFileChange}
                    />
                </div>

                {!submitted && (
                    <button
                        className="submit-btn"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                )}
            </form>
        </div>
    );
}
