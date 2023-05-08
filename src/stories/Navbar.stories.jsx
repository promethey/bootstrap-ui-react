import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'components';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    docs: {
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

export const Default = DefaultTemplate.bind({});
Default.storyName = 'Default';
