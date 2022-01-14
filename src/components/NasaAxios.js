
import axios from "axios";
import { Component } from "react";


class TestAxios extends Component {
    

    getMedia(){
        if (this.props.media_type === "video"){
            return(
                <iframe 
                className="video-nasa"                    
                    src={this.props.url}  
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>                        
                </iframe>
            );
        }
        if (this.props.media_type === "image"){
            return(
                
                    <img 
                        className="image-nasa"
                        src={this.props.url} 
                        alt ="photo-nasa"                    
                    />
                
            );
        }
        else {
            <p>... loading</p>
        }
        
    } 
    
    

    render(){

        
            return(
            <>
            
                <h1 className="title">{ this.props.title }</h1> 
                <div className="media-content">
                    {this.getMedia()}
                </div> 
                <div className="text-nasa"><p >{this.props.explanation}</p></div>
                
            
            

            </>
            
            )
        
    }


}

export default TestAxios;