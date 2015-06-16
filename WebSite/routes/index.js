
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.present = function(req, res){
	  res.render('present', { title: 'Present Site' });
};