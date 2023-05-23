import React, { useState } from 'react';
import {
  Collapse, Button, Card, Flex, Row, Col, Box,
} from '../src';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  subcomponents: { Box },
  parameters: {
    docs: {
      description: {
        component: `Toggle the visibility of content across your project
        with a few classes and our JavaScript plugins.`,
      },
    },
  },
};

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen((prev) => !prev)}>
        {open ? 'Hide' : 'Show'}
        {' '}
        collapse
      </Button>
      <Collapse open={open} mt={2}>
        <Card>
          <Card.Body>
            Some placeholder content for the collapse component.
            This panel is hidden by default but revealed when the
            user activates the relevant trigger.
          </Card.Body>
        </Card>
      </Collapse>
    </>
  );
}

export function Horizontal() {
  const [open, setOpen] = useState(false);

  return (
    <Box style={{ minHeight: '152px' }}>
      <Button mb={2} onClick={() => setOpen((prev) => !prev)}>
        Toggle width collapse
      </Button>
      <Collapse open={open} horizontal>
        <Card style={{ width: '300px' }}>
          <Card.Body>
            This is some placeholder content for a horizontal collapse.
            It&apos;s hidden by default and shown when triggered.
          </Card.Body>
        </Card>
      </Collapse>
    </Box>
  );
}

export function MultipleTargets() {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openCollapse2, setOpenCollapse2] = useState(false);

  return (
    <>
      <Flex mb={2}>
        <Button
          me={2}
          onClick={() => {
            setOpenCollapse((prev) => !prev);
          }}
        >
          Toggle first element
        </Button>
        <Button
          me={2}
          onClick={() => {
            setOpenCollapse2((prev) => !prev);
          }}
        >
          Toggle second element
        </Button>
        <Button
          onClick={() => {
            setOpenCollapse((prev) => !prev);
            setOpenCollapse2((prev) => !prev);
          }}
        >
          Toggle both elements
        </Button>
      </Flex>
      <Row>
        <Col>
          <Collapse open={openCollapse}>
            <Card>
              <Card.Body>
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </Card.Body>
            </Card>
          </Collapse>
        </Col>
        <Col>
          <Collapse open={openCollapse2}>
            <Card>
              <Card.Body>
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </Card.Body>
            </Card>
          </Collapse>
        </Col>
      </Row>
    </>
  );
}
MultipleTargets.storyName = 'Multiple targets';
