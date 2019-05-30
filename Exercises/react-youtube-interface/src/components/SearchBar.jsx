import React, { Component } from "react";
import "../styles/SearchBar.scss";
import youtube from '../assets/youtube.png'
import camera from '../assets/camera.jpg'
import grid from '../assets/grid.png'
import conv from '../assets/conv.png'
import bell from '../assets/bell.png'


class SearchBar extends Component {
  state = { term: "" };

  //* User hits enter on search
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  //* Set the value of search bar
  onInputChange = event => {
    this.setState({
      term: event.target.value,
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
            <img className= "logo" src={youtube} alt="youtube logo"/>
              <label htmlFor="search-bar-input"></label>
              <input id="search-bar-input" type="text" value={this.state.term} onChange={this.onInputChange} />
              <button className="searchButton"><i class="fas fa-search"></i></button>
            <div className="iconss">
              <img className="icons" src={camera} alt="cameraicon" />
              <img className="icons" src={grid} alt="gridicon" />
              <img className="icons" src={conv} alt="convicon" />
              <img className="icons" src={bell} alt="bellicon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
