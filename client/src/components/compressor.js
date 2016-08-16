import React, { Component } from 'react';
import EqualizerConfig from './equalizerConfig';
import {Link} from 'react-router';

export default class Equalizer extends Component{
    constructor(props){
        super(props);

        this.setValue = this.setValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    setValue(ev){
        let { compressor } = this.props;
        compressor[ev.target.name]= ev.target.value;
        if(this.props.onChange) this.props.onChange(compressor);
    }
    onSubmit(ev){
        ev.preventDefault();
        if(this.props.onSave) this.props.onSave();
    }
    render(){
        let { compressor } = this.props;
        if(!compressor) compressor = {};
        return(
            <form className="equalizer form-horizontal" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" required="required" className="form-control" name="name" placeholder="Name" onChange={this.setValue} value={compressor.name}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Attack (ms)</label>
                    <div className="col-sm-10">
                        <input type="number" name="attack" className="form-control" min="0" onChange={this.setValue} value={compressor.attack}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Release (ms)</label>
                    <div className="col-sm-10">
                        <input type="number" name="release" className="form-control" min="0" onChange={this.setValue} value={compressor.release}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Ratio</label>
                    <div className="col-sm-10">
                        <input type="text" name="ratio" pattern="^[0-9]+:[0-9]+$" className="form-control" onChange={this.setValue} value={compressor.ratio}/>
                    </div>
                </div>
                 <div className="form-group">
                    <label className="col-sm-2 control-label">Presence (dB)</label>
                    <div className="col-sm-10">
                        <input type="number" name="presence" className="form-control" onChange={this.setValue} value={compressor.presence}/>
                    </div>
                </div>
                 <div className="form-group">
                    <label className="col-sm-2 control-label">Make up (dB)</label>
                    <div className="col-sm-10">
                        <input type="number" name="makeUp" className="form-control" onChange={this.setValue} value={compressor.makeup}/>
                    </div>
                </div>
                <div className="form-group buttons">
                    <button type="submit" className="btn btn-default save">Save</button>
                    <Link to="/">
                        <button type="button" className="btn btn-danger">Cancel</button>
                    </Link>
                </div>
            </form>
        );
    };
}
