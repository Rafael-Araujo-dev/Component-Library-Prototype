import React, { useState } from "react";

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from 'styled-components'

const NavControl = styled.div`
  button {
    border-radius: 30px;
    padding: 10px 15px;
    border: none;
    display: flex;
    justify-content: center;
    transition: all var(--transition-duration) var(--transition-type);
    cursor: pointer;
  }
  button:hover {
    background: #CCC;
  }
  svg {
    height: 20px;
    color: var(--nav-btn-color);
    transition: all var(--transition-duration) var(--transition-type);
  }
  svg.close { transform: rotateZ(180deg); }

  margin-bottom: 20px;
`

const Container = styled.div`
  background-color: var(--content-bg-color);
  padding: 20px 30px;
  min-height: 80vh;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0px 0px 17px 3px rgba(0,0,0,0.43);
`;

const Title = styled.div`
  font-size: 42px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  font-size: 24px;
  margin-top: 50px;
`;

const Text = styled.div`
  font-size: 14px;
`;

const Example = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 500px;
  border: 1px solid #CCC;
  border-radius: 30px;
  margin-top: 20px;
  padding: 10px 10px;
`;

const Content = ({ handleToggleNav, isNavActive }) => {

    return (
        <Container>
            <NavControl>
                <button onClick={handleToggleNav}>
                    <FontAwesomeIcon icon={faChevronLeft} className={isNavActive ? 'close' : ''}/>
                </button>
            </NavControl>
            <Title>
              Nome do Componente
            </Title>
            <Description>
              Aqui uma breve descrição do uso do componente.
            </Description>
            <SubTitle>
              Exemplo de uso
            </SubTitle>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis id neque nisi eius fugiat molestiae, ducimus autem voluptates quia harum, natus accusantium vitae aliquid quae alias, maxime eveniet incidunt!
            </Text>
            <Example>
              Aqui ficaria um preview do componente funcionando em tempo real
            </Example>
        </Container>
    );
}

export default Content;