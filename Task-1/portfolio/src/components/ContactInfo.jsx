import React from 'react'

const ContactInfo = () => {
    return (
        <div>
            <div className="contact">
                <h1>Contact Me</h1>
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" />
                    <label>Email:</label>
                    <input type="email" name="email" />
                    <label>Message:</label>
                    <textarea name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactInfo
