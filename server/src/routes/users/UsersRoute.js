import Express from 'express';
import {
  signUpUser,
  fetchAllUsersCtrl,
} from '../../controllers/users/userCtrl.js';

const usersRoute = Express.Router();
usersRoute.post('/signup', signUpUser);
usersRoute.get('/', fetchAllUsersCtrl);

export default usersRoute;
