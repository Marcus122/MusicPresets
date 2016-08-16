import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { createEQ, addMessage } from '../actions/index';
import {Link} from 'react-router';
import Equalizer from './equalizer';

class EQEdit extends Component {
    constructor(props){
        super(props);

        this.state={
            name:"",
            low:{},
            high:{}
        };
        this.onChange=this.onChange.bind(this);
        this.create=this.create.bind(this);
    }
    onChange(data){
        var newState = {...this.state, ...data};
        this.setState(newState);
    }
    create(){
        this.props.createEQ(this.state).then((response) => {
            if(response.error) return;
            this.props.addMessage({
                type:'success',
                message:'EQ created'
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
                    <h2>New Equalizer</h2>
                    <Link to="/">Back</Link>
                </div>
                <Equalizer equalizer={this.state} onChange={this.onChange} onSave={this.create}/>
            </div>
        );
    }
}

export default connect(null,{createEQ,addMessage})(EQEdit);