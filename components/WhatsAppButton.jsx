"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {

    const phoneNumber = "6581122068";

    const message =
        "Hi Simply Smart Enrichment! I would like to find out more about your programmes.";

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat with Simply Smart Enrichment on WhatsApp"
        >
            <div className="whatsapp-text">
                <span>Have a question?</span>
                <strong>Chat with us</strong>
            </div>

            <div className="whatsapp-icon">
                <svg
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="whatsapp-logo"
                >
                    <path
                        fill="currentColor"
                        d="M16.04 3C9.39 3 4 8.39 4 15.04c0 2.33.67 4.61 1.93 6.56L4 28.64l7.2-1.89a12 12 0 0 0 4.83.99h.01c6.65 0 12.04-5.39 12.04-12.04C28.08 9.05 22.69 3 16.04 3zm0 22.71h-.01a9.96 9.96 0 0 1-5.08-1.39l-.36-.21-4.27 1.12 1.14-4.16-.23-.38a9.97 9.97 0 1 1 8.81 5.02zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"
                    />
                </svg>
            </div>
        </a>
    );
}