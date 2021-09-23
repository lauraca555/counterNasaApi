
import { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      300000
    );
    console.log("vérification de la liste de message")
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    }

  tick() {
    this.setState({
      date: new Date()
    });
  }

 render(){
    return(
    <div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  );  
  
 }
 
}


  






export default App;
