import React,{useContext} from "react";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostDetail from "./components/PostDetail";
import PostUpdate from "./components/PostUpdate";
import DeletePost from "./components/DeletePost";
import Layout from "./containers/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./obs.css";
import "./obs2.css";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)
  return user ? children : <Navigate replace to="/login" />
}

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<PrivateRoute><PostCreate /></PrivateRoute>} exact/>
            <Route path="/post/:postSlug" element={<PrivateRoute><PostDetail /></PrivateRoute>} exact/>
            <Route path="/post/:postSlug/update" element={<PrivateRoute><PostUpdate /></PrivateRoute>} exact/>
            <Route path="/post/:postSlug/delete" element={<PrivateRoute><DeletePost /></PrivateRoute>} exact/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
        <ToastContainer />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
