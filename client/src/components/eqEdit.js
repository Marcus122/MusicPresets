import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { getEQ, updateEQ, addMessage, deleteEQ } from '../actions/index';
import {Link} from 'react-router';
import Equalizer from './equalizer';

class EQEdit extends Component {
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
        this.props.getEQ(this.props.params.id);
    }
    componentWillReceiveProps(nextProps){
        this.state = nextProps.eq;
    }
    onChange(data){
        var newState = {...this.state, ...data};
        this.setState(newState);
    }
    onDelete(){
        this.props.deleteEQ(this.state._id).then((response) => {
            if(response.error) return;
            this.props.addMessage({
                type:'success',
                message:'EQ deleted'
            });
            this.context.router.push('/');
        });
    }
    update(){
        this.props.updateEQ(this.state).then((response) => {
            if(response.error) return;
            this.props.addMessage({
                type:'success',
                message:'EQ updated'
            });
        });
    }
    render(){
         //const {eq} = this.props;

        if(!this.props.eq){
            return <div/>
        }

        return(
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <h3 className="panel-title">
                        <span>Edit Equalizer</span>
                        <button 
                            className="btn btn-danger pull-right delete" 
                            onClick={this.onDelete}>Delete EQ</button>
                    </h3>
                </div>
                <div className="panel-body">
                    <Link to="/">Back</Link>
                    <Equalizer equalizer={this.state} onChange={this.onChange} onSave={this.update}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {eq:state.equalizers.selected};
}

export default connect(mapStateToProps, {getEQ,updateEQ,deleteEQ,addMessage})(EQEdit);