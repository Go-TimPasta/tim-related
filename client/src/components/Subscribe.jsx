import React from 'react';
import axios from 'axios';

export default class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      view: 'form',
    };
    this.checkEmail = this.checkEmail.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  checkEmail(email) {
    axios.get(`http://localhost:8005/related/subscribe/${email}`)
      .then((data) => {
        if (data.data.length === 0) {
          this.addEmail(email);
        } else {
          this.setState({
            view: 'yes',
          });
        }
      });
  }

  addEmail(email) {
    axios.post(`http://localhost:8005/related/subscribe`, {
      email: email,
    })
      .then((data) => {
        this.setState({
          view: 'no',
        });
      });
  }

  handleChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const validEmail = /^[^@]+@\w+(\.\w+)+\w$/.test(this.state.email);
    if (validEmail) {
      this.checkEmail(this.state.email);
    } else {
      this.setState({
        view: 'invalid',
      });
    }
  }

  render() {
    const content = (view) => {
      if (view === 'form' || view === 'invalid') {
        return (
          <div>
            <form>
              <input type="text" placeholder="Enter your email" onChange={(e) => { this.handleChange(e); }} />
              <button type="submit" onClick={(e) => { this.handleClick(e); }}>Subscribe</button>
            </form>
            <p>Please enter a valid email address.</p>
          </div>
        );
      }
      if (view === 'yes') {
        return (
          <div>
            <h3>Looks like you have an account!  Please Log in to subscribe.</h3>
          </div>
        );
      }
      if (view === 'no') {
        return (
          <div>
            <h3>Great! We've sent you an email to confirm your subscription.</h3>
          </div>
        );
      }
    };

    const subscribeContent = content(this.state.view);

    return (
      <div>
        <h3>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Getsy.</h3>
        {subscribeContent}
      </div>
    );
  }
}
