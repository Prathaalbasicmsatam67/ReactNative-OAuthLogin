import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy, memo } from 'react';
//import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';
import { Ring } from 'react-awesome-spinners';

const Condolence = lazy(() => import('./components/condolense'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Ring />}>
        <Switch>
          <Route path='/condolence' component={Condolence} />
          <Route exact path='/*' component={Condolence} />
        </Switch>
      </Suspense>
    </Router>
  );
};
export default memo(App);
