
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.present = function(req, res){
	  res.render('present', { title: 'Present Site', viewNum : '1' });
};

exports.present2 = function(req, res){
	  res.render('present2', { title: 'Present Site', viewNum :'2' });
};

exports.scroll = function (req, res){
	 res.render("scroll/scroll",{title:"프리젠테이션 사이트"});
}