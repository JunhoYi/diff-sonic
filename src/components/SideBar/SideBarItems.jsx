import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import DiffIcon from '@material-ui/icons/Spellcheck';

import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

import { Link } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

export const mainListItems = (
  <div>
    <FormattedMessage id="menu">
      {menu => <ListSubheader inset>{menu.testTool.viewName}</ListSubheader>}
    </FormattedMessage>

    <Link to="/home" style={{ textDecoration: 'none', fontSize: '15px', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <FormattedMessage id="menu">
          {menu => <ListItemText primary={menu.dashBoard.viewName} />}
        </FormattedMessage>
      </ListItem>
    </Link>
    <Link to="/profile/create" style={{ textDecoration: 'none', fontSize: '15px', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <FormattedMessage id="menu">
          {menu => <ListItemText primary={menu.profileCreate.viewName} />}
        </FormattedMessage>
      </ListItem>
    </Link>
    <Link to="/profile/run" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <DiffIcon />
        </ListItemIcon>
        <FormattedMessage id="menu">
          {menu => <ListItemText primary={menu.profileRun.viewName} />}
        </FormattedMessage>
      </ListItem>
    </Link>
    <Link to="/url/view" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <FormattedMessage id="menu">
          {menu => <ListItemText primary={menu.urlView.viewName} />}
        </FormattedMessage>
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <FormattedMessage id="menu">
      {menu => <ListSubheader inset>{menu.adminSubList.viewName}</ListSubheader>}
    </FormattedMessage>
    <Link to="/url/setting" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <FormattedMessage id="menu">
          {menu => <ListItemText primary={menu.urlManager.viewName} />}
        </FormattedMessage>
      </ListItem>
    </Link>
    <Link to="/url/import" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <RefreshIcon />
        </ListItemIcon>
        <FormattedMessage id="menu">
          {menu => <ListItemText primary={menu.urlImport.viewName} />}
        </FormattedMessage>
      </ListItem>
    </Link>

    <Link to="/db/setting" style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <FormattedMessage id="menu">
          {menu => <ListItemText primary={menu.dbSetting.viewName} />}
        </FormattedMessage>
      </ListItem>
    </Link>
  </div>
);
