import React from 'react';
import './card-details.scss';

class CardDetails extends React.Component {
  constructor() {
    super();
    this.state= {
      cardDesc: [],
      loading: true
    }
  }
  componentWillMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const cardId = this.props.location.state.cardId;
    fetch(url+ `/${cardId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({cardDesc: data, loading: false})
      })
      .catch(error => console.log('Error:', error));
  }
  render () {
    return (
      <div className="container">
      {this.state.loading
            ? (
                <div class="loader">
                  Loading...
                </div>
            )
            : (<div>
              <h2 className= "card-head">Card Details</h2>
              <div className="card-details-title">{this.state.cardDesc.title}</div>
              <div className="card-details-body">{this.state.cardDesc.body}</div>
            </div>)
        }
        </div>
    );
  }
}

export default CardDetails;
