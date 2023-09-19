import React, { useState } from 'react';
import DOMPurify from 'dompurify';

import validateAndSetFile from '../utils/formValidation/validateAndSetFile';
import validateAndSetMessage from '../utils/formValidation/validateAndSetMessage';
import validateEmail from '../utils/formValidation/validateEmail';

const BASE_URL = process.env.REACT_APP_API_URL.endsWith('/')
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + '/';
const URL = BASE_URL + 'submit-form';

const MAX_FILE_SIZE = 1024 * 1024 * 15;
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
const MAX_MESSAGE_LENGTH = 5000;

export default function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    const [emailError, setEmailError] = useState(null);
    const [fileError, setFileError] = useState(null);
    const [messageError, setMessageError] = useState(null);

    const [submissionSuccsess, setSubmissionSuccsess] = useState('');
    const [submissionFail, setSubmissionFail] = useState('');

    //Validate email
    const handleEmailChange = (e) => {
        const selectedEmail = e.target.value;

        setEmail(selectedEmail);

        const isValid = validateEmail(selectedEmail);
        console.log('Is Email Valid:', isValid);

        if (!isValid && selectedEmail !== '') {
            setEmailError('Please enter a valid email.');
        } else {
            setEmailError(null);
        }
    };

    //Validation for message input
    const sanitizedMessage = DOMPurify.sanitize(message);

    const handeMessageChange = (e) => {
        const selectedMessage = e.target.value;
        validateAndSetMessage(
            selectedMessage,
            setMessage,
            MAX_MESSAGE_LENGTH,
            setMessageError
        );
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message.trim()) {
            setMessageError('Please write a message.');
            setTimeout(() => {
                setMessageError('');
            }, 3000);
            return;
        }

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
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const text = await response.text();
            try {
                const serverResponse = JSON.parse(text);
                setSubmissionSuccsess(serverResponse.message);
                setTimeout(() => {
                    setSubmissionSuccsess('');
                }, 3000);
            } catch (err) {
                console.error('Failed to parse JSON:', text);
                setSubmissionFail('Server returned an unexpected response.');
            }
        } catch (error) {
            console.error('There was an error:', error);
            alert('There was an error sending your message.');
            setSubmissionFail(error.message);
        }
        setEmail('');
        setMessage('');
        setFile(null);
    };

    return (
        <div className="form-box">
            <div className="messages">
                {submissionSuccsess && (
                    <div className="success-message">{submissionSuccsess}</div>
                )}
            </div>
            <div className="messages">
                {submissionFail && (
                    <div className="error-message">{submissionSuccsess}</div>
                )}
            </div>
            <div className="messages">
                {emailError && (
                    <div className="error-message">{emailError}</div>
                )}
            </div>
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
                {messageError && (
                    <div className="error-message">{messageError}</div>
                )}
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
