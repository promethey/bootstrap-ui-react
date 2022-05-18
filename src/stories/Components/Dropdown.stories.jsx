import React from 'react';
import {
  Dropdown, ButtonGroup, Button, Text, Flex,
} from '../../components';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  subcomponents: {
    'Dropdown.Toggle': Dropdown.Toggle,
    'Dropdown.Menu': Dropdown.Menu,
    'Dropdown.Item': Dropdown.Item,
    'Dropdown.Divider': Dropdown.Divider,
  },
  parameters: {
    docs: {
      description: {
        component: `Dropdowns are toggleable, contextual overlays
        for displaying lists of links and more.`,
      },
    },
  },
};

function Story(args) {
  return <Dropdown {...args} />;
}

export const Default = Story.bind({});
Default.args = {
  children: [
    <Dropdown.Toggle theme="secondary" id="dropdownMenuButton1">
      Dropdown button
    </Dropdown.Toggle>,
    <Dropdown.Menu label="dropdownMenuButton1">
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>,
  ],
};

export const ItemLinks = Story.bind({});
ItemLinks.args = {
  children: [
    <Dropdown.Toggle theme="secondary" id="dropdownMenuButton1">
      Dropdown links
    </Dropdown.Toggle>,
    <Dropdown.Menu label="dropdownMenuButton1">
      <Dropdown.Item>
        Action
      </Dropdown.Item>
      <Dropdown.Item>
        Another action
      </Dropdown.Item>
      <Dropdown.Item>
        Something else here
      </Dropdown.Item>
    </Dropdown.Menu>,
  ],
};
ItemLinks.storyName = 'Item links';

export const ItemButtons = Story.bind({});
ItemButtons.args = {
  children: [
    <Dropdown.Toggle theme="secondary" id="dropdownMenuButton1">
      Dropdown links
    </Dropdown.Toggle>,
    <Dropdown.Menu label="dropdownMenuButton1">
      <Dropdown.Item as="button">
        Action
      </Dropdown.Item>
      <Dropdown.Item as="button">
        Another action
      </Dropdown.Item>
      <Dropdown.Item as="button">
        Something else here
      </Dropdown.Item>
    </Dropdown.Menu>,
  ],
};
ItemButtons.storyName = 'Item buttons';

export function Themes() {
  const examples = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
  ];

  return (
    <>
      {examples.map((example) => (
        <ButtonGroup me={2}>
          <Dropdown.Toggle theme={example.toLowerCase()}>
            {example}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
      ))}
    </>
  );
}

export function SplitButton() {
  const examples = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
  ];

  return (
    <>
      {examples.map((example) => (
        <ButtonGroup me={2}>
          <Button theme={example.toLowerCase()}>
            {example}
          </Button>
          <Dropdown.Toggle isSplit theme={example.toLowerCase()}>
            <span className="visually-hidden">
              Toggle Dropdown
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
      ))}
    </>
  );
}
SplitButton.storyName = 'Split button';

export function LargeSize() {
  return (
    <>
      <ButtonGroup me={2}>
        <Dropdown.Toggle theme="secondary" size="lg">
          Large button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
      <ButtonGroup>
        <Button theme="secondary" size="lg">
          Small split button
        </Button>
        <Dropdown.Toggle isSplit theme="secondary" size="lg">
          <span className="visually-hidden">
            Toggle dropdown
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    </>
  );
}
LargeSize.storyName = 'Large size';

export function SmallSize() {
  return (
    <>
      <ButtonGroup me={2}>
        <Dropdown.Toggle theme="secondary" size="sm">
          Small button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
      <ButtonGroup>
        <Button theme="secondary" size="sm">
          Large split button
        </Button>
        <Dropdown.Toggle isSplit theme="secondary" size="sm">
          <span className="visually-hidden">
            Toggle dropdown
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    </>
  );
}
SmallSize.storyName = 'Small size';

export const Dark = Story.bind({});
Dark.args = {
  children: [
    <Dropdown.Toggle theme="secondary" id="dropdownMenuButton2">
      Dropdown button
    </Dropdown.Toggle>,
    <Dropdown.Menu label="dropdownMenuButton2" isDark>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Separated link</Dropdown.Item>
    </Dropdown.Menu>,
  ],
};

export function Dropup() {
  return (
    <>
      <ButtonGroup drop="up" me={2}>
        <Dropdown.Toggle theme="secondary">
          Dropup
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
      <ButtonGroup drop="up">
        <Button theme="secondary">
          Split dropup
        </Button>
        <Dropdown.Toggle theme="secondary" isSplit>
          <span className="visually-hidden">
            Toggle Dropdown
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    </>
  );
}

export function Dropright() {
  return (
    <>
      <ButtonGroup drop="end" me={2}>
        <Dropdown.Toggle theme="secondary">
          Dropright
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
      <ButtonGroup drop="end">
        <Button theme="secondary">
          Split dropright
        </Button>
        <Dropdown.Toggle theme="secondary" isSplit>
          <span className="visually-hidden">
            Toggle Dropdown
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    </>
  );
}

export function Dropstart() {
  return (
    <>
      <ButtonGroup drop="start" me={2}>
        <Dropdown.Toggle theme="secondary">
          Dropstart
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
      <ButtonGroup drop="start">
        <Button theme="secondary">
          Split dropstart
        </Button>
        <Dropdown.Toggle theme="secondary" isSplit>
          <span className="visually-hidden">
            Toggle Dropdown
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    </>
  );
}

export function ItemText() {
  return (
    <ButtonGroup>
      <Dropdown.Toggle>
        Dropdown text
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Text>
          Dropdown item text
        </Dropdown.Text>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </ButtonGroup>
  );
}
ItemText.storyName = 'Item text';

export const Active = Story.bind({});
Active.args = {
  children: [
    <Dropdown.Toggle>
      Active
    </Dropdown.Toggle>,
    <Dropdown.Menu>
      <Dropdown.Item>Regular link</Dropdown.Item>
      <Dropdown.Item isActive>Active link</Dropdown.Item>
      <Dropdown.Item>Another link</Dropdown.Item>
    </Dropdown.Menu>,
  ],
};

export const Disabled = Story.bind({});
Disabled.args = {
  children: [
    <Dropdown.Toggle>Disabled</Dropdown.Toggle>,
    <Dropdown.Menu>
      <Dropdown.Item>Regular link</Dropdown.Item>
      <Dropdown.Item isDisabled>Disabled link</Dropdown.Item>
      <Dropdown.Item>Another link</Dropdown.Item>
    </Dropdown.Menu>,
  ],
};

export const MenuAlignmentEnd = Story.bind({});
MenuAlignmentEnd.args = {
  children: [
    <Dropdown.Toggle theme="secondary">
      Right-aligned menu example
    </Dropdown.Toggle>,
    <Dropdown.Menu align="end">
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>,
  ],
};
MenuAlignmentEnd.storyName = 'Menu alignment start';

export const MenuAlignmentResponsive = Story.bind({});
MenuAlignmentResponsive.args = {
  children: [
    <Dropdown.Toggle theme="secondary">
      Left-aligned but right aligned when large screen
    </Dropdown.Toggle>,
    <Dropdown.Menu align="end" alignLg="start">
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else here</Dropdown.Item>
    </Dropdown.Menu>,
  ],
};
MenuAlignmentResponsive.storyName = 'Menu alignment responsive';

export const Headers = Story.bind({});
Headers.args = {
  children: [
    <Dropdown.Toggle theme="secondary">
      Dropdown header
    </Dropdown.Toggle>,
    <Dropdown.Menu>
      <Dropdown.Header>Dropdown header</Dropdown.Header>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
    </Dropdown.Menu>,
  ],
};

export const Texts = Story.bind({});
Texts.args = {
  children: [
    <Dropdown.Toggle theme="secondary">
      Dropdown text
    </Dropdown.Toggle>,
    <Dropdown.Menu padding={4} textColor="muted">
      <Text>
        Some example text that&rsquo;s free-flowing
        within the dropdown menu.
      </Text>
      <Text mb={0}>
        And this is more example text.
      </Text>
    </Dropdown.Menu>,
  ],
};

export function Options() {
  return (
    <Flex>
      <Dropdown me={1}>
        <Dropdown.Toggle
          theme="secondary"
          id="dropdownMenuOffset"
          offset={[10, 20]}
        >
          Offset
        </Dropdown.Toggle>
        <Dropdown.Menu label="dropdownMenuOffset">
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ButtonGroup>
        <Button theme="secondary">Reference</Button>
        <Dropdown.Toggle
          theme="secondary"
          isSplit
          reference="parent"
        >
          <span className="visually-hidden">
            Toggle Dropdown
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    </Flex>
  );
}

export function AutoCloseBehavior() {
  return (
    <>
      <ButtonGroup me={1}>
        <Dropdown.Toggle theme="secondary" isAutoClose>
          Default dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
      <ButtonGroup me={1}>
        <Dropdown.Toggle theme="secondary" isAutoClose="inside">
          Clickable outside
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
      <ButtonGroup me={1}>
        <Dropdown.Toggle theme="secondary" isAutoClose="outside">
          Clickable inside
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
      <ButtonGroup me={1}>
        <Dropdown.Toggle theme="secondary" isAutoClose={false}>
          Manual close
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
          <Dropdown.Item>Menu item</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    </>
  );
}
AutoCloseBehavior.storyName = 'Auto close behavior';
