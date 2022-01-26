
import axios from 'axios';
import { Component } from 'react';
import TestAxios from './NasaAxios';

// convert the format date to request nasa API 
function toStringDay(day) {
  let stringDate = day.getFullYear() + '-' + (day.getMonth() + 1) + '-' + (day.getDate());
  return stringDate;
}

class NasaContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      jour: new Date(),
      count: 0,
      isLoaded: false,
      url: "",
      media_type: "",
      title: ""
    };

  }

  componentDidMount() {

    this.loadData();
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
    console.log(this.state.date.toLocaleTimeString() + " au montage du composant");

  }

  async loadData() {
    const request = `https://api.nasa.gov/planetary/apod?api_key=fFjGwhmPd4QILRYdPGga08GKSBxEZaaYuXhd1E0a&date=${toStringDay(this.state.jour)}`;
    axios.get(request)
      .then((response) => {
        console.log(response);
        this.setState({
          title: response.data.title,
          url: response.data.url,
          media_type: response.data.media_type,
          explanation: response.data.explanation,
          isLoaded: true
        });
      }

      )
      .catch((error) => {
        console.log(error);
      }

      )
  }

  // Information in browser terminal
  componentDidUpdate() {
    console.log("changement de l'état du composant et mise du timer à 0 à " + this.state.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Action to execute each interval 

  tick() {
    this.setState({
      date: new Date(),
      count: this.state.count + 1,
      jour: new Date(this.state.jour.getTime() - (1 * 24 * 60 * 60 * 1000))
    });
    this.loadData();
  }

  render() {
    return (
      <>
        <div className='heading'>
          <div className='heading-panel'>
            <h2>{this.state.count} requêtes à l'API de la Nasa. <br /> Dernière vérification à {this.state.date.toLocaleTimeString()}.</h2>
            <div><p>Photo du jour: {this.state.jour.toLocaleDateString()}</p></div>
          </div>
        </div>
        <div className='nasa-api_content'>
          <TestAxios
            media_type={this.state.media_type}
            url={this.state.url}
            title={this.state.title}
            dateApi={this.state.dateApi}
            explanation={this.state.explanation}
          />
        </div>
      </>
    );

  }

}

export default NasaContent;
