import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { createComp, addMessage } from '../actions/index';
import {Link} from 'react-router';
import Compressor from './compressor';

class compNew extends Component {
    static contextTypes = {
        router:PropTypes.object
    };
    constructor(props){
        super(props);

        this.state={};
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
            this.context.router.push('/');
        });
    }
    render(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <h3 className="panel-title">
                        <span>New Compressor</span>
                    </h3>
                </div>
                <div className="panel-body">
                    <Link to="/">Back</Link>
                    <Compressor compressor={this.state} onChange={this.onChange} onSave={this.update}/>
                </div>
            </div>
        );
    }
}

export default connect(null,{createComp,addMessage})(compNew);