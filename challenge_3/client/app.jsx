//import react from 'react';
//import ReactDOM from 'react-dom'


class UserAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: "", password: "", email: "" }
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleClick(event) {
        event.preventDefault();
        ReactDOM.render(<UserAdress></UserAdress>, document.getElementById("app"))
        axios.post('/userAdress', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label htmlFor="username">username: </label>
                <br />
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} required />

                <br />
                <label htmlFor="email">E-mail: </label>
                <br />
                <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />

                <br />
                <label htmlFor="password">password:</label>
                <br />
                <input type="text" name="password" value={this.state.password} onChange={this.handleInputChange} required />
                <br />
                <input type="submit" value="Next" />
            </form>
        )
    }
}
class UserAdress extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = { adress: '', city: "", stated: '', zipcode: '' }
    }
    handleClick() {
        ReactDOM.render(<UserPaymentMethod />, document.getElementById("app"))
        axios.post('/userAdress', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label htmlFor="adress"> Adress:</label>
                <br />
                <textarea rows="2" cols="20" name="adress" value={this.state.adress} onChange={this.handleInputChange} required></textarea>

                <br />
                <label htmlFor="city"> City: </label>
                <br />
                <input type='text' name='city' value={this.state.city} onChange={this.handleInputChange} required></input>

                <br />
                <label htmlFor="state"> State:  </label>
                <br />
                <input type='text' name='stated' value={this.state.stated} onChange={this.handleInputChange} required></input>

                <br />
                <label htmlFor="zipcode"> ZipCode:</label>
                <br />
                <input type='number' name='zipcode' value={this.state.zipcode} onChange={this.handleInputChange} required></input>
                <br />
                <input type="submit" value="Next" />
            </form>
        )
    }
}
class UserPaymentMethod extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = { creditcard: '', expirydate: '', cvv: '', billing: '' }
    }
    handleClick() {
        event.preventDefault();
        axios.post('/userAdress', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleClick}>
                <label htmlFor="creditcard"> Credit-card: </label>
                <br />
                <input type="number" name='creditcard' value={this.state.creditCard} onChange={this.handleInputChange} required></input>

                <br />
                <label htmlFor="expirydate"> Expiry-Date: </label>
                <br />
                <input type='date' name='expirydate' value={this.state.expirydate} onChange={this.handleInputChange} required></input>

                <br />
                <label htmlFor="cvv"> CVV:</label>
                <br />
                <input type='number' min='100' max='999' name='cvv' onChange={this.handleInputChange} value={this.state.cvv} required></input>

                <br />
                <label htmlFor="billingzipcode"> ZipCode:</label>
                <br />
                <input type='number' name='billing' onChange={this.handleInputChange} value={this.state.billing} required></input>
                <br />

                <input type="submit" value="Next" />
            </form>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <UserAccount />
    }
}
ReactDOM.render(<App />, document.getElementById("app"))

