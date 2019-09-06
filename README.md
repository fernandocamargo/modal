## Usage

_index.js_
```javascript
import React from 'react';
import { render } from 'react-dom';

import Modal from 'components/Modal';

import YourApp from 'somewhere/in/your/project';

export default render(
  <Modal>
    <YourApp />
  </Modal>,
  document.getElementById('root')
);
```

_YourComponent.js_
```javascript
import React from 'react';

import useModal from 'hooks/useModal';

const YourModal = ({ hide }) => (
  <div>
    <h1>Lorem ipsum</h1>
    <button onClick={hide}>Close this modal</button>
  </div>
);

const YourComponent = () => {
  const { show } = useModal({ component: YourModal });

  return (
    <div>
      <button onClick={show}>This button opens a modal</button>
    </div>
  );
};
```
