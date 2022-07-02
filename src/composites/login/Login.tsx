import React, { useEffect, useRef, useState } from 'react'
import { AnchorTagImage } from '../../components/anchortag/AnchorTagImage'
import Button from '../../components/button/Button'
import Label from '../../components/label/Label'
import { Textbox } from '../../components/textbox/Textbox'
import { Colors } from '../../shared/styles'

import {
  Wrapper,
  Main,
  Message,
  Email,
  Password,
  SignIn,
  AnchorOne,
  AnchorTwo,
  LoginProps,
  PasswordWrapper,
  UserWrapper,
} from './styles'

export interface LogOnFormProps {
  label: string
  text1: string
  text2: string
  onSubmitForm?: () => void
  credentialsInvalid?: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line react/prop-types
export const LogOnForm = ({
  // onSubmitForm,
  // credentialsInvalid,
  label,
  text1,
  text2,
}: LogOnFormProps) => {
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
      // console.log('Email entered is valid!')
    }
  }, [isEmailValid])

  useEffect(() => {
    if (isPasswordValid) {
      // console.log('Password entered is valid!')
    }
  }, [isPasswordValid])

  const emailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailEntered(event.target.value)
    //console.log(emailEntered)
  }

  const passwordInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordEntered(event.target.value)
    //console.log(passwordEntered)
  }

  const emailInputBlurHandler = () =>
    // event: React.ChangeEvent<HTMLInputElement>
    {
      // setIsEmailTouched(true)
    }

  const passwordInputBlurHandler = () =>
    // event: React.ChangeEvent<HTMLInputElement>
    {
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

  return (
    <Wrapper>
      <Main>
        <Message>
          <Label
            fontSize={'32px'}
            fontWeight={600}
            lineHeight={'40px'}
            color={Colors.Black}
            label={label}
            fontStyle={'normal'}
          />
        </Message>
        <UserWrapper>
          <Label
            fontSize={'16px'}
            fontWeight={400}
            lineHeight={'24px'}
            color={Colors.Gray80}
            label={text1}
            fontStyle={'normal'}
          />
        </UserWrapper>
        <Email>
          <Textbox
            placeholder="Enter your email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              emailInputChangeHandler(e)
            }
            type={'text'}
            value={emailEntered}
            ref={emailInputRef}
            onBlur={() => emailInputBlurHandler}
          />
        </Email>
        <PasswordWrapper>
          <Label
            fontSize={'16px'}
            fontWeight={400}
            lineHeight={'24px'}
            color={Colors.Gray80}
            label={text2}
            fontStyle={'normal'}
          />
        </PasswordWrapper>
        <Password>
          <Textbox
            placeholder="Enter your password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              passwordInputChangeHandler(e)
            }
            type={'password'}
            ref={passwordRef}
            value={passwordEntered}
            onBlur={() => passwordInputBlurHandler}
          />
        </Password>
        <SignIn>
          <Button
            bgColor={Colors.Primary50}
            title={'sign on'}
            borderColor={Colors.Primary50}
            padding={'8px 32px 8px 32px'}
            height={'40px'}
            width={'400px'}
            color={'white'}
            borderRadius={'4px'}
            onClick={() => formSubmissionHandler}
                  ></Button>
        </SignIn>
        <AnchorOne>
          <AnchorTagImage
            title={'Forgot Username?'}
            href={'https://www.youtube.com/'}
            fontSize={'16px'}
            fontWeight={400}
            color={Colors.Primary50}
          ></AnchorTagImage>
          &nbsp;|&nbsp;
          <AnchorTagImage
            fontSize={'16px'}
            fontWeight={400}
            title={'Forgot Password?'}
            href={'https://www.youtube.com/'}
            color={Colors.Primary50}
          ></AnchorTagImage>
        </AnchorOne>
        <AnchorTwo>
          <Label
            fontSize={'16px'}
            fontWeight={400}
            lineHeight={'20.11px'}
            color={Colors.Gray70}
            label={'New User? '}
            fontStyle={'normal'}
          />
          &nbsp;
          <AnchorTagImage
            fontSize={'16px'}
            fontWeight={400}
            title={'Register Here'}
            href={'https://www.youtube.com/'}
            color={Colors.Primary50}
          ></AnchorTagImage>
        </AnchorTwo>
      </Main>
    </Wrapper>
  )
}

export const Login = ({ label, text1, text2 }: LoginProps) => {
  return <LogOnForm label={label} text1={text1} text2={text2} />
}
