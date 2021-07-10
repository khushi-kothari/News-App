import './App.css';
import Api from './Components/api'

function App() {
  return (
    <div className="App">
      <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper indigo darken-1">
                <a href="#!" className="brand-logo">NewsGorilla</a>
            </div>
        </nav>
    </div>
    <div className="feed-body">
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">News Headline</span>
                        <p>A small chunk of news content in the form of a paragraph and for full article user need to
                            click on the button below .</p>
                    </div>
                    <div className="card-action">
                        <a href="_blank">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="fixed-action-btn">
        <a href ="about.html" className="btn-floating btn-large indigo darken-1">
            <i className="large material-icons">more_vert</i>
        </a>
    </div>
      <Api />
    </div>
  );
}

export default App;
