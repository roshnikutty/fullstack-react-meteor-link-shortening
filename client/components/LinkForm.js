import React, { Component } from 'react';

class LinkForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.refs.userInpval.value);
        Meteor.call('links.insert', this.refs.userInpval.value, (error)=> {
            if(error) {
                this.setState({error: "Please enter a valid url"})
            } else {
                this.setState({error: ''});
                this.refs.userInpval.value = ''
            }
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input className="form-control" 
                        ref="userInpval"/>
                </div>
                <div className='text-danger'>{this.state.error}</div>
                <button className="btn btn-primary">Shorten link</button>
            </form>
        );
    }
}

export default LinkForm;