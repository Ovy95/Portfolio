import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.div`
width: 50px;
height: 50px;
border-radius : 50%;
background-color : red;
display: flex;
justify-content: center;
align-items: center;
border:2px solid transparent;
transition: all 250ms ease-in-out;
cursor: pointer;

 

&:hover {
  border :2px solid black
}
`;

const ArrowIcon = styled.div`
margin-top: 3px;
color : #fff;
font-size: 30px;
`



export function DownArrow() {
  return <ArrowContainer>
    <ArrowIcon>
      <FontAwesomeIcon icon={faAngleDown} />
    </ArrowIcon>
  </ArrowContainer>

}
