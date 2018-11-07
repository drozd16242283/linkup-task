import React from 'react'

import ImageUploader from 'Components/layouts/Image-uploader'

import './Feedback.scss'

class Feedback extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoUrl: '',
      formErrors: { email: '', name: '' }
    }
  }

  submitFormHandler = e => {
    e.preventDefault()

    const email = event.target.email.value
    const username = event.target.username.value

    if (this.isFormValid(email, username)) {
      // submit form to the server
    }
  }

  isFormValid(email, username) {
    const emailRegEx = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i

    const emailValid = emailRegEx.test(email)
    const usernameValid = (username.length >= 6 && username.length <= 30)

    if (emailValid && usernameValid) {
      return true
    } else {
      this.setState({
        formErrors: {
          email: emailValid ? '' : 'Email is invalid',
          name: usernameValid ? '' : 'User name must be from 6 to 30 characters'
        }
      })
      return false
    }
  }

  setPhotoPreviewUrl = photoUrl => {
    this.setState({ photoUrl: photoUrl })
  }

  render () {
    return (
      <section className="feedback-section">
        <div className="feedback-title">
          <h1 className="title-text">Feedback</h1>
          <p className="description">You feedback is very important for us</p>
        </div>
        <form className="feedback-form" onSubmit={this.submitFormHandler}>
          <div className="feedback-form-content">
            <div className="email-field form-field">
              <i className="fas fa-envelope"/>
              <input className="form-input" name="email" type="email" placeholder="Email*"/>
              {this.state.formErrors.email.length > 0 &&
                <div className="form-errors-wrapper">
                  <p className="form-error">{this.state.formErrors.email}</p>
                </div>
              }
            </div>
            <div className="name-field form-field">
              <i className="fas fa-user"/>
              <input className="form-input" name="username" type="text" placeholder="Name*"/>
              {this.state.formErrors.name.length > 0 &&
                <div className="form-errors-wrapper">
                  <p className="form-error">{this.state.formErrors.name}</p>
                </div>
              }
            </div>
            <div className="image-uploader-wrapper">
              <ImageUploader emitPhotoUrl={this.setPhotoPreviewUrl} />
              {
              this.state.photoUrl.length > 0 &&
              <div className="file-preview">
              <img src={this.state.photoUrl} />
              </div>
              }
            </div>
            <input type="submit" className="submit-button" value="Send" />
          </div>
        </form>
      </section>
    )
  }
}

export default Feedback