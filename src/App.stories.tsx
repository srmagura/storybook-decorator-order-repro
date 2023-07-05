import { Meta, StoryObj } from '@storybook/react';

export default {
  title: "App",
  decorators: [
    (Story) => (
      <div>
        <p>Decorator 1</p>
        <Story />
      </div>
    ),
    (Story) => (
      <div>
        <p>Decorator 2</p>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export const Basic: StoryObj = {
  render: () => <p>My story</p>,
};
