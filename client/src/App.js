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
import NavBar from './Components/Navigation/Navbar';
import ProtectedRoute from './Components/Navigation/ProtectedRoute';
import NotAdmin from './Components/NotAdmin';

function App() {
  return (
    <Provider store={store}>     
    <Router> 
      <NavBar/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/not-found" Component={NotAdmin} />
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path="/add-expense" element={<ProtectedRoute><AddExpense/></ProtectedRoute>} />
        <Route path="/add-income"element={<ProtectedRoute><AddIncome/></ProtectedRoute>} />
      </Routes>
    </Router>
    </Provider>
  );
}
export default App;
