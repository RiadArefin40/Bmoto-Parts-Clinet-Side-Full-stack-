
import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer, toast } from 'react-toastify'; import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myorders from './Pages/Myorders/Myorders';
import Myprofile from './Pages/Dashboard/Myprofile';
import Addreview from './Pages/Dashboard/Addreview';
import MyprofileInfo from './Pages/Dashboard/MyprofileInfo';
import Makeadmin from './Pages/Dashboard/Makeadmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Payment from './Pages/Dashboard/Payment';
import ManageProduct from './Pages/Dashboard/ManageProduct';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' ></Route>
       <Route path='/login' element={<Login></Login>} ></Route>
       <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       
       <Route path='/dashboard' element={
      <RequireAuth>
        <Dashboard></Dashboard>
      </RequireAuth>
       }>
         <Route index element={<MyprofileInfo></MyprofileInfo>}></Route>
          <Route path='myorders' element={<Myorders></Myorders>}></Route>
          <Route path='review' element={<Addreview></Addreview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myprofile' element={<Myprofile></Myprofile>}></Route>
          <Route path='makeadmin' element={<Makeadmin></Makeadmin>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageall' element={<ManageProduct></ManageProduct>}></Route>
       </Route>
       <Route path='/purchase/:productid' element={
         <RequireAuth>
            <Purchase></Purchase>
         </RequireAuth>
      }></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
