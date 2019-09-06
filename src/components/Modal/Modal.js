import { node } from 'prop-types';
import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useEffect,
  createElement,
  memo,
} from 'react';
import { createPortal } from 'react-dom';

import Context from 'contexts/Modal';

const Modal = ({ children }) => {
  const { current: DOM } = useRef(document.createDocumentFragment());
  const [instances, setInstances] = useState(new Map());
  const render = useCallback(
    (stack, [key, { visible, component, ...props }]) =>
      !visible
        ? stack
        : stack.concat(createElement(memo(component), { key, ...props })),
    []
  );
  const element = useMemo(
    () =>
      createElement('div', {
        children: Array.from(instances).reduce(render, []),
      }),
    [instances, render]
  );
  const portal = useMemo(() => createPortal(element, DOM), [element, DOM]);

  useEffect(() => {
    document.body.appendChild(DOM);

    return () => document.body.removeChild(DOM);
  }, [DOM]);

  return (
    <Context.Provider value={setInstances}>
      {children}
      {portal}
    </Context.Provider>
  );
};

Modal.propTypes = {
  children: node.isRequired,
};

export default memo(Modal);
