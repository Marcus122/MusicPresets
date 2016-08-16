import React, { Component } from 'react';
import EqualizerConfig from './equalizerConfig';
import {Link} from 'react-router';

export default class Equalizer extends Component{
    static defaultProps = {
        equalizer:{
            high:{
                mid:{}
            },
            low:{
                 mid:{}
            },
            name:""
        }
    }
    constructor(props){
        super(props);

        this.setName = this.setName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    setEQConfig(data,type){
        let { equalizer } = this.props;
        equalizer[type] = data;
        if(this.props.onChange) this.props.onChange(equalizer);
    }
    setName(ev){
        let { equalizer } = this.props;
        equalizer.name = ev.target.value;
        if(this.props.onChange) this.props.onChange(equalizer);
    }
    onSubmit(ev){
        ev.preventDefault();
        if(this.props.onSave) this.props.onSave();
    }
    render(){
        const {high, low ,name } = this.props.equalizer;
        return(
            <form className="equalizer form-horizontal" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" required="required" className="form-control" placeholder="Name" onChange={this.setName} value={name}/>
                    </div>
                </div>
                <h3>Low</h3>
                <EqualizerConfig data={low} onChange={data => this.setEQConfig(data,'low')}/>

                <h3>High</h3>
                <EqualizerConfig data={high} onChange={data => this.setEQConfig(data,'high')}/>
                <div className="form-group">
                    <button type="submit" className="btn btn-default save">Save</button>
                    <Link to="/">
                        <button type="button" className="btn btn-danger">Cancel</button>
                    </Link>
                </div>
            </form>
        );
    };
}
