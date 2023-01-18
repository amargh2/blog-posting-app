import './App.css';
import {useState, useEffect} from 'react'
import SideBar from './components/SideBar'
import Header from './components/Header';
import PostsViewPanel from './components/PostsView';
function App() {
  //state determines the visible panel (options toggle between posts/new)
  const [selectedTab, setSelectedTab] = useState('posts');

  return (
    <div className="App">
    <div><Header/></div>
      <div className="grid grid-cols-10">
        <div><SideBar/></div>
      <div className='col-start-3 col-span-full md:col-span-6'>
        {selectedTab === 'posts' ? <PostsViewPanel/> : <div>Component goes here </div>} 
      </div>
      </div>
    </div>
  );
}

export default App;
