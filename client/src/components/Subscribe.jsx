/* eslint-disable consistent-return */
/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledRaggedBorderContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledRaggedBorderInlineSpan = styled.span`
  box-sizing: border-box;
  margin: 0;
`;

const StyledRaggedBorderSvg = styled.svg`
  overflow: hidden;
  width: 100%;
  display: block;
  height: 30px;
  fill: #D7E6F5;
  margin: 0;
`;

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
  margin-top: 0px;
`;

const StyledAlreadyHasAccountContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  max-top: 12px;
  text-align: center;
`;

const StyledAlreadyHasAccount = styled.h3`
  border-radius: 6px;
  background-color: #EAEAEA;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  padding: 18px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0;
`;

const StyledNewAccountContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  max-top: 12px;
  text-align: center;
`;

const StyledNewAccount = styled.h3`
  border-radius: 6px;
  background-color: #2F466C;
  color: #fff;
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  padding: 18px;
  position: relative;
  border: 1px solid rgba(34, 34, 34, 0.15);
  margin: 0;
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
    axios.post('http://localhost:8005/related/subscribe', {
      email,
    })
      .then(() => {
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
    const { email } = this.state;
    const validEmail = /^[^@]+@\w+(\.\w+)+\w$/.test(email);
    if (validEmail) {
      this.checkEmail(email);
    } else {
      this.setState({
        view: 'invalid',
      });
    }
  }

  render() {
    const { view } = this.state;
    const content = (viewState) => {
      if (viewState === 'form' || viewState === 'invalid') {
        return (
          <div>
            <StyledCenterSubscriberForm>
              <form>
                <StyledSubscribeFormContainer style={view === 'invalid' ? { backgroundColor: '#FDDCD8', borderColor: '166, 26, 46, 0.35' } : { backgroundColor: 'white' }}>
                  <StyledSubscribeInput type="text" placeholder="Enter your email" className="input-text" onChange={(e) => { this.handleChange(e); }} />
                  <StyledSubscribeButton type="submit" className="submit-button" onClick={(e) => { this.handleClick(e); }}>Subscribe</StyledSubscribeButton>
                </StyledSubscribeFormContainer>
              </form>
            </StyledCenterSubscriberForm>
            <p style={view === 'invalid' ? { display: 'block', color: '#A61A2E' } : { display: 'none' }}>Please enter a valid email address.</p>
          </div>
        );
      }
      if (viewState === 'yes') {
        return (
          <StyledAlreadyHasAccountContainer>
            <StyledAlreadyHasAccount>Looks like you have an account!  Please Log in to subscribe.</StyledAlreadyHasAccount>
          </StyledAlreadyHasAccountContainer>
        );
      }
      if (viewState === 'no') {
        return (
          <StyledNewAccountContainer>
            <StyledNewAccount>Great! We&apos;ve sent you an email to confirm your subscription.</StyledNewAccount>
          </StyledNewAccountContainer>
        );
      }
    };

    const subscribeContent = content(view);

    return (
      <div>
        <StyledRaggedBorderContainer>
          <StyledRaggedBorderInlineSpan>
            <StyledRaggedBorderSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path d="M1280 30h-8.1c-5.7 0-37-10.9-37.4-10.7-2.2 1.2-17.6-.8-19.9-4.1 0 0-9.8-3.3-10.3-3.3-1.3 0-12.6 3-13 2.5-.7-.7-13.8-3.7-13.8-5.3-2.3 1.3-21.2-7.8-23.4-6.7-1-.8-2.2-1.5-3.3-2.4-1.8 1.9-3.3 3.4-4.7 4.9-2.7-.8-4.8-1.4-7.1-2.1-.5.1-1 .3-1.5.5-4 1.3-5.3 1-7.3-1.3-1.7-2.1-5.3-2.2-8.1-.8-2 1-4.6 2.6-6.5 2.3-4.5-.7-6 1.1-8.1 2.6-1.5 1.1-3.1 2.1-4.6 3.1-1.8-.8-3.5-1.2-5.3-2-.3.8-.7 1.3-.8 2-.5 0-.8 0-1.2-.1V3.5c-2 .8-3.5 1.2-4.8 1.8-1.3-.8-2.3-1.6-3.5-2.4-5.1 1.2-10.1 2-15.3.1-.8-.3-2.2-.3-3-.1-1.2.3-2.2 1-3.3 1.6-1.2-.3-2.3-.8-3.8-1.1-1.7 1.1-3 2.9-6.5 1.6-.8-.3-2.3.1-3.5.3-4 .8-7.8 1.4-11.9 2-1.5.2-3-.2-4.7-.3-1-.1-1.8-.2-2.8-.2-6-.3-11.8 2.3-17.8.1-.5-.2-1.3-.2-1.8-.1-3.8 1.6-8.3 1.2-12.5 1.3-1 0-2.2.5-3.1.9-1.8.8-9.5 1.5-11.5 1.1-4.5-.8-8.1-.3-10.1 2.3-12.8-1.6-12.8-1.6-17.1.9-2.3-.4-6-1.6-7.1-1.1-4.7 2.4-7 .2-9.8-1.4-5 1.1-10.8-.8-15.8 1.4-7.3-2.7-14.9-2.7-22.9-.2-5-3.7-9.6-3.8-13.8 0-.3-1.3-.7-2.5-1-3.8-3.3.8-6.1 1.1-8.6 1.8-2.7.7-6 2.3-7.5 1.9-4.2-1.3-5.3 1.8-9 1.4-1-.9-2.3-2.2-4-3.5-1.3.3-2.8.7-4 1-3.5 1.1-6.8 2-10.3 0-.5-.3-1.8-.2-2.8-.1-2.5.2-4.8.7-7.5.9-.8.9-1.7 1.9-2.3 2.9-8.5-1.1-16.4-2.6-24.7-.4-.3.1-1.2-.1-1.7-.3-2.3-1.2-3.7-.3-5.1.8-1.2.7-2.7 1.8-4 1.8-7.3.2-14.8-.4-22.1.3-3 .3-6.8-.3-9 .7-3.3 1.5-6 .9-9.1.5-2.7-.4-5-.9-7.1-2.1-2-1-4.3-.5-4.6 1.1-.3 1.5-1.8 2.3-3.7 2.1-3.3-.8-6.8-.3-10-1.8-4.8-2.1-10.6-2.7-16.3-.7-1.7.7-3.3 1-5 1.6-.3.1-.8.1-1.5.1-1.2-.7-2.3-1.2-3.5-1.9-2 1.8-4.6 1.8-7.1.9-2.8-.8-5.6-1.3-8.8-.9-2.7.3-5.5.5-8.3.7-2 .1-4.5.8-5.8-.9-.2-.3-1.5-.4-2.2-.3-3.7.7-7.3 1.5-11 2.2-.2-.3-.5-.5-.5-.7-.2-.3-.2-.8-.2-.8-1.8.5-3.7 1.2-5.6 1.4-1.8.2-4.7-.7-5.8-.1-3.8 1.9-8.1 1.2-12.3 1.9-2.2-2.5-2.2-2.5-5.8-.9-.7.3-1.5.5-2.3.5-3-.1-6.1-.2-9.1-.5-2.7-.3-5.6-.5-7.6-1.4s-3.8-1.3-6.1-1.2c-4.6.2-9.3.3-13.9.5-4.3.2-8.6.4-14.3.8-1.7-.5-4.7-1.2-7.5-2.2-3.7-1.4-7.1-1.4-10.8.1-1.7.7-4.5 1.6-5.5 1.2-3.3-1.4-1.7 1.3-3 1.1-1.8-.3-3.7-.9-5.1-.7-3.7.4-7.1-.2-10.8-.1-5 .1-10 0-11.6 4.1-5-2.4-9.1-1-13 .5-1.3-.8-2.2-1.4-2.8-1.9-1.7.5-3 1.3-4.2 1.1-2.7-.3-5-1.1-7.3-1.8-1 .4-2 1-3 1.1-5.1.4-10.3.4-15.3.9-2 .2-5-.5-6.6 1.1-.3.3-2.8.4-3.3 0-2.2-1.9-5.1-1.2-8-1-3.3.3-6.6.5-9.8-.7-1.5-.5-4-.8-5.3-.2-4.6 1.9-9.5 2.6-14.9 3.3-5.6.8-9.8-.5-13.9-2.2-1.7 1-3.3 1.6-5.5.4-4.8-3-10.1-2.1-15.6-.7-2.8-.8-5.5-3.3-9.6-1.2-5.6-.8-11.1-.7-16.4 1-.7.2-2 .1-2.3-.2-1.7-1-3.5-1.8-6-1.6-1.2-2.5-4-.9-6.1-.8-2.5 0-5.1 1-7.1.5-2.5-.7-5-.4-7.3-.8-2.8-.4-6 .8-9 .8-5.3.3-10 1.4-13.9 3.6-.8.4-1.7.9-2.5.9-3.8.3-7.6.7-11.5.4-3.7-.3-7.3-.7-11.1-.1-1 .1-2.3-.5-3.3-.9-2.5-1-4.8-1.9-8.1-1.1-2.2.4-4.2 0-3.8-1.8-2.3.1-5 .8-7.1.3-2-.4-3-.9-4.5.5-.7.5-3.2.1-4.6.5-4.2.9-8.1 2.4-12.3 3-2.2.3-5.5.3-7.5-1.3-3.5-2.6-5.3-2.4-11-.9-1.3.3-2.8.8-4.3.9-3.3.2-6.8.3-10.8.5-2-2.9-6-5.2-11.5-7v3.1c-4.5-3.8-10.8-3-16.1-4.4-4.5 1.8-9 3.4-14.6 5.5-5-1-9.6-3.1-15.3-1.2-1 .3-3.2.1-4-.4-3.2-1.9-7.5-1.9-11-3.2-4.2-1.6-8.8-2.9-13.3-4.2-1.2-.3-11.8 2.4-13 2.4-6.6 0-20.3 11.5-25.6 9.8-6.1-2-13 .2-20.1-1-8.1 2.3-15.3 7.2-19.8 7.7H0M172.9 20c.1 0 .3 0 0 0z" /></StyledRaggedBorderSvg>
          </StyledRaggedBorderInlineSpan>
        </StyledRaggedBorderContainer>
        <StyledSubscribeContainer>
          <StyledInvitationMessage>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Getsy.</StyledInvitationMessage>
          {subscribeContent}
        </StyledSubscribeContainer>
      </div>
    );
  }
}
