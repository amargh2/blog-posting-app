import './App.css';
import Home from './pages/Home'
import ViewPosts from './pages/ViewPosts'
import NewPost from './pages/NewPost'
import { Routes, Route } from "react-router-dom"
import Nav from './pages/components/Nav'
import Header from './pages/components/Header';

//component class div is the container that holds the current view (post, view, login);
//layout-setup class sets up 10column grid on medium+ screens and converts to a stacked column layout on mobile
function App() {
  return (
    <div className="App">
      <div className='header pb-2'><Header/></div>
      <div className="layout-setup flex flex-col md:grid md:grid-cols-10 mx-1">
        <div className='nav flex justify-center sm:col-start-1 col-start-4'><Nav/></div>
        <div className='component md:col-start-3 md:col-span-6 col-span-full mx-1'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/new' element={<NewPost/>}></Route>
            <Route path='/posts' element={<ViewPosts/>}></Route>
          </Routes>
        </div>
        </div>
    </div>
  );
}

export default App;
