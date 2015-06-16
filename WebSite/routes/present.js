
/*
 * GET users listing.
 */

exports.present = function(req, res){
  res.render('present', { title: 'Present Site' });
};