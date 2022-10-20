import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Profile from "../../others/Profile/Profile";
import TermsAndCondition from "../../others/TermsAndConditions/TermsAndCondition";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Loign/Login";
import Register from "../../Pages/Login/Reginter/Register";
import News from "../../Pages/News/News/News";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {path : '/',
   element : <Main/>,
   children : [
    {
      path: '/', 
      element : <PrivateRoute><Home></Home></PrivateRoute>,
      loader : () => fetch('http://localhost:5000/news')
    },
    {
      path: '/category/:id', 
      element : <Category></Category>,
      loader : ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
    },
    {
      path: '/news/:id', 
      element : <PrivateRoute><News></News></PrivateRoute>,
      loader : ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
    },
    {
      path : '/login' ,
      element : <Login/>
    },
    {
      path : '/register',
      element : <Register/>
    },
    {
      path : '/terms',
      element : <TermsAndCondition/>
    },
    {
      path : '/profile',
      element : <PrivateRoute><Profile/></PrivateRoute>
    }
  ]}
])