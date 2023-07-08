import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'ui/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button>Send</Button>,
};

export const Disabled: Story = {
  render: () => <Button isDisabled>Send</Button>,
};
