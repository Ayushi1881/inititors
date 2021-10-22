import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
      <section className="live">
    <div className="person">
      <div className="profile-pic"></div>
      <p className="name">Manisha</p>
    </div>
    <div className="person live-active">
      <div className="profile-pic"></div>
      <p className="name">Payal</p>
      <span><i className="fas fa-video"></i> Live</span>
    </div>
    <div className="person">
      <div className="profile-pic"></div>
      <p className="name">Sagar</p>
    </div>
    <div className="person">
      <div className="profile-pic"></div>
      <p className="name">Prem</p>
    </div>
    <div className="person">
      <div className="profile-pic"></div>
      <p className="name">Rahul</p>
    </div>
    <div className="person">
      <div className="profile-pic"></div>
      <p className="name">Archana</p>
    </div>
    <div className="person">
      <div className="profile-pic"></div>
      <p className="name">Ayushi</p>
    </div>
    <div className="person">
      <div className="profile-pic"></div>
      <p className="name">Poonam</p>
    </div>
  </section>

  <section className="newsfeed">


    <div className="card">
      <div className="picture" >
       
      </div>
      <div className="content">
        <div className="header">
          <div className="profile-pic"></div>
          <div className="detail">
            <p className="name">Manisha</p>
            <p className="posted">5 minutes ago</p>
          </div>
        </div>
        <div className="desc">
          "No matter who you are, where you are from, your skin color, your gender identity, just speak yourself. Find your name and find your voice by speaking yourself."
        </div>
        <div className="tags">
          <span>#BTS</span>
          <span>#BandtanWorld</span>
          <span>#UNICEF</span>
        </div>
        <div className="footer">
          <div className="like">
            <i className="fas fa-heart"></i>
            <span>700k</span>
          </div>
          <div className="comment">
            <i className="fas fa-comment"></i>
            <span>700k</span>
          </div>
          <div className="share">
            <i className="fas fa-share"></i>
            <span>700k</span>
          </div>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="picture" >
       
      </div>
      <div className="content">
        <div className="header">
          <div className="profile-pic"></div>
          <div className="detail">
            <p className="name">Manisha</p>
            <p className="posted">2 hours ago</p>
          </div>
        </div>
        <div className="desc">
          “True love first begins with loving myself.”
        </div>
        <div className="tags">
          <span>#BTS</span>
          <span>#LfeGoesOn</span>
        </div>
        <div className="footer">
          <div className="like">
            <i className="fas fa-heart"></i>
            <span>900k</span>
          </div>
          <div className="comment">
            <i className="fas fa-comment"></i>
            <span>900k</span>
          </div>
          <div className="share">
            <i className="fas fa-share"></i>
            <span>900k</span>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="picture" >
       
      </div>
      <div className="content">
        <div className="header">
          <div className="profile-pic"></div>
          <div className="detail">
            <p className="name">Manisha</p>
            <p className="posted">1 day ago</p>
          </div>
        </div>
        <div className="desc">
          “True love first begins with loving myself.”
        </div>
        <div className="tags">
          <span>#BTS</span>
          <span>#BTSLoveMySelf</span>
          <span>#EndViolence</span>
        </div>
        <div className="footer">
          <div className="like">
            <i className="fas fa-heart"></i>
            <span>1b</span>
          </div>
          <div className="comment">
            <i className="fas fa-comment"></i>
            <span>1b</span>
          </div>
          <div className="share">
            <i className="fas fa-share"></i>
            <span>1b</span>
          </div>
        </div>
      </div>
    </div>

  </section>
  </header>

  <footer >
  <section className="nav">
    <div className="icon active">
      <a href="#">
      <i className="fas fa-fire"></i>
      <p>Home</p>
      </a>
    </div>
    <div className="icon">
    <a href="#">
      <i className="fas fa-globe"></i>
      <p>Live</p>
      </a>
    </div>
    <div className="icon">
    <a href="#">
      <i className="fas fa-comment-dots"></i>
      <p>Chats</p>
      </a>
    </div>
    <div className="icon">
      <a href="#">
      <i className="fas fa-bell"></i>
      <p>Notifications</p>
      </a>
    </div>
    <div className="icon">
    <a href="#">
      <i className="fas fa-user"></i>
      <p>Profile</p>
      </a>
    </div>
  </section>
</footer>
     
    </div>
  );
}

export default App;
