import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostDetail from './components/PostDetail';
import PostUpdate from './components/PostUpdate';
import DeletePost from './components/DeletePost';
import Layout from './containers/Layout';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './obs.css'


const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
      <Layout>  
          <Routes>
            <Route path="/" element={<PostList/>}/>
            <Route path="/create" element={<PostCreate/>}/>
            <Route path="/post/:postSlug" element={<PostDetail/>}/>
            <Route path="/post/:postSlug/update" element={<PostUpdate/>}/>
            <Route path="/post/:postSlug/delete" element={<DeletePost/>}/>

          </Routes>
      </Layout>
 <ToastContainer/>
    </BrowserRouter>
  
  );
}

export default App;
