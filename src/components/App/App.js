import { string } from 'prop-types';
import React, { useState, useCallback, memo } from 'react';

import useTooltip from 'hooks/useTooltip';
import Definition from 'components/Definition';

import withStyle from './App.style';

const Cursor = () =>
  'In computer user interfaces, a cursor is an indicator used to show the current position for user interaction on a computer monitor or other display device that will respond to input from a text input or pointing device.';

const Icon = () =>
  'In computing, an icon is a pictogram or ideogram displayed on a computer screen in order to help the user navigate a computer system.';

const Image = () => (
  <figure>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
      alt="Credits: Olaf Simons"
      title="Using a mobile phone to create an image of the outer world - on the future train track Munich–Berlin, near Essleben (Thuringia, Germany)"
    />
    <figcaption>
      An image (from Latin: imago) is an artifact that depicts visual
      perception, such as a photograph or other two-dimensional picture, that
      resembles a subject—usually a physical object—and thus provides a
      depiction of it. In the context of signal processing, an image is a
      distributed amplitude of color(s).
    </figcaption>
  </figure>
);

const Hyperlink = () =>
  'In computing, a hyperlink, or simply a link, is a reference to data that the reader can follow by clicking or tapping. A hyperlink points to a whole document or to a specific element within a document.';

const GUI = () =>
  'The graphical user interface (GUI /ˈɡuːi/ GOO-ee) is a form of user interface that allows users to interact with electronic devices through graphical icons and visual indicators such as secondary notation, instead of text-based user interfaces, typed command labels or text navigation.';

const Contact = () => (
  <form>
    <fieldset>
      <legend>Please halp!</legend>
      <div>
        <label>Your question</label>
        <textarea placeholder="Give us some details about your question" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </fieldset>
  </form>
);

const Video = () => (
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/f-FOTHUir_4"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    title="No One Deserves Happiness"
    allowFullScreen
  />
);

const App = ({ className }) => {
  const [counter, setCounter] = useState(0);
  const decrement = useCallback(() => setCounter(current => current - 1), []);
  const increment = useCallback(() => setCounter(current => current + 1), []);
  const cursor = useTooltip({ component: Cursor });
  const icon = useTooltip({ component: Icon });
  const image = useTooltip({ component: Image });
  const hyperlink = useTooltip({ component: Hyperlink });
  const gui = useTooltip({ component: GUI });
  const contact = useTooltip({ component: Contact });
  const video = useTooltip({ component: Video });

  return (
    <div className={className}>
      <p
        style={{
          display: 'block',
          overflow: 'hidden',
          textIndent: '-9999px',
          width: '3000px',
        }}
      >
        LOL
      </p>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={decrement}>
        Decrease
      </button>
      <button type="button" onClick={increment}>
        Increase
      </button>
      <hr />
      <h2>Tooltip</h2>
      <blockquote>
        <p>
          A message which appears when a{' '}
          <Definition of={cursor}>cursor</Definition> is positioned over an{' '}
          <Definition of={icon}>icon</Definition>,{' '}
          <Definition of={image}>image</Definition>,{' '}
          <Definition of={hyperlink}>hyperlink</Definition>, or other element in
          a <Definition of={gui}>graphical user interface</Definition>.
        </p>
        <p>
          Do you have questions?{' '}
          <Definition of={contact}>Drop us a line</Definition> or watch{' '}
          <Definition of={video}>our video</Definition>.
        </p>
      </blockquote>
    </div>
  );
};

App.propTypes = {
  className: string.isRequired,
};

export default memo(withStyle(App));