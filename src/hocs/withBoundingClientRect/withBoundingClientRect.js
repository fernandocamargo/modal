import { useRef, useState, useMemo, useEffect, createElement } from 'react';

const withBoundingClientRect = (
  component,
  { as = 'rect', props: extra = {} }
) => props => {
  const ref = useRef();
  const [rect, setDimensions] = useState({});
  const enhancement = useMemo(() => ({ [as]: rect, ref, ...extra, ...props }), [
    rect,
    props,
  ]);

  useEffect(() => setDimensions(ref.current.getBoundingClientRect()), []);

  return createElement(component, enhancement);
};

export default withBoundingClientRect;
