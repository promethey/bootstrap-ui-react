import React, { useState } from 'react';
import {
  Navbar, Container, Nav, Box, Form, Button,
} from 'components';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
      description: {
        component: `Documentation and examples for Bootstrap’s powerful,
        responsive navigation header, the navbar. Includes support for
        branding, navigation, and more, including support for our
        collapse plugin.`,
      },
    },
  },
};

function DefaultTemplate(args) {
  const [open, setOpen] = useState(false);

  return (
    <Navbar bgColor="light" expand="lg" {...args}>
      <Container fluid="md">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggler onClick={() => setOpen((prev) => !prev)} />
        <Navbar.Collapse in={open}>
          <Navbar.Nav>
            <Nav.Item>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Features</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function AlternativeTemplate(args) {
  const [open, setOpen] = useState(false);

  return (
    <Navbar bgColor="light" expand="lg" {...args}>
      <Container fluid="md">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggler onClick={() => setOpen((prev) => !prev)} />
        <Navbar.Collapse in={open}>
          <Navbar.Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link disabled>Disabled</Nav.Link>
          </Navbar.Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export const Default = DefaultTemplate.bind({});
Default.storyName = 'Default';

export function Brand() {
  return (
    <>
      <Navbar bgColor="light" expand="lg" mb={3}>
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar bgColor="light" expand="lg">
        <Container>
          <Navbar.Brand as="span" mb={0} className="h1">
            Navbar
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export function Image() {
  return (
    <Navbar bgColor="light" expand="lg" mb={3}>
      <Container>
        <Navbar.Brand>
          <Box
            as="img"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap Logo"
            style={{ width: '30px', height: '24px' }}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export function ImageAndText() {
  return (
    <Navbar bgColor="light" expand="lg" mb={3}>
      <Container>
        <Navbar.Brand>
          <Box
            as="img"
            d="inline-block"
            me={2}
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap Logo"
            style={{ width: '30px', height: '24px', verticalAlign: 'text-top' }}
          />
          Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
ImageAndText.storyName = 'Image and text';

export const ShortNav = AlternativeTemplate.bind({});
ShortNav.storyName = 'Short Nav';

export function FormExample() {
  return (
    <Navbar bgColor="light">
      <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Form d="flex">
          <Form.Control type="search" placeholder="Search" me={2} />
          <Button theme="success" as="button" outline type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}
FormExample.storyName = 'Forms';

export function Text() {
  return (
    <Navbar bgColor="light">
      <Container fluid>
        <Navbar.Text>
          Navbar text with an inline element
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
Text.storyName = 'Text';

export function ColorSchemas() {
  return (
    <>
      <DefaultTemplate
        bgColor="dark"
        data-bs-theme="dark"
        mb={3}
      />
      <DefaultTemplate
        bgColor="primary"
        data-bs-theme="dark"
        mb={3}
      />
      <DefaultTemplate
        style={{ backgroundColor: '#e3f2fd' }}
      />
    </>
  );
}
ColorSchemas.storyName = 'Color schemas';

export function ContainerExample() {
  return (
    <Container>
      <Navbar bgColor="light">
        <Container fluid>
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
ContainerExample.storyName = 'Container';
