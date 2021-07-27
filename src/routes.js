import DistrictContainer from './pages/Districts/DistrictContainer';
import HomepageContainer from './pages/Homepage/HomepageContainer';
import StatesContainer from './pages/States/StatesContainer';

const route = [
  {
    path: '/',
    component: HomepageContainer,
  },

  {
    path: '/state/:stateId',
    component: StatesContainer,
  },
  {
    path: '/state/:stateId/:districtId',
    component: DistrictContainer,
  },
];

export default route;
