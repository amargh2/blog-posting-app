import './App.css';
import SideBar from './components/SideBar'
import Header from './components/Header';
import PostsViewPanel from './components/PostsView';
function App() {
  return (
    <div className="App">
    <div><Header/></div>
      <div className="grid grid-cols-10">
        <div><SideBar/></div>
      <div className='col-start-3 col-span-full md:col-span-6'>
        <PostsViewPanel></PostsViewPanel>
      </div>
      </div>
    </div>
  );
}

export default App;
