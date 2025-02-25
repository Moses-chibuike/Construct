import React from 'react';

function WhatsAppButton() {
    return (
        <>
            <link
                rel="stylesheet"
                type="text/css"
                href="/assets/css/WhatsAppButton.css"
            />
            <a
                href="https://wa.me/+22395951007" // Replace with your WhatsApp number
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp whatsapp-icon"></i> {/* FontAwesome Icon */}
                <span className="whatsapp-text">Message Us</span>
            </a>
        </>
    );
}

export default WhatsAppButton;
