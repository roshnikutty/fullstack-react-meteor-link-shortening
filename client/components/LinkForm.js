import React, { Component } from 'react';

class LinkForm extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input className="form-control" />
                </div>
                <button className="btn btn-primary">Shorten link</button>
            </form>
        );
    }
}

export default LinkForm;