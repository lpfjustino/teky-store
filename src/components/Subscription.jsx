import React from 'react'

function Subscription(props) {
    return (
        <div className="subscription-container">
            <div className="instructions">
                <div>
                    Cadastre-se e receba
                </div>
                <div>
                    OFERTAS EXCLUSIVAS
                </div>
            </div>
            <div className="email-container">
                <input className="email-input" />
            </div>
            <div className="send-btn-container">
                <button className="send-btn">Enviar</button>
            </div>
        </div>
    )
}

Subscription.propTypes = {

}

export default Subscription

