import asyncComponent from './components/async.component';

const Home = asyncComponent(() => import('./home/home.component')
  .then(module => module.default), { name: 'Home' });

export default Routes = {
  Home
}
