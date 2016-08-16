import React,{Component} from 'react';
import { connect } from 'react-redux';
import {clearMessage} from '../actions/index';

class Messages extends Component{
    determineClassName(){
        if(!this.props.message) return;
        switch(this.props.message.type){
            case 'error':
                return 'alert alert-danger';
            case 'success':
                return 'alert alert-success';
            case 'info':
                return 'alert alert-info';
            case 'warning':
                return 'alert alert-warning';
        }
        return 'alert';
    }
    render(){
        if(!this.props.message) return <div/>
        return(
            <div className={this.determineClassName()} role="alert">
                {this.props.message.message}
                <button onClick={this.props.clearMessage} type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
        );
    };
}

function mapStateToProps(state){
    return {message:state.messages}
}

export default connect(mapStateToProps,{clearMessage})(Messages);