import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth'
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import ManageInventory from './ManageInventory/ManageInventory';
import useItems from './hooks/useItems';

function App() {
  const [items] = useItems();
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/inventory/:itemId" element={<RequireAuth><UpdateInventory></UpdateInventory></RequireAuth>}></Route>
        <Route path="/manageInventory" element={
          <RequireAuth><div className='container mx-auto mt-4 row row-cols-1 row-cols-md-3 g-4'>{items.map(item =>
            <ManageInventory
              key={item._id}
              item={item}>
            </ManageInventory>)}
          </div>
          </RequireAuth>}>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
