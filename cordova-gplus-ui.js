if (Meteor.isClient) {
  Meteor.startup(function() {
    window.gSignIn.config({
      errorHandler: function(err) {
        if (err)
          alert(err);
      }
    });
  });

  Template.hello.events({
    'click button': function() {
      // increment the counter when button is clicked

    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
