import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Pages/Users/Login';
import './App.css';
import Register from './Pages/Users/Register';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import Profile from './Pages/Users/Profile';
import AddExpense from './Pages/Expenses/AddExpense';
import AddIncome from './Pages/Income/AddIncome';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/add-expense" Component={AddExpense} />
        <Route exact path="/add-income" Component={AddIncome} />
      </Routes>
    </Router>
    </Provider>
  );
}
export default App;
