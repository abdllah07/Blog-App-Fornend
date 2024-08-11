import './App.css';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import HomePage from './pages/Home/HomePage';
import {Route , Routes} from "react-router"
import RegisterPage from './pages/register/RegisterPage';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import AdminLayout from './pages/admin/AdminLayout';
import Admin from './pages/admin/screens/Admin';
import ManagePost from './pages/admin/screens/posts/ManagePost';
import EditPost from './pages/admin/screens/posts/EditPost';
import Comments from './pages/admin/screens/comments/Comments';
import Categories from './pages/admin/screens/categories/Categories';
import EditCategories from './pages/admin/screens/categories/EditCategories';
import Users from './pages/admin/screens/users/Users';
import BlogPage from './pages/blog/BlogPage';
function App() {
  return ( 
    <div className="App font-opensans" >
      <Routes>
        <Route  index path="/" element={<HomePage />} />
        <Route   path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route   path="/blog" element={<BlogPage />} />

        <Route   path="/register" element={<RegisterPage />} />
        <Route   path="/login" element={<LoginPage />} />
        <Route   path="/profile" element={<ProfilePage />} />

        <Route   path="/admin" element={<AdminLayout />} >

          <Route  index  element={<Admin />} />
          <Route  path = "comments"  element={<Comments />} />
          <Route  path = "posts/manage"  element={<ManagePost />} />
          <Route  path = "posts/manage/edit/:slug"  element={<EditPost />} />
          <Route  path = "/admin/categories/manage"  element={<Categories />} />
          <Route  path = "categories/manage/edit/:slug"  element={<EditCategories />} />

          <Route  path = "users/manage"  element={<Users />} />

          
        </Route>

      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;