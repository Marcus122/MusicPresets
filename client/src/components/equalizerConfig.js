import React, { Component } from 'react';

export default class EqualizerConfig extends Component{
    static defaultProps = {
        data:{
            mid:{}
        }
    }
    constructor(props){
        super(props);

        this.setBand = this.setBand.bind(this);
        this.setValue = this.setValue.bind(this);
        this.setMidValue = this.setMidValue.bind(this);
        this.setMidBand = this.setMidBand.bind(this);
    }
    setBand(ev){
        let config = this.props.data;
        config.band = ev.target.checked;
        if(this.props.onChange) this.props.onChange(config);
    }
    setMidBand(ev){
        let config = this.props.data;
        config.mid.band = ev.target.checked;
        if(this.props.onChange) this.props.onChange(config);
    }
    setValue(ev){
        let config = this.props.data;
        config[ev.target.name] = ev.target.value;
        if(this.props.onChange) this.props.onChange(config);
    }
    setMidValue(ev){
        let config = this.props.data;
        config.mid[ev.target.name] = ev.target.value;
        if(this.props.onChange) this.props.onChange(config);
    }
    render(){
        return(
            <div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Band</label>
                    <div className="col-sm-10">
                        <input type="checkbox" checked={this.props.data.band} onChange={this.setBand}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Peak/Shelf</label>
                    <div className="col-sm-10">
                        <select className="form-control" name="peakShelf" onChange={this.setValue} defaultValue={this.props.data.peakShelf} onChange={this.setValue}>
                            <option value=""/>
                            <option value="peak">Peak</option>
                            <option value="shelf">Shelf</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Freq (Hz)</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name="freq" value={this.props.data.freq} onChange={this.setValue}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Gain</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name="gain" value={this.props.data.gain} onChange={this.setValue}/>
                    </div>
                </div>
                <h4>Mid</h4>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Band</label>
                    <div className="col-sm-10">
                        <input type="checkbox" checked={this.props.data.mid.band} onChange={this.setMidBand}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Q</label>
                    <div className="col-sm-10">
                        <select className="form-control" name="q" onChange={this.setMidValue} defaultValue={this.props.data.mid.q}>
                            <option value=""/>
                            <option value="hi">Hi</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Freq (Hz)</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name="freq" value={this.props.data.mid.freq} onChange={this.setMidValue}/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Gain</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name="gain" value={this.props.data.mid.gain} onChange={this.setMidValue}/>
                    </div>
                </div>
            </div>
        );
    };
}