import React,{Component} from 'react';

class PlaylistItem extends Component{
    render(){
        return(
                <td className="col-md-12">
                    <br/>
                    <div>
                        <div className="card">
                             <div className="card-body row"> 
                                <img className="col-md-4" onClick={()=>{this.props.getVideo(this.props.item.id.videoId)}} src={this.props.item.snippet.thumbnails.medium.url} alt="img"/>         
                                <div className="col-md-7">
                                    <h3>{this.props.item.snippet.title}</h3>
                                    <p>{this.props.item.snippet.description}</p>
                                    <p>Delete</p>
                                </div>
                                <div className="col-md-1">                                    
                                    <i onClick={()=>{this.props.removeVideo(this.props.item.id.videoId)}} className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                                </div>
                             </div>                    
                        </div>
                        <br/>                
                    </div>  
                </td>                       
        );
    }
}

export default PlaylistItem;