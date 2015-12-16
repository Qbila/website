Template.dashboardListingUnit.helpers({
  posts : function() {
    return Posts.find();
  },
  supports: function() {
    return Supports.find({'postId': this._id});
  },
  isSupporting: function() {
    var hasSupportedAlready = Supports.findOne({postId : this._id, supporters: {$in: ["ashish"]}} );
    return !!hasSupportedAlready;
  }
});

Template.dashboardListingUnit.events = {
  'click .d-engagement .d-expressions': function(event) {
    $("#expressModal").attr('data-postId', this._id);
    $("#expressModal").modal();
  },

  'click .d-engagement .d-upVote': function(event) {
    var hasSupportedAlready = Supports.findOne({postId : this._id, supporters: {$in: ["ashish"]}} );

    // if result is not undefined
    if (!!hasSupportedAlready) {
      //console.log(hasSupportedAlready);
      Supports.update( { _id : hasSupportedAlready._id }, {$pull : { supporters: { $in: ["ashish"] } } } );
    } else {
      var postIsLikedBySomeone = Supports.findOne( { postId : this._id} );

      if( !!postIsLikedBySomeone ) {
        // update
        Supports.update(
          { _id : postIsLikedBySomeone._id },
          { $push : { supporters: "ashish" } }
        );

      } else {
        Supports.insert({
          postId: this._id,
          supporters: [
            'ashish'
          ]
        });
      }
    }
  }
};
