import React from 'react';
import { Card, Button } from '../components';

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: {
    'Card.Group': Card.Group,
    'Card.Header': Card.Header,
    'Card.Image': Card.Image,
    'Card.Body': Card.Body,
    'Card.Title': Card.Title,
    'Card.Subtitle': Card.Subtitle,
    'Card.Text': Card.Text,
    'Card.Link': Card.Link,
    'Card.Footer': Card.Footer,
  },
  parameters: {
    docs: {
      description: {
        component: `Bootstrap’s cards provide a flexible and extensible
        content container with multiple variants and options.`,
      },
    },
  },
  args: {
    style: { width: '18rem' },
  },
};

function Template(args) {
  return <Card {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  children: [
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card
        title and make up the bulk of the card's content.
      </Card.Text>
      <Button>Go somewhere</Button>
    </Card.Body>,
  ],
};
