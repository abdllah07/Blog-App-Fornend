import './App.css';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import HomePage from './pages/Home/HomePage';
import {Route , Routes} from "react-router"
import RegisterPage from './pages/register/RegisterPage';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
function App() {
  return ( 
    <div className="App font-opensans" >
      <Routes>
        <Route exact index path="/" element={<HomePage />} />
        <Route exact  path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route exact  path="/register" element={<RegisterPage />} />
        <Route exact  path="/login" element={<LoginPage />} />
        <Route exact  path="/profile" element={<ProfilePage />} />

      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;