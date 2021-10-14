import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  background-color: var(--nav-bg-color);
  width: var(--nav-width);
  min-width: 180px;
  transition: all var(--transition-duration) var(--transition-type);
  &.close { margin-left: calc( var( --nav-width ) * -1 - 2vw); }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2vw;
  /* https://hype4.academy/tools/glassmorphism-generator */
  background: rgba( 9, 9, 9, 0.05 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 30px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  /* --------------------------------------------------- */
`;

const NavContainer = styled.div`
  margin-top: 40px;
  padding: 10px 20px;
  width: 95%;
`;

const NavTitle = styled.div`
  font-size: 20px;
  color: var(--nav-title-color);
  font-weight: 500;
`;

const NavItem = styled.div`
  margin: 10px 0;
  width: 100%;
  font-weight: 400;
  color: var(--nav-item-color);
  border-radius: 20px;
  padding: 5px 10px;
  transition: all var(--transition-duration) var(--transition-type);
  cursor: pointer;
  &.active, &:hover { 
    background-color: var(--nav-item-bg-color-active);
    color: var(--nav-item-color-active);
  }
`;

const NavDivider = styled.div`
  width: 100%;
  height: .5px;
  background-color: #CCCCCC;
  margin: 10px 0;
`

const Logo = styled.div`
  padding: 10px 20px;
  background-color: #FFF;
  border-radius: 10px;
  margin-top: 40px;
`;

const Nav = ({ handleToggleNav, isNavActive }) => {
    return (
        <Container className={isNavActive ? 'close' : ''}>
          <Logo>
            <b><i>Logo Aqui</i></b>
          </Logo>
          <NavContainer>
            <NavTitle> Componentes </NavTitle>
            <NavItem className='active'> Item 1 </NavItem>
            <NavItem> Item 2 </NavItem>
            <NavItem> Item 3 </NavItem>
            <NavDivider/>
            <NavTitle> Outra divisão </NavTitle>
            <NavItem> Item 4 </NavItem>
            <NavItem> Item 5 </NavItem>
          </NavContainer>
        </Container>
    )
}

export default Nav;