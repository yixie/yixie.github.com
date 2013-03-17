var menu_config = {
	"index" : ["伊邪的维基站点", "欢迎来到伊邪的维基站点。本站点由<a href='http://www.github.com'>Github Pages</a>托管，所有页面采用<a href='https://code.google.com/p/vimwiki/'>Vimwiki</a>纯手工编写。力求简单高效，记录生活点滴，技术心得。"],
	"major" : ["程序员的自我修养", "技术学无止境"],
	"ideas" : ["Ideas worth spreading.", "记录生活点滴，捕捉灵感瞬间"],
	"movie" : ["电影狂人的自白", "好电影是需要共享的"],
	"album" : ["我的影像世界", "用照片记录生活"],
	"diary" : ["博观而约取，厚积而薄发", "每天的沉淀就是日后最大的财富"],
};

var onPageLoad = function() {
	var path = location.href.split(".html")[0];
	var urls = path.split("/");
	var name = "index";
	if(location.href.indexOf(".html") > 0) {
		name = urls[urls.length - 1];
	}
	
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
		var html = "<h1 id='logo-text'><a href='#'>" + title + "</a></h1><p id='intro'>" + intro + "</p>";
		banner.innerHTML = html;
		banner.style.display = "block";
	} else {
		banner.style.display = "none";
	}
	
	try {
	  TagCanvas.Start('myCanvas','tags',{
		textColour: '#ff0000',
		outlineColour: '#ff00ff',
		reverse: true,
		depth: 0.8,
		maxSpeed: 0.05
	  });
	} catch(e) {
	  document.getElementById('myCanvasContainer').style.display = 'none';
	}
};
