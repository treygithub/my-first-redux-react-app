import React, {componenet} from 'react';
import {connect} from 'react-redux';

function Componenet2(props){
    console.log(props);
    return(
        <div>
            <h1>info coming from redux reducer</h1>
            <div className="container-fluid">
                <div className="row">
                <h2 className="col-sm-4">{props.userName}</h2>
                <h2 className="col-sm-4">{props.password}</h2>
                <h2 className="col-sm-4">{props.id}</h2>
                </div>
            </div>
            <br />
            <hr />
            <br />
        </div>
    );
}

const mapStateToProps = state => state;
export default connect( mapStateToProps )( Componenet2 )