import styled from 'styled-components'

export const StyledCard = styled.div`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  margin: 40px 0;
  padding: 60px;

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
