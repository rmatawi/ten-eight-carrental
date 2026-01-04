
import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import BrowseCars from '../pages/cars/BrowseCars.jsx';
import CarDetail from '../pages/cars/CarDetail.jsx';
import CarComparePage from '../pages/cars/CarComparePage.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/cars/',
    component: BrowseCars,
  },
  {
    path: '/cars/compare/',
    component: CarComparePage,
  },
  {
    path: '/cars/:carId/',
    component: CarDetail,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
