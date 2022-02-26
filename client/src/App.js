import './App.css';
import Header from './components/Header';
import AddUser from './components/AddUser';
import AllUser from './components/AllUsers';
import EditUser from './components/EditUser';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<AllUser/>}/>
        <Route exact path="/add" element={<AddUser/>}/>
        <Route exact path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
