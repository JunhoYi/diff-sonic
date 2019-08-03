import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';

import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 200,
  },
  textField: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
  },
}));

const currencies = [
  {
    value: 'PC',
    label: 'PC',
  },
  {
    value: 'M',
    label: 'MOBILE',
  },
  {
    value: 'API',
    label: 'API',
  },
];

function ProfileCreate() {
  return (
    <FormattedMessage id="component">
      {component => (
        <TextField
          id="standard-select-currency"
          select
          label={component.name}
          className={useStyles.textField}
          value={currencies.currency}
          // onChange={handleChange('currency')}
          helperText={component.select}
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    </FormattedMessage>
  );
}
export default ProfileCreate;
