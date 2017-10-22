import React, {Component} from 'react';
import YSearch from 'youtube-api-search';
import SearchList from './search-list';

const API_KEY='AIzaSyBOeNp4te2MqduGcYWjIveCAMuvvzPtpKo';

class WorkoutSearch extends Component{
    
   constructor(props){
       super(props);
       this.state={
           term:'Workout',
           arr:[]
       }
       
       YSearch({key:API_KEY,term:this.state.term},(res)=>{
        this.setState({arr:res});
        console.log(this.state.arr);
        });

       this.getSearchTerm=this.getSearchTerm.bind(this);

   }

    getSearchTerm(event){
        this.setState({term:'workout'+event.target.value});
        YSearch({key:API_KEY,term:this.state.term},(res)=>{
            this.setState({arr:res});
       });
    }
    
    render(){
        return(
            <div>
                <input onChange={this.getSearchTerm} className="form-control" type="text" placeholder="search"/>
                <br/>
                <div style={{overflowY:'auto',height:400}}>
                    <SearchList addVideo={this.props.addVideo} onSearchClick={this.props.onSearchClick} arr={this.state.arr}/>
                </div>
            </div>
        );
    }
}

export default WorkoutSearch;