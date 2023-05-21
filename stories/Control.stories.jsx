import React from 'react';
import {
  Box, Label, Control, Row, Col,
} from '../src';

export default {
  title: 'Forms/Control',
  component: Control,
  subcomponents: {
    Label,
    Box,
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
  return <Control {...args} />;
}

export function Example() {
  return (
    <>
      <Box mb={3}>
        <Label htmlFor="exampleFormControlInput1">
          Email address
        </Label>
        <Control
          type="email"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </Box>
      <Box>
        <Label htmlFor="exampleFormControlTextarea1">
          Example textarea
        </Label>
        <Control
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
      <Control
        size="lg"
        placeholder=".form-control-lg"
        aria-label=".form-control-lg example"
        mb={2}
      />
      <Control
        placeholder="Default input"
        aria-label="default input example"
        mb={2}
      />
      <Control
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
      <Control
        placeholder="Disabled input"
        aria-label="Disabled input example"
        isDisabled
        mb={2}
      />
      <Control
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
      <Row mb={3} alignItems="center">
        <Col sm={2}>
          <Label htmlFor="staticEmail" style={{ marginBottom: 0 }}>
            Email
          </Label>
        </Col>
        <Col sm={10}>
          <Control
            id="staticEmail"
            value="email@example.com"
            isPlainText
            isReadOnly
          />
        </Col>
      </Row>
      <Row mb={3} alignItems="center">
        <Col sm={2}>
          <Label htmlFor="inputPassword" style={{ marginBottom: 0 }}>
            Password
          </Label>
        </Col>
        <Col sm={10}>
          <Control
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
      <Box mb={3}>
        <Label htmlFor="formFile">
          Default file input example
        </Label>
        <Control type="file" id="formFile" />
      </Box>
      <Box mb={3}>
        <Label htmlFor="formFileMultiple">
          Multiple files input example
        </Label>
        <Control
          type="file"
          id="formFileMultiple"
          isMultiple
        />
      </Box>
      <Box mb={3}>
        <Label htmlFor="formFileDisabled">
          Disabled file input example
        </Label>
        <Control
          type="file"
          id="formFileDisabled"
          isDisabled
        />
      </Box>
      <Box mb={3}>
        <Label htmlFor="formFileSm">
          Small file input example
        </Label>
        <Control
          type="file"
          id="formFileSm"
          size="sm"
        />
      </Box>
      <Box>
        <Label htmlFor="formFileLg">
          Large file input example
        </Label>
        <Control
          type="file"
          id="formFileLg"
          size="lg"
        />
      </Box>
    </>
  );
}

export function ColorPicker() {
  return (
    <>
      <Label htmlFor="exampleColorInput">
        Color picker
      </Label>
      <Control
        type="color"
        id="exampleColorInput"
        value="#563d7c"
        title="Choose your color"
      />
    </>
  );
}
ColorPicker.storyName = 'Color picker';
