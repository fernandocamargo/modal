import React from 'react';
import { render } from 'react-dom';

import Modal from 'components/Modal';
import App from 'components/App';

export default render(
  <Modal>
    <App />
  </Modal>,
  document.getElementById('root')
);
