import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';

import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => ({}));

const fileType = [
  {
    value: 'SiteMap',
    label: 'Site Map',
  },
  {
    value: 'Log',
    label: 'Apache Log',
  },
  {
    value: 'tab',
    label: 'Tab Separated File',
  },
];

function UrlImport() {
  return console.log();
}
export default UrlImport;
