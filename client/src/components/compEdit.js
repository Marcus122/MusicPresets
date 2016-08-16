import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { getComp, updateComp, addMessage, deleteComp } from '../actions/index';
import {Link} from 'react-router';
import Compressor from './compressor';

class editComp extends Component {
    static contextTypes = {
        router:PropTypes.object
    };
    constructor(props){
        super(props);
        this.state=this.props.eq;
        this.onChange=this.onChange.bind(this);
        this.update=this.update.bind(this);
        this.onDelete=this.onDelete.bind(this);
    }
    componentWillMount(){
        this.props.getComp(this.props.params.id);
    }
    componentWillReceiveProps(nextProps){
        this.state = nextProps.compressor;
    }
    onChange(data){
        var newState = {...this.state, ...data};
        this.setState(newState);
    }
    onDelete(){
        this.props.deleteComp(this.state._id).then((response) => {
            if(response.error) return;
            this.props.addMessage({
                type:'success',
                message:'Compressor deleted'
            });
            this.context.router.push('/');
        });
    }
    update(){
        this.props.updateComp(this.state).then((response) => {
            if(response.error) return;
            this.props.addMessage({
                type:'success',
                message:'Compressor updated'
            });
        });
    }
    render(){

        if(!this.props.compressor){
            return <div/>
        }

        return(
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <h3 className="panel-title">
                    <span>Edit Compressor</span>
                    <button 
                            className="btn btn-danger pull-right delete" 
                            onClick={this.onDelete}>Delete Compressor</button>
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

function mapStateToProps(state){
    return {compressor:state.compressors.selected};
}

export default connect(mapStateToProps, {getComp,updateComp,deleteComp,addMessage})(editComp);