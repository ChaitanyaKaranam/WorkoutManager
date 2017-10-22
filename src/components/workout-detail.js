import React,{Component} from 'react';
import WorkoutSearch from './workout-detail-search';
import Playlist from './playlist';

class WorkoutDetail extends Component{
    
    constructor(props){
        super(props);
        this.state={
            videoId:'GGP3NbP7O2w',
            playlistArray:[]
        };
        this.getVideo=this.getVideo.bind(this);
        this.addVideo=this.addVideo.bind(this);  
        this.removeVideo=this.removeVideo.bind(this);  

    }  
    
    getVideo(data){
        this.setState({videoId:data});
    }

    addVideo(data){
        var arr=this.state.playlistArray;
        arr.push(data);
        this.setState({playlistArray:arr});
        console.log(this.state.playlistArray);
    }

    removeVideo(data){
        var arr=this.state.playlistArray;
        var nArr=arr.filter(val=> val.id.videoId!==data);
        this.setState({playlistArray:nArr});
    }
    
    render(){

        return(

            <div className="container" style={{backgroundColor:'black'}}>
                <table className="table">
                    <tbody>
                        <tr className="row">
                            <td className="col-md-9">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.state.videoId}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
                                </div> 
                            </td>
                            <td className="col-md-3">
                                <WorkoutSearch addVideo={(data)=>{this.addVideo(data)}} onSearchClick={(data)=>{this.getVideo(data)}}/>
                            </td>                        
                        </tr>
                        <Playlist getVideo={(data)=>{this.getVideo(data)}} removeVideo={(data)=>{this.removeVideo(data)}} playlistArray={this.state.playlistArray}/>     
                    </tbody>    
                </table>    
            </div>  
        );
    }
}

export default WorkoutDetail;