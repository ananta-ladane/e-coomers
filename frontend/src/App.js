import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './component/homepage/HomePage';
import SignupUser from './component/auth/SignupUser';
import LoginForm from './component/auth/LoginForm';
import AdMainpage from './component/Administrator/AdMainpage';
import UserAdd from './component/Administrator/UserAdd';
import StoreAdd from './component/Administrator/StoreAdd';
import AdminAdd from './component/Administrator/AdminAdd';
import StoreData from './component/storedash/StoreData';
import Data from './component/user&admin data/Data';
import UserDash from './component/userdashbord/UserDash';
import UpdatePass from './component/userdashbord/UpdatePass';
import NewPass from './component/userdashbord/NewPass';
import StoreDash from './component/storedash/StoreDash';
import Supass from './component/storedash/Supass';
import SnPass from './component/storedash/SnPass';
import AdBody from './component/Administrator/AdBody';
import Ubody from './component/userdashbord/Ubody';
import Sbody from './component/storedash/Sbody';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/usersignup",
    element: <SignupUser />
  }, {
    path: "/login",
    element: <LoginForm />
  },
  {
    path: "/admainpage",
    element: <AdMainpage />,
    children: [
      {
        index: true,
        element: <AdBody />
      },
      {

        path: "adbody",
        element: <AdBody />
      },

      {
        path: "storedata",
        element: <StoreData />
      },
      {
        path: "data",
        element: <Data />
      },
      {
        path: "useradd",
        element: < UserAdd />
      },
      {
        path: "storeadd",
        element: <StoreAdd />
      },

      {
        path: "adminadd",
        element: <AdminAdd />
      }


    ]

  },






  {
    path: "/userdash",
    element: <UserDash />,
    children: [

      {
        index: true,
        element: <Ubody />
      },
      {
        path: "userbody",
        element: <Ubody />
      },
      {
        path: "uupass",
        element: <UpdatePass />
      },
      {
        path: "unpass",
        element: <NewPass />
      }
    ]
  },





  {
    path: "/stordash",
    element: <StoreDash />,
    children: [
      {
        index: true,
        element: <Sbody />
      },
      {
        path: "storebody",
        element: <Sbody />
      },
      {
        path: "supass",
        element: <Supass />
      },

      {
        path: "snpass",
        element: <SnPass />
      }
    ]
  },











])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
