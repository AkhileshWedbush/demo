import styled from 'styled-components'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: #374253;
  padding: 16px 24px;
  width: 100%;
  background-color: #e6eaf0;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #374253;
    margin-bottom: 8px;
  }

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: right;
    color: #1f5eb7;
    margin-right: 4px;
    border-right: 1px solid #374253;
    padding-right: 4px;

    :last-child {
      border: none;
    }
  }
`
