import React, { useState } from 'react';
import { Alert, Button, Text } from '../components';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `Provide contextual feedback messages for
        typical user actions with the handful of
        available and flexible alert messages.`,
      },
    },
  },
  args: { onClose: null },
};

function Template(args) {
  return <Alert {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: 'A simple default alert—check it out!',
  onClose: null,
};

export function LiveExample() {
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShow(true);
  };

  return (
    show ? (
      <Alert
        theme="success"
        isDismissible
        onClose={() => setShow(false)}
      >
        Nice, you triggered this alert message!
      </Alert>
    ) : (
      <Button onClick={handleClick}>
        Show live alert
      </Button>
    )
  );
}

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  children: 'A simple primary alert—check it out!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'A simple secondary alert—check it out!',
};

export const Success = Template.bind({});
Success.args = {
  theme: 'success',
  children: 'A simple success alert—check it out!',
};

export const Danger = Template.bind({});
Danger.args = {
  theme: 'danger',
  children: 'A simple danger alert—check it out!',
};

export const Info = Template.bind({});
Info.args = {
  theme: 'info',
  children: 'A simple info alert—check it out!',
};

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  children: 'A simple light alert—check it out!',
};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  children: 'A simple dark alert—check it out!',
};

export const LinkColor = Template.bind({});
LinkColor.args = {
  theme: 'primary',
  children: [
    'A simple primary alert with',
    ' ',
    <Alert.Link to="https://www.getbootstrap.com">
      an example link
    </Alert.Link>,
    '. ',
    'Give it a click if you like.',
  ],
};

export const Dismissing = Template.bind({});
Dismissing.args = {
  theme: 'warning',
  isDismissible: true,
  isAnimated: true,
  children: [
    <Text as="strong">Holy guacamole!</Text>,
    ' ',
    'You should check in on some of those fields below.',
  ],
};

export const AdditionalContent = Template.bind({});
AdditionalContent.args = {
  theme: 'success',
  children: [
    <Alert.Heading>Well done!</Alert.Heading>,
    <Text>
      Aww yeah, you successfully read this important alert message.
      This example text is going to run a bit longer so that you can see how spacing
      within an alert works with this kind of content.
    </Text>,
    <hr />,
    <Text mb={0}>
      Whenever you need to, be sure to use margin
      utilities to keep things nice and tidy.
    </Text>,
  ],
};
