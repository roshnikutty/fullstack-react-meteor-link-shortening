import { Links } from '../imports/collections/links';
import { WebApps } from 'meteor/webapp';
import ConnectRoute from 'connect-route';  //inspect url and can be instructed to do diff. things


Meteor.startup(() => {
    Meteor.publish('links', function () {
        return Links.find({});
    });
});

//Executed whenever user visits a route like localhost:3000/abcd
function onRoute(req, res, next) {
    const link = Links.findOne({ token: req.params.token });
    if (link) {
        //send response code 307 for redirect and
        // assign Location with the long url found
        Links.update(link, {$inc: {clicks: 1}}); //check mongo docs on Mongo modifier- increment click by 1
        res.writeHead(307, { 'Location': link.url });
        res.end();
    }
    else {
        //let next middleware if it exists handle the request else it moves on to the React app
        next();
    }
}

//ConnectRoute creates a middleware that takes incoming http request and checks 
//if it has /anything format and executes the callback

const middleware = ConnectRoute(function (router) {
    router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);