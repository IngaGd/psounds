import React, { useState } from 'react';
import DOMPurify from 'dompurify';

import validateAndSetFile from '../utils/formValidation/validateAndSetFile';
import validateAndSetMessage from '../utils/formValidation/validateAndSetMessage';

const MAX_FILE_SIZE = 1024 * 1024 * 10;
const ALLOWED_FILE_TYPES = ['audio/mpeg', 'audio/wav', 'audio/mp3'];
const MIN_MESSAGE_LENGTH = 1;
const MAX_MESSAGE_LENGTH = 5000;

const URL = 'http://wdp.lt:8080/submit-form';

export default function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    //Validations for file upload

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        validateAndSetFile(
            selectedFile,
            setFile,
            MAX_FILE_SIZE,
            ALLOWED_FILE_TYPES
        );
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
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="cell-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
