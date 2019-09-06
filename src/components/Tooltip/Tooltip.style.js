import styled, { keyframes, css } from 'styled-components';

const opacity = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const transform = keyframes`
  0% {
    transform: translateX(25px);
  }

  100% {
    transform: translateX(0);
  }
`;

const getDisplay = () => {
  const { innerWidth = 0, innerHeight = 0 } = window;
  const {
    documentElement: { clientWidth = 0, clientHeight = 0 },
  } = document;

  return {
    width: Math.max(clientWidth, innerWidth),
    height: Math.max(clientHeight, innerHeight),
  };
};

const getScroll = () => {
  const { pageXOffset = 0, pageYOffset = 0 } = window;
  const {
    clientLeft = 0,
    clientTop = 0,
    scrollLeft = 0,
    scrollTop = 0,
  } = document;

  return {
    left: Math.max(pageXOffset, scrollLeft) - clientLeft,
    top: Math.max(pageYOffset, scrollTop) - clientTop,
  };
};

const [TOP, RIGHT, BOTTOM, LEFT] = [0, 1, 2, 3];

const getPosition = () => ({ origin, dimensions }) => {
  const { width = 0, height = 0 } = dimensions;
  const display = getDisplay();
  const scroll = getScroll();
  const viewport = [
    scroll.top,
    scroll.left + display.width,
    scroll.top + display.height,
    scroll.left,
  ];
  const left = scroll.left + origin.left;
  const right = left + origin.width;
  const top = scroll.top + origin.top - (height - origin.height) / 2;
  const bottom = top + origin.height;
  const layout = {
    top: [
      origin.top - height,
      origin.left + origin.width / 2 + width / 2,
      origin.top,
      origin.left + origin.width / 2 - width / 2,
    ],
    right: [
      origin.top + origin.height / 2 - height / 2,
      origin.left + origin.width + width,
      origin.top + origin.height / 2 + height / 2,
      origin.left + origin.width,
    ],
    bottom: [
      origin.top + origin.height,
      origin.left + origin.width / 2 + width / 2,
      origin.top + origin.height + height,
      origin.left + origin.width / 2 - width / 2,
    ],
    left: [
      origin.top + origin.height / 2 - height / 2,
      origin.left,
      origin.top + origin.height / 2 + height / 2,
      origin.left - width,
    ],
  };

  return css`
    left: ${origin.left}px;
    top: ${origin.top - height}px;
  `;
};

const ARROW_SIZE = 10;

export default component => styled(component)`
  animation: ${opacity} 0.5s ease, ${transform} 0.25s ease;
  background-color: #78c0e0;
  border: solid 1px #000;
  box-shadow: 0 8px 6px -6px #6e7c88;
  font-size: 0.8rem;
  max-height: 50vh;
  max-width: 50vw;
  padding: 10px;
  position: absolute;
  ${getPosition()};

  figure {
    margin: 0;
  }

  img {
    background-color: #000;
    height: 25vh;
    width: 100%;
  }

  label,
  textarea,
  button {
    display: block;
    width: 100%;
  }
`;

/*
    &:before,
    &:after {
      border-style: solid;
      border-width: ${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px 0;
      content: '';
      display: block;
      height: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
    }

    &:before {
      border-color: transparent #000 transparent transparent;
      box-shadow: 0px 1px 10px -5px #6e7c88;
      right: calc(100% + 1px);
    }

    &:after {
      border-color: transparent #78c0e0 transparent transparent;
      right: 100%;
    }
  */
