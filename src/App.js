import React, { Component } from 'react';
import CreditCard from './creditcart'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usernumber: "",
      userdate: "",
      username: ""


    }
  }

  onChangenumber = event => {
    if (/^[0-9]*$/.test(event.target.value)) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  onChangedate = event => {
    let cardExpiry;
    if (/^[0-9]*$/.test(event.target.value)) {
      cardExpiry = event.target.value;
      console.log(cardExpiry);
    } else {
      cardExpiry = "";
    }
    if (cardExpiry.length < 2) {
      this.setState({
        userdate: cardExpiry
      });
    } else {
      if (cardExpiry.substr(0, 2) <= 12 && cardExpiry.substr(2, 4) >= 19) {
        this.setState({
          userdate: cardExpiry.substr(0, 2) + "/" + cardExpiry.substr(2, 4)
        });
      } /*else {
        alert("Month or Year invalid");
      }*/
    }
  };

  onChangename = event => {
    if (/^[a-zA-Z-]*$/.test(event.target.value)) {
      this.setState({
        username: event.target.value.toUpperCase()
      });
    }
  };

  Num_format = value => {
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };




  render() {
    return (
      <div className="card">
        <div className="main-container">
          <div className="text-card">
            <CreditCard />
          </div>
          <div className="logo-card">
            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png" />
          </div>
          <div class="credit-card-content">
            <div className="number-card">
              <h2 className="number-serie"> {this.Num_format(this.state.usernumber)} </h2>
              <div className="year-card">
                <p> MONTH / YEAR </p>
              </div>
              <div className="credit-card-BNA">
                <h2>5422</h2>
                <div className="thru-valid">
                  <h2 className="valid-code">VALID<br /> THRU </h2>
                  <div className="icone-card">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                  <h2 className="number-code">{this.state.userdate}</h2>
                </div>
              </div>
              <h2 className="text-code">{this.state.username}</h2>
            </div>
            <div className="credit-logo">
              <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg" />
            </div>
          </div>
        </div>
        <div className="formulaire">
          <form>
            <input id="num-card" placeholder="Number" type="text" maxLength="16" name="usernumber" value={this.state.usernumber} onChange={this.onChangenumber} />
            <input id="month-year" placeholder="MM/YY" maxLength="5" name="userdate"  onChange={this.onChangedate} />
            <input id="name" placeholder="Name" type="text" maxLength="20" name="username" value={this.state.username} onChange={this.onChangename} />
          </form>
        </div>
      </div>

    );
  }
}


export default App;
