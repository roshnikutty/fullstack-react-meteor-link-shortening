import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Links } from '../../imports/collections/links'

class LinkList extends Component {
    renderRows() {
        return this.props.links.map(link => {
            const shortLink = `http://localhost:3000/${link.token}`
            return (
                <tr key={link.token}>
                    <td>{link.url}</td>
                    <td>
                        <a href={shortLink}>{shortLink}</a>
                    </td>
                    <td>{link.clicks}</td>
                </tr>
            )
        })
    }
    render() {
        return (<table className='table'>
            <thead>
                <tr>
                    <th>URL</th>
                    <th>Address</th>
                    <th>Clicks</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
        </table>);
    }
}

export default withTracker(() => {
    Meteor.subscribe('list');
    return {
        links: Links.find({}).fetch()
    }
})(LinkList);