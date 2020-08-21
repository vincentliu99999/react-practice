import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import defaultNotes from './instructions.md';
import {
  INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS
  // or MINIMAL_VIEWPORTS,
} from '@storybook/addon-viewport';

addDecorator(withKnobs);
addParameters({ notes: defaultNotes });

const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};
addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
});
