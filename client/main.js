Meteor.startup(function() {
    reCAPTCHA.config({
        publickey: '6LeaORITAAAAAMWtbttBUJgsMt0rwcb9d5k1FUh0'
    });
});

Meteor.subscribe("userData");

Meteor.subscribe("posts");

Meteor.subscribe("activity");
