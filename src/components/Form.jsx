import React, { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('message', message);
        formData.append('filename', file);

        try {
            const response = await fetch('http://localhost:3003/submit-form', {
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
            alert('There was an error sending your message.');
        }
        setEmail('');
        setMessage('');
        setFile(false);
    };

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <div className="cell-1">
                    <input
                        type="file"
                        id="myFile"
                        name="filename"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <input type="submit" className="submit-btn" />
            </form>
        </div>
    );
}
