import './App.css';
import {useState, useEffect} from 'react'
import Nav from './components/SideBar'
import Header from './components/Header';
import EditingPanel from './components/Editor';
import PostsViewPanel from './components/PostsView';
function App() {
  //state determines the visible panel (options toggle between posts/new)
  const [selectedTab, setSelectedTab] = useState('edit');

  return (
    <div className="App">
    <div><Header/></div>
    <div className='flex justify-center'><Nav/></div>
      <div className="grid grid-cols-10 mx-1">
      <div className='row-start-2 col-start-1 md:col-start-3 col-span-full md:col-span-6'>
        {selectedTab === 'posts' ? <PostsViewPanel/> : <EditingPanel/>} 
      </div>
      </div>
    </div>
  );
}

export default App;
