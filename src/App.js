import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import ManageProduct from './pages/ManageProduct/ManageProduct';
import AddProduct from './pages/AddProduct/AddProduct';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';
import Blogs from './pages/Blogs/Blogs';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/manageProduct" element={<ManageProduct></ManageProduct>}></Route>
        <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
