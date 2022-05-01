import React from 'react';
import { Card, Button, ListGroup } from '../components';

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
        title and make up the bulk of the card&apos;s content.
      </Card.Text>
      <Button>Go somewhere</Button>
    </Card.Body>,
  ],
};

export function Body() {
  return (
    <Card>
      <Card.Body>
        This is some text within a card body.
      </Card.Body>
    </Card>
  );
}

export const TitleTextAndLinks = Template.bind({});
TitleTextAndLinks.args = {
  children: [
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Subtitle>Card subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card
        title and make up the bulk of the card&apos;s content.
      </Card.Text>
      <Card.Link>Card link</Card.Link>
      <Card.Link>Another link</Card.Link>
    </Card.Body>,
  ],
};

export const ListGroups = Template.bind({});
ListGroups.args = {
  children: [
    <ListGroup isFlush>
      <ListGroup.Item>
        An item
      </ListGroup.Item>
      <ListGroup.Item>
        A second item
      </ListGroup.Item>
      <ListGroup.Item>
        A third item
      </ListGroup.Item>
    </ListGroup>,
  ],
};
ListGroups.storyName = 'List groups';

export const ListGroupsAndHeader = Template.bind({});
ListGroupsAndHeader.args = {
  children: [
    <Card.Header>
      Featured
    </Card.Header>,
    <ListGroup isFlush>
      <ListGroup.Item>
        An item
      </ListGroup.Item>
      <ListGroup.Item>
        A second item
      </ListGroup.Item>
      <ListGroup.Item>
        A third item
      </ListGroup.Item>
    </ListGroup>,
  ],
};
ListGroupsAndHeader.storyName = 'List groups and Header';

export const ListGroupsAndFooter = Template.bind({});
ListGroupsAndFooter.args = {
  children: [
    <ListGroup isFlush>
      <ListGroup.Item>
        An item
      </ListGroup.Item>
      <ListGroup.Item>
        A second item
      </ListGroup.Item>
      <ListGroup.Item>
        A third item
      </ListGroup.Item>
    </ListGroup>,
    <Card.Footer>
      Featured
    </Card.Footer>,
  ],
};
ListGroupsAndFooter.storyName = 'List groups and Footer';

export const KitchenSink = Template.bind({});
KitchenSink.args = {
  children: [
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and
        make up the bulk of the card&apos;s content.
      </Card.Text>
    </Card.Body>,
    <ListGroup isFlush>
      <ListGroup.Item>
        An item
      </ListGroup.Item>
      <ListGroup.Item>
        A second item
      </ListGroup.Item>
      <ListGroup.Item>
        A third item
      </ListGroup.Item>
    </ListGroup>,
    <Card.Body>
      <Card.Link>Card link</Card.Link>
      <Card.Link>Another link</Card.Link>
    </Card.Body>,
  ],
};
KitchenSink.storyName = 'Kitchen sink';

export const Header = Template.bind({});
Header.args = {
  style: null,
  children: [
    <Card.Header>Featured</Card.Header>,
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in
        to additional content.
      </Card.Text>
      <Button>Go somewhere</Button>
    </Card.Body>,
  ],
};

export const CustomHeader = Template.bind({});
CustomHeader.args = {
  style: null,
  children: [
    <Card.Header as="h5">Featured</Card.Header>,
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in
        to additional content.
      </Card.Text>
      <Button>Go somewhere</Button>
    </Card.Body>,
  ],
};

export const Quote = Template.bind({});
Quote.args = {
  style: null,
  children: [
    <Card.Header>Quote</Card.Header>,
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>A well-known quote, contained in a blockquote element.</p>
        <footer className="blockquote-footer">
          Someone famous in
          {' '}
          <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </Card.Body>,
  ],
};

export const TextCenter = Template.bind({});
TextCenter.args = {
  style: null,
  className: 'text-center',
  children: [
    <Card.Header>Featured</Card.Header>,
    <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <Card.Text>
        With supporting text below as a natural lead-in
        to additional content.
      </Card.Text>
      <Button>Go somewhere</Button>
    </Card.Body>,
    <Card.Footer textColor="muted">2 days ago</Card.Footer>,
  ],
};
TextCenter.storyName = 'Text center';

export function UsingUtilities() {
  return (
    <>
      <Card className="w-75">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Button>Button</Button>
        </Card.Body>
      </Card>
      <Card className="w-50">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <Button>Button</Button>
        </Card.Body>
      </Card>
    </>
  );
}
UsingUtilities.storyName = 'Using utilities';

export function TextAlignment() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            Special title treatment
          </Card.Title>
          <Card.Text>
            With supporting text below as a natural
            lead-in to additional content.
          </Card.Text>
          <Button>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            Special title treatment
          </Card.Title>
          <Card.Text>
            With supporting text below as a natural
            lead-in to additional content.
          </Card.Text>
          <Button>Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card className="text-end" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            Special title treatment
          </Card.Title>
          <Card.Text>
            With supporting text below as a natural
            lead-in to additional content.
          </Card.Text>
          <Button>Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
TextAlignment.storyName = 'Text alignment';
