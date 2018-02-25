import React, { Component } from 'react';

class LinkForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.refs.userInpval.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input className="form-control" 
                        ref="userInpval"/>
                </div>
                <button className="btn btn-primary">Shorten link</button>
            </form>
        );
    }
}

export default LinkForm;