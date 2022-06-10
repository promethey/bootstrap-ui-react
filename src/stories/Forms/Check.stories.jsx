import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Check } from 'components';

export default {
  title: 'Forms/Check',
  component: Check,
  subcomponents: {
    CheckInput: Check.Input,
    CheckLabel: Check.Label,
  },
  parameters: {
    docs: {
      description: {
        component: `Create consistent cross-browser and
        cross-device checkboxes and radios with our completely
        rewritten checks component.`,
      },
    },
  },
};

function Story({ isChecked, ...rest }) {
  const [checked, setChecked] = useState(isChecked || false);

  return (
    <Check
      isChecked={checked}
      onChange={() => setChecked((prev) => !prev)}
      {...rest}
    />
  );
}

Story.propTypes = {
  isChecked: PropTypes.bool,
};

Story.defaultProps = {
  isChecked: false,
};

export const Default = Story.bind({});
Default.args = {
  id: 'flexCheckDefault',
  label: 'Default checkbox',
};

export const Checked = Story.bind({});
Checked.args = {
  id: 'flexCheckChecked',
  label: 'Checked checkbox',
  isChecked: true,
};

export const Disabled = Story.bind({});
Disabled.args = {
  id: 'flexCheckDisabled',
  label: 'Disabled checkbox',
  isDisabled: true,
};

export const DisabledChecked = Story.bind({});
DisabledChecked.args = {
  id: 'flexCheckCheckedDisabled',
  label: 'Disabled checked checkbox',
  isChecked: true,
  isDisabled: true,
};
DisabledChecked.storyName = 'Disabled checked';

export function Radios() {
  const [checkedValue, setCheckedValue] = useState('value2');

  const examples = [
    {
      value: 'value1',
      id: 'flexRadioDefault1',
      label: 'Default radio',
    },
    {
      value: 'value2',
      id: 'flexRadioDefault2',
      label: 'Default checked radio',
    },
  ];

  return (
    examples.map(({ value, id, label }) => (
      <Check
        id={id}
        type="radio"
        name="flexRadioDefault"
        value={value}
        isChecked={checkedValue === value}
        onChange={() => setCheckedValue(value)}
      >
        {label}
      </Check>
    ))
  );
}

export function DisabledRadios() {
  const [checkedValue, setCheckedValue] = useState('value2');

  const examples = [
    {
      id: 'flexRadioDisabled1',
      value: 'value1',
      label: 'Disabled radio',
    },
    {
      id: 'flexRadioDisabled2',
      value: 'value2',
      label: 'Disabled checked radio',
    },
  ];

  return (
    examples.map(({ value, id, label }) => (
      <Check
        id={id}
        type="radio"
        name="flexRadioDisabled"
        value={value}
        isChecked={checkedValue === value}
        onChange={() => setCheckedValue(value)}
        isDisabled
      >
        {label}
      </Check>
    ))
  );
}
DisabledRadios.storyName = 'Disabled radios';

export const Switch = Story.bind();
Switch.args = {
  label: 'Default switch checkbox input',
  id: 'flexSwitchCheckDefault',
  isSwitched: true,
  isChecked: false,
};

export const SwitchChecked = Story.bind();
SwitchChecked.args = {
  label: 'Checked switch checkbox input',
  id: 'flexSwitchCheckChecked',
  isSwitched: true,
  isChecked: true,
};
SwitchChecked.storyName = 'Switch checked';

export const SwitchDisabled = Story.bind();
SwitchDisabled.args = {
  label: 'Disabled switch checkbox input',
  id: 'flexSwitchCheckDisabled',
  isSwitched: true,
  isChecked: false,
  isDisabled: true,
};
SwitchDisabled.storyName = 'Switch disabled';

export const SwitchCheckedDisabled = Story.bind();
SwitchCheckedDisabled.args = {
  label: 'Disabled checked switch checkbox input',
  id: 'flexSwitchCheckCheckedDisabled',
  isSwitched: true,
  isChecked: true,
  isDisabled: true,
};
SwitchCheckedDisabled.storyName = 'Switch checked disabled';

export function InlineCheckbox() {
  const [optionChecked1, setOptionChecked1] = useState(false);
  const [optionChecked2, setOptionChecked2] = useState(false);

  const examples = [
    {
      id: 'inlineCheckbox1',
      label: 1,
      value: 'option1',
      isChecked: optionChecked1,
      isDisabled: false,
      onChange: () => setOptionChecked1((prev) => !prev),
    },
    {
      id: 'inlineCheckbox2',
      label: 2,
      value: 'option2',
      isChecked: optionChecked2,
      isDisabled: false,
      onChange: () => setOptionChecked2((prev) => !prev),
    },
    {
      id: 'inlineCheckbox3',
      label: '3 (disabled)',
      value: 'option3',
      isChecked: false,
      isDisabled: true,
      onChange: null,
    },
  ];

  return (
    examples.map(({
      id, label, value, isChecked, isDisabled, onChange,
    }) => (
      <Check
        id={id}
        value={value}
        isInlined
        isChecked={isChecked}
        onChange={onChange}
        isDisabled={isDisabled}
      >
        {label}
      </Check>
    ))
  );
}
InlineCheckbox.storyName = 'Inline checkbox';

export function InlineRadio() {
  const [optionRadio, setOptionRadio] = useState(null);

  const examples = [
    {
      id: 'inlineCheckbox1',
      value: 'option1',
      label: '1',
      isDisabled: false,
    },
    {
      id: 'inlineCheckbox2',
      value: 'option2',
      label: '2',
      isDisabled: false,
    },
    {
      id: 'inlineCheckbox3',
      value: 'option3',
      label: '3 (disabled)',
      isDisabled: true,
    },
  ];

  return (
    examples.map(({
      value, id, label, isDisabled,
    }) => (
      <Check
        id={id}
        value={value}
        type="radio"
        isInlined
        isChecked={optionRadio === value}
        onChange={() => setOptionRadio(value)}
        isDisabled={isDisabled}
      >
        {label}
      </Check>
    ))
  );
}
InlineRadio.storyName = 'Inline radio';

export function Reverse() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  return (
    <>
      <Check
        id="reverseCheck1"
        isChecked={checkbox1}
        onChange={() => setCheckbox1((prev) => !prev)}
        isReversed
      >
        Reverse checkbox
      </Check>
      <Check
        id="reverseCheck2"
        isChecked={checkbox2}
        onChange={() => setCheckbox2((prev) => !prev)}
        isDisabled
        isReversed
      >
        Disabled reverse checkbox
      </Check>
      <Check
        id="reverseCheck3"
        isChecked={checkbox3}
        onChange={() => setCheckbox3((prev) => !prev)}
        isSwitched
        isReversed
      >
        Reverse switch checkbox input
      </Check>
    </>
  );
}

export function WithoutLabels() {
  const [checkbox, setCheckbox] = useState(false);
  const [radiobox, setRadiobox] = useState('');

  return (
    <>
      <Check
        id="checkboxNoLabel"
        isChecked={checkbox}
        onChange={() => setCheckbox((prev) => !prev)}
      />
      <Check
        type="radio"
        id="radioNoLabel1"
        name="radioNoLabel"
        isChecked={radiobox === 'radioNoLabel'}
        onChange={() => setRadiobox('radioNoLabel')}
      />
    </>
  );
}
WithoutLabels.storyName = 'Without labels';
