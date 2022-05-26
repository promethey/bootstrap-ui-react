import React from 'react';
import {
  Collapse, Button, Card, Flex, Row, Col,
} from 'components';

export default {
  title: 'Components/Collapse',
  component: Collapse,
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
  return (
    <>
      <Flex mb={2}>
        <Button className="me-2" to="#collapseExample" bsToggle="collapse">
          Link with href
        </Button>
        <Button bsToggle="collapse" bsTarget="#collapseExample">
          Button with data-bs-target
        </Button>
      </Flex>
      <Collapse id="collapseExample">
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
  return (
    <>
      <Button mb={2} bsToggle="collapse" bsTarget="#collapseWidthExample">
        Toggle width collapse
      </Button>
      <Flex style={{ minHeight: '120px' }}>
        <Collapse id="collapseWidthExample" isHorizontal>
          <Card style={{ width: '300px' }}>
            <Card.Body>
              This is some placeholder content for a horizontal collapse.
              It&apos;s hidden by default and shown when triggered.
            </Card.Body>
          </Card>
        </Collapse>
      </Flex>
    </>
  );
}

export function MultipleTargets() {
  return (
    <>
      <Flex mb={2}>
        <Button me={2} to="#multiCollapseExample1" bsToggle="collapse">
          Toggle first element
        </Button>
        <Button me={2} bsToggle="collapse" bsTarget="#multiCollapseExample2">
          Toggle second element
        </Button>
        <Button bsToggle="collapse" bsTarget=".multi-collapse">
          Toggle both elements
        </Button>
      </Flex>
      <Row>
        <Col>
          <Collapse id="multiCollapseExample1" className="multi-collapse">
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
          <Collapse id="multiCollapseExample2" className="multi-collapse">
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
