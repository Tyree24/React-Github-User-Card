import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    userData: {},
    userFollowers: []
  };

  //this fetches the data from the given url (my github)
  componentDidMount() {
    fetch('https://api.github.com/users/Tyree24')
      .then( res => res.json())
      .then( data => this.setState({ userData: data }))
      .catch( err => console.log(err));

      //this will fetch the data showing my followers (which is currently only one person)
  fetch('https://api.github.com/users/Tyree24/followers')
  .then( res => res.json())
  .then( data => this.setState({ userFollowers: data }))
  .catch( err => console.log(err));
};
  render() {
  return (
    <div className="App">
      <header>
      <h1>Github User Cards</h1>

      <div className="container">
            <a href={this.state.userData.html_url} className="card user-card">
              <div>
                <img 
                  className="card__avatar"
                  alt={this.state.userData.login}
                  src={this.state.userData.avatar_url}
                />
                <h4>{this.state.userData.login}</h4>
                <p>Bio: {this.state.userData.bio}</p>
                <p>Followers: {this.state.userData.followers}</p>
              </div>
            </a>
          </div>

          <h2>Followers</h2>

{/* this will render out my followers (currently only one person) showing their username name and profile picture */}
      <div className="container">
      {this.state.userFollowers.map( follower => {
              return (
                <a href={follower.html_url} className="card">
                  <div>
                    <img 
                      className="card__avatar"
                      alt={follower.login}
                      src={follower.avatar_url}
                    />
                    <h4>{follower.login}</h4>
                  </div>
                </a>
              );
            })}
          </div>
        </header>
      </div>
    );
  };
}
export default App;