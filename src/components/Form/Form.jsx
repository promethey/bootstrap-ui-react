import React from 'react';
import Box from 'components/Box';
import Control from './Control';
import Label from './Label';
import Select from './Select';
import Option from './Option';
import Check from './Check';

function Form(props) {
  return (
    <Box as="form" {...props} />
  );
}

Form.Label = Label;
Form.Control = Control;
Form.Select = Select;
Form.Option = Option;
Form.Check = Check;

export default Form;
