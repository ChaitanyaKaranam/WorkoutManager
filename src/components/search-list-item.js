import React, {Component} from 'react';

class SearchListItem extends Component{    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <div className="card">  
                    <img onClick={()=>{this.props.onSearchClick(this.props.data.id.videoId)}} className="card-img-top" src={this.props.data.snippet.thumbnails.medium.url} alt="img"/>
                    <div className="card-body">          
                        <p>{this.props.data.snippet.title}</p>                        
                        <button onClick={()=>{this.props.addVideo(this.props.data)}} className="btn btn-dark btn-block">Add</button>
                    </div>                  
                </div>
                <br/>                
            </div>    
        );
    }
}

export default SearchListItem;