/**
  NOT USING var :
  --------------
  var keyword limits the scope of the object to the current file.
  we want to make the collection available to the whole app, hence ommiting the
  var keyword.
*/

Comments = new Mongo.Collection('comments');
