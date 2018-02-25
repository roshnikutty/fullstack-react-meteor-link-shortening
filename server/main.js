import { Links } from '../imports/collections/links';


Meteor.startup(() => {
    Meteor.publish('links', function(){
        return links.find({});
    })
});