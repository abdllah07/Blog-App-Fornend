import './App.css';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import HomePage from './pages/Home/HomePage';
import {Route , Routes} from "react-router"
function App() {
  return ( 
    <div className="App font-opensans" >
      <Routes>
        <Route exact index path="/" element={<HomePage />} />
        <Route exact  path="/blog/:id" element={<ArticleDetailPage />} />

      </Routes>
      
    </div>
  );
}

export default App;