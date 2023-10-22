import Express from 'express';
import {
  signUpUser,
  fetchAllUsersCtrl,
  loginUserCtrl
} from '../../controllers/users/userCtrl.js';

const usersRoute = Express.Router();
usersRoute.post('/signup', signUpUser);
usersRoute.post('/login', loginUserCtrl);
usersRoute.get('/', fetchAllUsersCtrl);

export default usersRoute;
