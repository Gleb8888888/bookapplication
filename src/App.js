import React, { Component } from "react";
import "./App.css";
import BooksData from "./api/BooksData.json";


class BookDisplay extends Component {
  render() {
    const { book } = this.props;
    if (!book) return null;
    
    return (
      <div className="CardWrapper">
        <div className="ColImg">
          <img clasName="Img" src={book.image} alt=""/>
        </div>
          <div className="ColDetail">
            <div className="Header">
              <div className="BookTitle">{book.name}</div>
            </div>
              <div className="Description">
                Автор: {book.author}<br></br>
                id: {book.id}
              </div>
                <a className="Link" href={book.url}>
                Узнать больше
                </a>
          </div>
      </div>
    
      
    );
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      BooksData,
      activeBook: null
    };
  }

  render() {
    return (
      <div>
        <div className="App-text">
          <p>Мои книги</p>
        </div>
          <div className="Sidebar">
            {this.state.BooksData.map(book => (
              <button
                key={book.id}
                  onClick={() => {
                    this.setState({ activeBook: book });
                  }}>
                    <span>{book.name}</span>
              </button>
            ))}
          </div>
        <BookDisplay book={this.state.activeBook}/>
      </div>
    );
  }
}

export default App;