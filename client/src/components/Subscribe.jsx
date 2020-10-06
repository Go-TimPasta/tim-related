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

const StyledCenterSubscriberForm = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSubscribeFormContainer = styled.div`
  position: relative;
  display: flex;
  width: 480px;
  height: 48px;
  border-radius: 96px;
  box-shadow: 1px 2px 4px 0 rgba(34, 34, 34, 0.1) inset;
  background: white;
  margin: 0;
`;

const StyledSubscribeInput = styled.input`
  width: 75%;
  background: transparent;
  padding-left: 18px;
  padding-right: 12px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-top-left-radius: 96px;
  border-bottom-left-radius: 96px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border: 1px solid rgba(34, 34, 34, 0.15);
  border-right: 0;
  outline: 0;
  font-family: Arial;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  transition: 0.4s all ease;

  &:hover{
    border-color: black;
  }

  &:hover + .submit-button{
    border-color: black;
  }

  &:focus + .submit-button{
    color: white;
    background-color: black;
  }
`;

const StyledSubscribeButton = styled.button`
  width: 25%;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  background: transparent;
  cursor: pointer;
  text-align: left;
  outline: none;
  position: relative;
  padding-right: 21px;
  padding-left: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  height: 48px;
  color: #222222;
  font-weight: bold;
  font-size: 16px;
  white-space: nowrap;
  z-index: 10;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 96px;
  border-bottom-right-radius: 96px;
  border: 1px solid rgba(34, 34, 34, 0.15);
  border-left: 0;
  margin:0;
  transition: 0.4s all ease;

  &:hover {
    background-color: rgb(239, 239, 239, 0.95);
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
            <StyledCenterSubscriberForm>
              <form>
                <StyledSubscribeFormContainer style={this.state.view === 'invalid' ? { backgroundColor: '#FDDCD8', borderColor: '166, 26, 46, 0.35' } : { backgroundColor: 'white' }}>
                  <StyledSubscribeInput type="text" placeholder="Enter your email" className="input-text" onChange={(e) => { this.handleChange(e); }} />
                  <StyledSubscribeButton type="submit" className="submit-button" onClick={(e) => { this.handleClick(e); }}>Subscribe</StyledSubscribeButton>
                </StyledSubscribeFormContainer>
              </form>
            </StyledCenterSubscriberForm>
            <p style={this.state.view === 'invalid' ? { display: 'block', color: "#A61A2E" } : { display: 'none' }}>Please enter a valid email address.</p>
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
