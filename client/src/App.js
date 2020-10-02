import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import Posts from './components/posts/Posts';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' posts component={Posts} />
      </Switch>
    </>
  );
}

export default App;
