import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.1);
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center
`
