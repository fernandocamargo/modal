import md5 from 'md5';
import React, { useState, useCallback, useMemo } from 'react';

import useModal from 'hooks/useModal';
import Tooltip from 'components/Tooltip';

const useTooltip = ({ component: Component }) => {
  const uuid = md5(Component);
  const [timer, setTimer] = useState(null);
  const component = useCallback(
    props => (
      <Tooltip {...props}>
        <Component />
      </Tooltip>
    ),
    []
  );
  const { show, hide } = useModal({ component }, [uuid]);
  const delay = useCallback(
    handle => event => {
      event.persist();
      window.clearTimeout(timer);
      setTimer(window.setTimeout(() => handle(event), 250));
    },
    [timer]
  );
  const API = useMemo(
    () => ({ onMouseOver: delay(show), onMouseOut: delay(hide) }),
    [delay, show, hide]
  );

  return API;
};

export default useTooltip;
