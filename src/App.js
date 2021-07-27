/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { setStates } from './actions/dataActions';
import route from './routes';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const effect = async () => {
      const res = await axios.get(
        'https://api.covid19india.org/state_district_wise.json'
      );
      const keys = Object.keys(res?.data);
      const values = Object.values(res?.data);
      const result = [];
      for (let i = 0; i < keys.length; i++) {
        let x = keys[i].toLowerCase().replaceAll(' ', '_');
        let y = values[i];
        const data = {
          [x]: y,
        };
        result.push(data);
      }
      setStates(result, dispatch);
    };
    effect();
  }, []);

  const routeComponent = route.map((data, index) => (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path={data.path} component={data.component} key={index} />
      </Switch>
    </AnimatePresence>
  ));

  return routeComponent;
}

export default App;
