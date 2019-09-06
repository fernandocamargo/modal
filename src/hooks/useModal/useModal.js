import update from 'immutability-helper';
import md5 from 'md5';
import { useContext, useCallback, useMemo, useEffect } from 'react';

import Context from 'contexts/Modal';

const useModal = ({ visible = false, component }, fingerprint = []) => {
  const uuid = JSON.stringify({ component: md5(component), fingerprint });
  const setInstances = useContext(Context);
  const show = useCallback(
    ({ target }) =>
      setInstances(current =>
        update(current, {
          [uuid]: {
            visible: { $set: true },
            origin: { $set: target.getBoundingClientRect() },
          },
        })
      ),
    [setInstances, uuid]
  );
  const hide = useCallback(
    () =>
      setInstances(current =>
        update(current, { [uuid]: { visible: { $set: false } } })
      ),
    [setInstances, uuid]
  );
  const register = useCallback(
    () =>
      setInstances(current =>
        update(current, { $add: [[uuid, { visible, component, hide }]] })
      ),
    [setInstances, uuid, visible, component, hide]
  );
  const deregister = useCallback(
    () => setInstances(current => update(current, { $remove: [uuid] })),
    [setInstances, uuid]
  );
  const API = useMemo(() => ({ show, hide }), [show, hide]);

  useEffect(() => {
    register();

    return () => deregister();
  }, [uuid, register, deregister]);

  return API;
};

export default useModal;
