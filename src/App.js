import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers/Routers/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
        <RouterProvider router={router}/>
        <Toaster></Toaster>
    </div>
  );
}

export default App;
