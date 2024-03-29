import React from 'react';

const service = (props) => {
    return (
        <div className="column">
            <div className="card">
                <h3>{props.name}</h3>
                <div className="text-center">
                    <button className="payment-button" onClick={() => props.clicked(props.id, props.name, props.price, props.currency, props.bank)}>Pagar</button>
                </div>
            </div>
        </div>
    );
};

export default service;