import { shape, func, node, string } from 'prop-types';
import React, { memo } from 'react';

import withStyle from './Definition.style';

const Definition = ({ of: props, children, className }) => (
  <dfn {...props} className={className}>
    {children}
  </dfn>
);

Definition.propTypes = {
  of: shape({
    onMouseOver: func.isRequired,
    onMouseOut: func.isRequired,
  }).isRequired,
  children: node.isRequired,
  className: string.isRequired,
};

export default memo(withStyle(Definition));
