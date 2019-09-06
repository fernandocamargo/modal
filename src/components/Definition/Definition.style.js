import styled from 'styled-components';

export default component => styled(component)`
  border-bottom: dotted 1px #000;
  cursor: help;
  padding: 0 5px;

  &:hover {
    background-color: #424242;
    color: #c9c9c9;
  }
`;
