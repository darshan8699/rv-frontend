// Styled Components
import { StyledHeader, Nav,  Menu } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'

// React-icons 
import { FaUserCircle } from 'react-icons/fa'

const menus = ['RVs', 'Orders', "Total Stock", 'all Tasks']

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <h4>BUILD MY RV</h4>
          <Menu>
            {
              menus.map(elm => (
                <Button key={elm}>{elm}</Button>
              ))
            }
          </Menu>
          <FaUserCircle />
        </Nav>
      </Container>
    </StyledHeader>
  )
}
