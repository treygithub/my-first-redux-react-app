import React, { Component } from 'react';
import { connect } from 'react-redux';
import Component2 from './Component2';
import { updateUsername, updatePassword, updateId } from "../ducks/reducer";

class Component1 extends Component{
    constructor(){
        super();
        this.state={
            userName:'Trey',
            password:'xXxXx',
            id:'0'
        }

    }

inputChangeN(value){
    this.setState({ userName: value });
}
inputChangeP(value){
    this.setState({ password: value });
}
inputChangeI(value){
    this.setState({ id: value });
}

sendToReducer(){
    let { updateId, updatePassword, updateUsername } = this.props;
    updateId(this.state.id);
    updatePassword(this.state.password);
    updateUsername(this.state.userName);
}

clearAll(){
    this.setState({
        userName:'',
        password:'',
        id:''
    });
}


render(){
    return(
        <div>
            <Component2 />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                    <h3>name</h3>
                    <input value={this.state.userName}  placeholder="enter screen name" type="text" onChange={e =>this.inputChangeN(e.target.value)}/>
                    </div>
                    <div className="col-sm-4">
                    <h3>password</h3>
                    <input value={this.state.password} placeholder="enter password" type="text" onChange={e =>this.inputChangeP(e.target.value)}/>
                    </div>
                    <div className="col-sm-4">
                    <h3>id</h3>
                    <input value={this.state.id} placeholder="enter id" type="text" onChange={e =>this.inputChangeI(e.target.value)}/>
                    </div>
                    
                    <div className="container">
                    <br />
                    <hr />
                    <br />
                    <button className="btn btn-primary" onClick={()=>this.sendToReducer()}>Update</button>
                    <button className="btn btn-primary" onClick={()=>this.clearAll()}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

}

const mapStateToProps = state => state;

export default connect( mapStateToProps, { updateUsername, updatePassword, updateId }) (Component1);
