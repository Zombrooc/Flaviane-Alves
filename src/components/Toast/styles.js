import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  width: 100%;
  border-radius: 7px;
  background: var(--color-success);
  color: var(--color-light);
  padding: 15px;
  transition: all .5s;
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  top: 80px;
  right: 15px;
  z-index: 44444;
  
  `;
