import { Routes, Route, Navigate } from 'react-router';

import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';

import FriendsRequests from './pages/FriendsRequests';
import Friends from './pages/Friends/Friends';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Feed from './pages/Feed';

function App() {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <Navigate
                  to="/feed"
                  replace
               />
            }
         />
         <Route element={<AppLayout />}>
            <Route
               path="feed"
               element={<Feed />}
            />
            <Route
               path="friends"
               element={<Friends />}
            />
            <Route
               path="friends-requests"
               element={<FriendsRequests />}
            />
            <Route
               path="profile"
               element={<Profile />}
            />
         </Route>
         <Route element={<AuthLayout />}>
            <Route
               path="login"
               element={<Login />}
            />
            <Route
               path="register"
               element={<Register />}
            />
         </Route>
      </Routes>
   );
}

export default App;
