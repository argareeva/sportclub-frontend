import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://cdn3.vectorstock.com/i/1000x1000/17/27/sport-club-logo-design-heraldic-shield-vector-21501727.jpg'></img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://i.ytimg.com/vi/bNYbNFDx-vo/maxresdefault.jpg'></img>
        </div>
        <div>
          <img src='https://mir-s3-cdn-cf.behance.net/projects/404/a12fc2100513681.Y3JvcCwxODgwLDE0NzAsMCwyMDQ.jpg'></img>
        </div>
        <div>
          ava + description
          my post
          new post
          post 1
          post 2
        </div>
      </div>
    </div>
  );
}

export default App;
