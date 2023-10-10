import React from "react";

import "./SocialCard.css";
import QRCode from "react-qr-code";

const SocialCard = ({title, qr, imgUrl}) => {
    return (
        <>
            <div className="social-card">
                <h2>{title}</h2>

                <QRCode value={qr} />

                <img src={imgUrl} alt="QR CODE"/>
            </div>
        </>
    );
}

export default SocialCard;