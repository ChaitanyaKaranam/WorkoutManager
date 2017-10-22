import React,{Component} from 'react';
import SearchListItem from './search-list-item';

class SearchList extends Component{   

    constructor(props){
        super(props);          
    }

    getSearchListItem(){
        return(
            this.props.arr.map((val)=>{
                return <SearchListItem addVideo={this.props.addVideo} key={val.snippet.description} onSearchClick={this.props.onSearchClick} data={val}/>
            })
        )
    }
     
    render(){
        return(
            <div>
                {this.getSearchListItem()}
            </div>    
        );
    }
}

export default SearchList;

