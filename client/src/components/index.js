import React, { Component } from 'react';
import {getEQs,getComps} from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Index extends Component {
    componentWillMount(){
        this.props.getEQs();
        this.props.getComps();
    }
    printEQs(){
        return this.props.eqs.map( (eq) => {
            return(
                <li key={eq._id} className="list-group-item">
                    <Link to={"/equalizer/" + eq._id} className="clearfix">
                        <span>{eq.name}</span> 
                        <button type="button" className="btn btn-default pull-right">Edit</button>
                    </Link>
                </li>
            )
        });
    }
    printComps(){
        return this.props.compressors.map( (comp) => {
            return(
                <li key={comp._id} className="list-group-item">
                    <Link to={"/compressor/" + comp._id} className="clearfix">
                        <span>{comp.name}</span> 
                        <button type="button" className="btn btn-default pull-right">Edit</button>
                    </Link>
                </li>
            )
        });
    }
    render() {
        return (
        <div>
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <h3 className="panel-title">Equalizers <Link to={"/equalizer/new"} className="pull-right">
                         <button type="button" className="btn btn-default pull-right">New</button>
                    </Link></h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.printEQs()}
                    </ul>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <h3 className="panel-title">Compressors <Link to={"/compressor/new"} className="pull-right">
                         <button type="button" className="btn btn-default">New</button>
                    </Link></h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.printComps()}
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {eqs:state.equalizers.all,compressors:state.compressors.all};
}

export default connect(mapStateToProps,{getEQs,getComps})(Index);