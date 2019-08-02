import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ApolloProvider } from 'react-apollo';
import client from "./apolloClient";

import Sidebar from './components/SideBar';
import ProfileCreate from './components/ProfileCreate';
import ProfileList from './components/ProfileList';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingTop : '30px'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }
}));
function App() {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
    <Router>
      <CssBaseline />
      <div className={classes.root}> 
        <Sidebar title="ss"/>
        <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container>
          <Switch>
            <Route exact path="/home" />
            <Route exact path="/profile/create" component={ProfileCreate}/>
            <Route exact path="/profile/list" component={ProfileList} />
            <Route exact path="/login" />
          </Switch>
          </Container>
        </main>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
