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
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import ManageStock from './pages/ManageStock/ManageStock';
import MyProduct from './pages/MyProduct/MyProduct';
import About from './pages/About/About';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/manageProduct"
          element={
            <RequireAuth>
              <ManageProduct></ManageProduct>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageStock/:id"
          element={
            <RequireAuth>
              <ManageStock></ManageStock>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myProduct"
          element={
            <RequireAuth>
              <MyProduct></MyProduct>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/addProduct"
          element={
            <RequireAuth>
              <AddProduct></AddProduct>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
