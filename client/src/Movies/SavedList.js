import React, { Component } from "react"

export default class SavedList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <ul>
          {this.props.list.map(movie => (
            <li className="saved-movie">{movie.title}</li>
          ))}
        </ul>
        <button className="home-button">Home</button>
      </div>
    )
  }
}
