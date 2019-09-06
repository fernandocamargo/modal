import { node, string } from 'prop-types';
import React, { forwardRef, memo } from 'react';

import withBoundingClientRect from 'hocs/withBoundingClientRect';

import withStyle from './Tooltip.style';

const Tooltip = forwardRef(({ children, className }, ref) => (
  <div ref={ref} className={className}>
    {children}
  </div>
));

Tooltip.propTypes = {
  children: node.isRequired,
  className: string.isRequired,
};

export default memo(
  withBoundingClientRect(withStyle(Tooltip), {
    as: 'dimensions',
    props: { className: '' },
  })
);
