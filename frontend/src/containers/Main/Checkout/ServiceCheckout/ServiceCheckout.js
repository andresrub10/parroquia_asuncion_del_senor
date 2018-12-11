import React, { Component } from 'react';

import './ServiceCheckout.css';

class ServiceCheckout extends Component {

    state = {
        service: '',
        price: 0,
        name: '',
        lastName: '',
        email: ''
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param);
            if (param[0] === 'service') {
                this.setState({service: param[1]});
            } else {
                this.setState({price: param[1]});
            }
        }
        console.log(this.props);

    }

    inputChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    cancelServiceHandler = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="service-payment">
                <div className="page-head" data-bg-image="images/page-head-1.jpg">
                    <div className="container">
                        <h2 className="page-title">Pago de Servicio</h2>
                    </div>
                </div>
                <div>
                    <div className="row bank-info-row">
                        <div className="col-md-4 col-sm-6">
                            <p className="bank-info" >Banco 1</p>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <p className="bank-info" >Banco 2</p>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <p className="bank-info" >Banco 3</p>
                        </div>
                    </div>
                    <form className="payment-form">
                        <input className="text-input" type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={this.inputChangeHandler}/>
                        <input className="text-input" type="text" name="lastName" placeholder="Apellido" onChange={this.inputChangeHandler}/>
                        <input className="text-input" type="email" name="email" placeholder="Correo" onChange={this.inputChangeHandler}/>
                        <button className="payment-button">Pagar</button>
                    </form>
                    <button className="payment-button" onClick={this.cancelServiceHandler}>Cancelar</button>
                </div>
            </div>
        );
    }
}

export default ServiceCheckout;