import styled from 'styled-components'

export const OptionBar = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  grid-gap: 20px;
  margin-bottom: 50px;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
