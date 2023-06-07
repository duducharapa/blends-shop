import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';


const BackButton = () => (
  <Link to={routes.HOME}>
    <i className='pi pi-arrow-left text-primary text-3xl' />
  </Link>
);

export {
  BackButton,
};
