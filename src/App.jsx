import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import TaskDetails from './pages/TaskDetails';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/task/:id" component={TaskDetails} />
        </Switch>
      </Router>
    </TaskProvider>
  );
};

export default App;
