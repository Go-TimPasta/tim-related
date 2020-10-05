import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledSubscribeContainer = styled.div`
  background-color: #D7E6F5;
  text-align: center;
  font-family: Arial;
  font-size: 14px;
  padding-bottom: 36px
`;

const StyledSubscribeInput = styled.input`
  border: none;
  outline: none;
`;

const StyledSubscribeButton = styled.button`
  border: none;
  outline: none;
  background-color: white;
  transition: all 200ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: rgb(239, 239, 239);
  }
`;

const StyledInvitationMessage = styled.h3`
  padding-top: 36px;
  padding-left: 24px;
  padding-right: 24px;
`;

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

  //axios get to database (check if email subscribed)
  checkEmail(email) {
    axios.get(`http://localhost:8005/related/subscribe/${email}`)
      .then((data) => {
        console.log(data);
        //if data array is empty, post
        if (data.data.length === 0) {
          this.addEmail(email);
        } else {
          this.setState({
            view: 'yes',
          });
        }
      });
  }

  //axios post (if email not already subscribed)
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

  //on change for input text in form
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
              <StyledSubscribeInput type="text" placeholder="Enter your email" onChange={(e) => { this.handleChange(e); }} />
              <StyledSubscribeButton type="submit" onClick={(e) => { this.handleClick(e); }}>Subscribe</StyledSubscribeButton>
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
      <StyledSubscribeContainer>
        <StyledInvitationMessage>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Getsy.</StyledInvitationMessage>
        {subscribeContent}
      </StyledSubscribeContainer>
    );
  }
}
