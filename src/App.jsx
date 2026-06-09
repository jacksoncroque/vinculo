import { Routes, Route } from 'react-router';

import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';

import Login from './pages/Login';
import Feed from './pages/Feed';
import Register from './pages/Register';
import Friends from './pages/Friends/Friends';
import FriendsRequests from './pages/FriendsRequests';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
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
