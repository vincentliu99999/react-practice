import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import defaultNotes from './instructions.md';

addDecorator(withKnobs);
addParameters({ notes: defaultNotes });