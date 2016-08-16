import React, { Component } from 'react';
import EqualizerConfig from './equalizerConfig';
import {Link} from 'react-router';

export default class Equalizer extends Component{
    constructor(props){
        super(props);

        this.state={};
        this.setName = this.setName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    setEQConfig(data,type){
        let equalizer = this.state;
        equalizer[type] = data;
        this.setState(equalizer);
         if(this.props.onChange) this.props.onChange(this.state);
    }
    setName(ev){
        let equalizer = this.state;
        equalizer.name = ev.target.value;
        this.setState(equalizer);
        if(this.props.onChange) this.props.onChange(this.state);
    }
    onSubmit(ev){
        ev.preventDefault();
        if(this.props.onSave) this.props.onSave();
    }
    render(){
        let high = this.props.equalizer ? this.props.equalizer.high : {};
        if(!high) high = {};
        let low = this.props.equalizer ? this.props.equalizer.low : {};
        if(!low) low = {};
        const name = this.props.equalizer ? this.props.equalizer.name : "";
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
