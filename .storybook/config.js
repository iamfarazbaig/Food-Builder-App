import { addDecorator, configure } from '@storybook/react';
import StoryRouter from 'storybook-react-router'

addDecorator(StoryRouter());
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
