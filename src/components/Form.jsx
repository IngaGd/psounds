import React, { useState } from 'react';
import DOMPurify from 'dompurify';

import validateAndSetFile from '../utils/formValidation/validateAndSetFile';
import validateAndSetMessage from '../utils/formValidation/validateAndSetMessage';
import validateAndSetEmail from '../utils/formValidation/validateAndSetEmail';

const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ALLOWED_FILE_TYPES = [
    'audio/OGG',
    'audio/ogg',
    'audio/AAC',
    'audio/aac',
    'audio/AIFF',
    'audio/aiff',
    'audio/WAV',
    'audio/wav',
    'audio/MPEG',
    'audio/mpeg',
];
const MIN_MESSAGE_LENGTH = 1;
const MAX_MESSAGE_LENGTH = 5000;

const URL = 'http://wdp.lt:8080/submit-form';

export default function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [fileError, setFileError] = useState(null);

    //Validate email

    const handleEmailChange = (e) => {
        const selectedEmail = e.target.value;
        const isValidEmail = validateAndSetEmail(selectedEmail, setEmail);
        if (!isValidEmail) {
            setTimeout(() => {
                setEmailError('Please enter a valid email.');
            }, 5000);
        } else {
            setEmailError(null);
        }
    };

    //Validations for file upload

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        validateAndSetFile(
            selectedFile,
            setFile,
            MAX_FILE_SIZE,
            ALLOWED_FILE_TYPES,
            setFileError
        );

        if (selectedFile && ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
            setFileError(null);
        }
    };

    //Validation for message input
    const sanitizedMessage = DOMPurify.sanitize(message);

    const handeMessageChange = (e) => {
        const selectedMessage = e.target.value;
        validateAndSetMessage(
            selectedMessage,
            setMessage,
            MIN_MESSAGE_LENGTH,
            MAX_MESSAGE_LENGTH
        );
    };

    //Form submit logic
    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (error) {
        //     // If there's an error, prevent form submission
        //     return;
        // }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('message', message);
        if (file) {
            formData.append('filename', file);
        }

        try {
            const response = await fetch(URL, {
                method: 'POST',
                body: formData,
            });

            const serverResponse = await response.json();

            if (response.ok) {
                alert(serverResponse.message);
            } else {
                alert('Error sending message');
            }
        } catch (error) {
            console.error('There was an error:', error);
            alert('There was an error sending your message.');
        }
        setEmail('');
        setMessage('');
        setFile(null);
    };

    return (
        <div className="form-box">
            {emailError && <div className="error-message">{emailError}</div>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="cell-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="cell-1">
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="message"
                        value={sanitizedMessage}
                        onChange={handeMessageChange}
                    ></textarea>
                </div>
                {fileError && <div className="error-message">{fileError}</div>}
                <div className="cell-1">
                    <input
                        type="file"
                        id="myFile"
                        name="filename"
                        onChange={handleFileChange}
                    />
                </div>
                <input type="submit" className="submit-btn" />
            </form>
        </div>
    );
}
