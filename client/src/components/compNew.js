import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { createComp, addMessage } from '../actions/index';
import {Link} from 'react-router';
import Compressor from './compressor';

class compNew extends Component {
    constructor(props){
        super(props);

        this.state={
            name:""
        };
        this.onChange=this.onChange.bind(this);
        this.create=this.create.bind(this);
    }
    onChange(data){
        var newState = {...this.state, ...data};
        this.setState(newState);
    }
    create(){
        this.props.createComp(this.state).then((response) => {
            if(response.error) return;
            this.props.addMessage({
                type:'success',
                message:'Compressor created'
            });
            this.setState({
                name:"",
                low:{},
                high:{}
            });
        });
    }
    render(){
        return(
            <div>
                <div className="container">
                    <h2>New Compressor</h2>
                    <Link to="/">Back</Link>
                </div>
                <Compressor compressor={this.state} onChange={this.onChange} onSave={this.create}/>
            </div>
        );
    }
}

export default connect(null,{createComp,addMessage})(compNew);