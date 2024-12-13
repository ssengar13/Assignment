import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import BlogList from './pages/BlogList';
import AddBlog from './pages/AddBlog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<AddBlog />} />
          <Route path='blog-list' element={<BlogList />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
