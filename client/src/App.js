import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/shared/Home';
import Posts from './components/posts/Posts';
import Navbar from './components/shared/Navbar';

const App = () => (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' posts component={Posts} />
      </Switch>
    </>
)


export default App;
