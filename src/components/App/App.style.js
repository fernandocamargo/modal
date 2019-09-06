import styled from 'styled-components';

export default component => styled(component)`
  background-color: #c9c9c9;
  border: solid 1px #424242;
  color: #424242;
  margin: 1rem;
  padding: 1rem;

  h2 {
    font-size: 2rem;
  }

  blockquote {
    margin: 1rem;
  }

  p {
    line-height: 1.5rem;
  }
`;
