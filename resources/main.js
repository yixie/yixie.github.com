var menu_config = {
	"index" : ["良锋的维基站点", "欢迎来到良锋的维基站点。本站点由<a href='http://www.github.com'>Github Pages</a>托管，采用<a href='https://code.google.com/p/vimwiki/'>Vimwiki</a>纯手工编写。力求简单高效，记录生活点滴，技术心得。"],
	"movie" : ["movie", "movie"]
};

var onPageLoad = function() {
	var path = location.href.split(".html")[0];
	var urls = path.split("/");
	var name = urls[urls.length - 1];
	
	var nav = document.getElementById("nav");
	var lis = nav.getElementsByTagName("li");
	for(var i = 0; i < lis.length; i++) {
		lis[i].className = "";
	}
	var current = document.getElementById("nav_" + name);
	current.className = "current";
	
	if(menu_config[name]) {
		var title = menu_config[name][0];
		var intro = menu_config[name][1];
		
		var banner = document.getElementById("banner");
		var html = "<h1 id='logo-text'><a href='index.html'>" + title + "</a></h1><p id='intro'>" + intro + "</p>";
		banner.innerHTML = html;
		banner.style.display = "block";
	}
};
