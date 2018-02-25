import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

//executes on both client and server. When it executes on server, only then data 
//persistence will occur
Meteor.methods({
    'links.insert': function(url){
        // validUrl.isUrl(url) returns url if valid; undefined if invalid
        //check does not give any message if all is fine, else throws a JS error in console
        //this error if it exists shows in Meteor.call of client/components/LinkForm callback 
        check(url, Match.Where(url => validUrl.isUri(url)));
        const token = Math.random().toString(36).slice(-5); 
        Links.insert({
            url: url, 
            token: token, 
            clicks: 0}
        )
    }
});

export const Links = new Mongo.Collection('links'); 
