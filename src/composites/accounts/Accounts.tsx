import Divider from '../../components/divider/Divider'

import {
  WholeWidget,
  TopLabelComponent,
  LabelProps,
  AccountWidgetContainer,
  FirstLabelComponent,
  SecondLabelComponent,
  InnerFlexBox,
  ThirdLabelComponent,
  LossIcon,
  DividerWrapper,
  InnerFlexBox1,
  BottomLabelComponent,
  ChevronWrapper,
} from './styles'
import { Icons } from '../../shared/GlobalStyle'
import Label from '../../components/label/Label'
import Image from '../../components/image/Image'
import { Backgrounds, Colors } from '../../shared/styles'
import { useEffect, useState } from 'react'

export interface AccountProp {
  accountNumber: string
  accountName: string
  accountType: string
  accountBalance: number
  gainLossValue: number
  gainLossPct: number
  gainLossValueDown: boolean
}
const AccountWidgetContent = () => {
  const [accountList, setAccountList] = useState([])

  useEffect(() => {
    fetch('/api/accountList')
      .then((res) => res.json())
      .then((json) => setAccountList(json.accountList))
    console.log(accountList)
  })

  return (
    <>
      {accountList.map((item: AccountProp) => {
        return (
          <AccountWidgetContainer key={item.accountName}>
            <TopLabelComponent>
              <p>{item.accountName}</p>
            </TopLabelComponent>
            <SecondLabelComponent>
              <h2>{item.accountBalance}</h2>
              <h2>{item.gainLossValue}</h2>
              <h2>{item.gainLossPct}</h2>
            </SecondLabelComponent>
          </AccountWidgetContainer>
        )
      })}
    </>
  )
}
export const Accounts = ({ label, text, text1, text2, text3 }: LabelProps) => {
  return (
    <>
      <AccountWidgetContainer>
        <TopLabelComponent>
          <Label
            fontSize={'16px'}
            fontStyle={'normal'}
            fontWeight={400}
            lineHeight={'24px'}
            label={label}
            color={Colors.Brand2}
          />
        </TopLabelComponent>

        <WholeWidget>
          <FirstLabelComponent>
            <Label
              fontSize={'20px'}
              fontStyle={'normal'}
              fontWeight={700}
              lineHeight={'24px'}
              label={text}
              color={Colors.Gray80}
            />
          </FirstLabelComponent>

          <SecondLabelComponent>
            <Label
              fontSize={'20px'}
              fontStyle={'normal'}
              fontWeight={400}
              lineHeight={'20px'}
              label={text1}
              color={Colors.Negative2}
            />
          </SecondLabelComponent>

          <ThirdLabelComponent>
            <LossIcon>
              <Image image={Icons.Decrease} alt={''}></Image>
            </LossIcon>
            <InnerFlexBox>
              <Label
                fontSize={'20px'}
                fontStyle={'normal'}
                fontWeight={400}
                lineHeight={'32px'}
                label={text2}
                color={Colors.Negative2}
              />
            </InnerFlexBox>
          </ThirdLabelComponent>
        </WholeWidget>

        <InnerFlexBox1>
          <BottomLabelComponent>
            <Label
              fontSize={'14px'}
              fontStyle={'normal'}
              fontWeight={400}
              lineHeight={'24px'}
              label={text3}
              color={Colors.Brand2}
            />
          </BottomLabelComponent>
          <ChevronWrapper>
            <Image image={Icons.ChevronDown} alt={''}></Image>
          </ChevronWrapper>
        </InnerFlexBox1>

        <DividerWrapper>
          <Divider
            borderColor={Backgrounds.Gray20}
            horizontal={true}
            borderHeight={'1px'}
          />
        </DividerWrapper>
      </AccountWidgetContainer>
      <AccountWidgetContent />
    </>
  )
}
export default Accounts
