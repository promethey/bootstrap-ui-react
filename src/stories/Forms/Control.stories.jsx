import React from 'react';
import {
  Box, Form, Row, Col,
} from 'components';

export default {
  title: 'Forms/Control',
  component: Form.Control,
  subcomponents: {
    'Form.Label': Form.Label,
  },
  parameters: {
    docs: {
      description: {
        component: `Give textual form controls like inputs and
        textareas an upgrade with custom styles, sizing, focus
        states, and more.`,
      },
    },
  },
};

function Story(args) {
  return <Form.Control {...args} />;
}

export function Example() {
  return (
    <>
      <Box display="block" mb={3}>
        <Form.Label htmlFor="exampleFormControlInput1">
          Email address
        </Form.Label>
        <Form.Control
          type="email"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </Box>
      <Box display="block">
        <Form.Label htmlFor="exampleFormControlTextarea1">
          Email textarea
        </Form.Label>
        <Form.Control
          as="textarea"
          id="exampleFormControlTextarea1"
          rows={3}
        />
      </Box>
    </>
  );
}

export function Sizing() {
  return (
    <>
      <Form.Control
        size="lg"
        placeholder=".form-control-lg"
        aria-label=".form-control-lg example"
        mb={2}
      />
      <Form.Control
        placeholder="Default input"
        aria-label="default input example"
        mb={2}
      />
      <Form.Control
        size="sm"
        placeholder=".form-control-sm"
        aria-label=".form-control-sm example"
      />
    </>
  );
}

export function Disabled() {
  return (
    <>
      <Form.Control
        placeholder="Disabled input"
        aria-label="Disabled input example"
        isDisabled
        mb={2}
      />
      <Form.Control
        value="Disabled readonly input"
        aria-label="Disabled input example"
        isDisabled
        isReadOnly
      />
    </>
  );
}

export const Readonly = Story.bind({});
Readonly.args = {
  value: 'Readonly input here...',
  'aria-label': 'readonly input example',
  isReadOnly: true,
};

export function ReadonlyPlainText() {
  return (
    <>
      <Row mb={3}>
        <Col sm={2}>
          <Form.Label htmlFor="staticEmail">
            Email
          </Form.Label>
        </Col>
        <Col sm={10}>
          <Form.Control
            id="staticEmail"
            value="email@example.com"
            isPlainText
            isReadOnly
          />
        </Col>
      </Row>
      <Row mb={3}>
        <Col sm={2}>
          <Form.Label htmlFor="inputPassword">
            Password
          </Form.Label>
        </Col>
        <Col sm={10}>
          <Form.Control
            type="password"
            id="inputPassword"
          />
        </Col>
      </Row>
    </>
  );
}
ReadonlyPlainText.storyName = 'Readonly plain text';

export function FileInput() {
  return (
    <>
      <Box display="block" mb={3}>
        <Form.Label htmlFor="formFile">
          Default file input example
        </Form.Label>
        <Form.Control type="file" id="formFile" />
      </Box>
      <Box display="block" mb={3}>
        <Form.Label htmlFor="formFileMultiple">
          Multiple files input example
        </Form.Label>
        <Form.Control
          type="file"
          id="formFileMultiple"
          isMultiple
        />
      </Box>
      <Box display="block" mb={3}>
        <Form.Label htmlFor="formFileDisabled">
          Disabled file input example
        </Form.Label>
        <Form.Control
          type="file"
          id="formFileDisabled"
          isDisabled
        />
      </Box>
      <Box display="block" mb={3}>
        <Form.Label htmlFor="formFileSm">
          Small file input example
        </Form.Label>
        <Form.Control
          type="file"
          id="formFileSm"
          size="sm"
        />
      </Box>
      <Box display="block">
        <Form.Label htmlFor="formFileLg">
          Large file input example
        </Form.Label>
        <Form.Control
          type="file"
          id="formFileLg"
          size="lg"
        />
      </Box>
    </>
  );
}

export function Color() {
  return (
    <>
      <Form.Label htmlFor="exampleColorInput">
        Color picker
      </Form.Label>
      <Form.Control
        type="color"
        id="exampleColorInput"
        value="#563d7c"
        title="Choose your color"
      />
    </>
  );
}
