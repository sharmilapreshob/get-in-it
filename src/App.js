import React from 'react';
import './App.css';
import Card from './components/card/card';

class App extends React.Component {
  constructor () {
    super();
    this.state= {
      cards: [],
      isLoading: true
    }
  }
  componentWillMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({cards: data, isLoading: false})
      })
      .catch(error => console.log('Error:', error));
  }
  render() {
    console.log(this.state.cards)
    return (
      <div>
      {this.state.isFetching
            ? (
                <div class="loader" style={{marginLeft: "50%" }}>
                  Loading...
                </div>
            )
            : (<Card cards={this.state.cards}/>)
        }
    </div>
    );
  }
}

export default App;
