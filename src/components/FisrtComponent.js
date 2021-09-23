const { Component } = require("react");

class FirstComponent extends Component{

    

    render() {
        return (
          <div>
            Hello {this.props.name}
          </div>
        );
      }
    
}