import {
  RootContainer,
  StyledImageWrapper,
  StyledContentWrapper,
  StyledFormWrapper,
} from './styles'

import React, { useRef, useEffect, useState } from 'react'
import { Icons } from '../../shared/GlobalStyle'

import { GlobalStyle } from '../../components/layouts/landingPage/styles'

// import Counter from './Counter'
// import { createTrue } from 'typescript'

const LogOnPage = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const [emailEntered, setEmailEntered] = useState('')
  // const [isEmailTouched, setIsEmailTouched] = useState(false)

  const [passwordEntered, setPasswordEntered] = useState('')
  // const [isPasswordTouched, setIsPasswordTouched] = useState(false)

  const isEmailValid = emailEntered.includes('@')
  // const isEmailInputInvalid = !isEmailValid && isEmailTouched

  const isPasswordValid = passwordEntered.trim() !== ''
  // const isPasswordInValid = !isPasswordValid && isPasswordTouched

  // let isFormValid = false

  if (isEmailValid && isPasswordValid) {
    // isFormValid = true
  }

  useEffect(() => {
    emailInputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (isEmailValid) {
      console.log('Email entered is valid!')
    }
  }, [isEmailValid])

  useEffect(() => {
    if (isPasswordValid) {
      console.log('Password entered is valid!')
    }
  }, [isPasswordValid])

  const emailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailEntered(event.target.value.trim())
  }

  const passwordInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordEntered(event.target.value.trim())
  }

  const emailInputBlurHandler = (
    // event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // setIsEmailTouched(true)
  }

  const passwordInputBlurHandler = (
    // event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // setIsPasswordTouched(true)
  }

  const formSubmissionHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(
      '🚀 ~ file: LogOnPage.tsx ~ line 44 ~ formSubmissionHandler ~ emailEntered',
      emailEntered
    )

    console.log(
      '🚀 ~ file: LogOnPage.tsx ~ line 44 ~ formSubmissionHandler ~ passwordEntered',
      passwordEntered
    )

    // setIsEmailTouched(true)
    // setIsPasswordTouched(true)

    if (!isEmailValid) {
      return
    }

    if (!isPasswordValid) {
      return
    }

    console.log(
      '🚀 ~ file: LogOnPage.tsx ~ line 50 ~ formSubmissionHandler ~ emailEntered',
      emailEntered
    )

    console.log(
      '🚀 ~ file: LogOnPage.tsx ~ line 44 ~ formSubmissionHandler ~ passwordEntered',
      passwordEntered
    )

    setEmailEntered('')
    // setIsEmailTouched(false)

    setPasswordEntered('')
    // setIsPasswordTouched(false)
  }

  {
    GlobalStyle
  }
  return (
    <>
      <GlobalStyle />
      <RootContainer>
        <StyledImageWrapper>
          <h2>Dig Deep</h2>
          <p>Providing excellent service to our clients</p>
        </StyledImageWrapper>
        <StyledContentWrapper>
          <img src={Icons.wedbush} alt="Site Logo" />
          <h3>Welcome Back</h3>
          <StyledFormWrapper>
            {/* <Counter /> */}
            <form onSubmit={formSubmissionHandler}>
              <input
                type="text"
                ref={emailInputRef}
                placeholder="Enter your email"
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                value={emailEntered}
              />
              <input
                type="password"
                ref={passwordRef}
                placeholder="Enter your password"
                onChange={passwordInputChangeHandler}
                onBlur={passwordInputBlurHandler}
                value={passwordEntered}
              />
              <button>Sign On</button>
            </form>
          </StyledFormWrapper>
        </StyledContentWrapper>
      </RootContainer>
    </>
  )
}

export default LogOnPage
