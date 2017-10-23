import React,{Component} from 'react';
import PlaylistItem from './playlist-item';
import YSearch from 'youtube-api-search';

const API_KEY='';

class Playlist extends Component{

    constructor(props){
        super(props);
    }

    getPlaylist(arr){
        return (
            arr.map((val)=>{
                return <PlaylistItem getVideo={this.props.getVideo} removeVideo={this.props.removeVideo} key={val.snippet.description} item={val}/>
            })
        )
    }
    
    render(){
        return(
            <tr className="row">
                {this.getPlaylist(this.props.playlistArray)}
            </tr>
            
        );
    }
}

export default Playlist;
