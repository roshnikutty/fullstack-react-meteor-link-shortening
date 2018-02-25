import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'links.insert': function(url){
        console.log('attempting to save', url);
    }
})

export const Links = new Mongo.Collection('links'); 
