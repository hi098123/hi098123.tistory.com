function IG_hi098123(){try{document.getElementsByClassName(atob("YnRuX3Bvc3QgdW9jLWljb24="))[0].click(),setTimeout(function(t){var e=document.getElementsByClassName(atob("dHh0X2xpa2UgdW9jLWNvdW50"))[0].innerHTML;"none"==document.getElementsByClassName(atob("dHh0X2xpa2UgdW9jLWNvdW50"))[0].style.display&&(e-=1),e<0&&(e="0"),document.getElementById(atob("UG9zdGlzZ29vZA==")).innerHTML=atob("PGkgY2xhc3M9InhpLXRodW1icy11cCI+PC9pPiA=")+e;var o=document.getElementById(atob("UG9zdGlzZ29vZA=="));null==document.getElementsByClassName("uoc-icon empathy_up_without_ani")[0]?(o.style.backgroundColor="",o.style.color=""):(o.style.backgroundColor=atob("IzRDQUY1MA=="),o.style.color=atob("I2ZmZg=="))},200)}catch(e){}}"tt-body-page"==document.body.id&&setTimeout(function(t){var e=document.getElementsByClassName(atob("dHh0X2xpa2UgdW9jLWNvdW50"))[0].innerHTML;""==e&&(e="0");var o=document.createElement("div");o.id="PostGood",o.innerHTML='<span id="'+atob("UG9zdGlzZ29vZA==")+'">'+atob("PGkgY2xhc3M9InhpLXRodW1icy11cCI+PC9pPiA=")+e+"</span>",document.getElementsByClassName("container_postbtn")[0].appendChild(o);var n=document.getElementById(atob("UG9zdGlzZ29vZA=="));null!=document.getElementsByClassName("uoc-icon empathy_up_without_ani")[0]&&(n.style.backgroundColor=atob("IzRDQUY1MA=="),n.style.color=atob("I2ZmZg==")),n.addEventListener?n.addEventListener("click",function(t){IG_hi098123()}):n.attachEvent&&n.attachEvent("onclick",function(t){IG_hi098123()}),delete e},1000);
try{
	if(T.config.USER.homepage!=null){gtag('set', {'user_id': String(T.config.USER.homepage)});}
}catch(e){}
/*hi098123_tracker(function() {
	try{
					gtag('event', '애드센스', {
						'event_category' : '애드센스',
						'event_action' :String(window.location.href),
						'event_label':String(T.config.USER.homepage)
					});
	}catch(e){}
});*/
(function(){
	for(var i=0,a=document.querySelectorAll(".categorylink, .another_category a");i<a.length;i++){
			a[i].href=a[i].href.replace(/(\?category=[0-9]+)/, '');
	}
	if(location.pathname.split("/")[1]=="search"){
		if(document.querySelector(".inner").innerText==""){
			document.title='"'+decodeURIComponent(location.search.split("q=")[1].split("&")[0])+'"의 검색결과';
			document.querySelector(".inner").innerHTML='<h2>블로그 내 검색결과 0개</h2><p>원하는 검색결과가 없다면? 아래의 구글 검색기능을 이용해보세요</p><div class="gcse-searchbox"></div><div class="gcse-searchresults"></div>';
			var s=document.createElement("script");
			s.src="https://cse.google.com/cse.js?cx=partner-pub-2722856117249943:0pxfc_of1ya";
			document.querySelector(".inner").appendChild(s);
		}
	}
	if(document.querySelector('.comments').offsetTop<document.body.scrollTop+document.querySelector('html').scrollTop+window.innerHeight){
		_commentload();
	}else{
		document.addEventListener('scroll', function(e) {
			if(document.querySelector('.comments').offsetTop<document.body.scrollTop+document.querySelector('html').scrollTop+window.innerHeight){
				document.removeEventListener("scroll", arguments.callee, false);
				_commentload();
			}
		});
	}
})();
function _Search(){
	try{
		var svalue=encodeURIComponent(document.querySelector(".mainsearch input").value);
		window.location.href='/search/'+svalue+'?q='+svalue;
		document.querySelector(".mainsearch input").value='';
	}catch(e){}
}
function rplc_(str,s,j) {return str.split(s).join(j);}

var whitelist=["hi098123.tistory.com","notice.tistory.com","www.mozilla.org"];
function _commentload(){
	/*옵션을 설정하세요*/
	var bool_=window.T.config.ROLE!="owner"?1:0;
	var rep_name=document.querySelectorAll('.rp_rep_name');
	var nickname=document.querySelectorAll('.nickname');
	for (var i = 0; i < rep_name.length; i++) {
		nickname[i].innerHTML=rep_name[i].innerText;
		if(bool_){nickname[i].innerHTML=nickname[i].innerText;}
	}

	var imgload=document.querySelectorAll('.author-meta img');
	for (var i = 0; i < imgload.length; i++) {
		imgload[i].style.backgroundImage='url("'+imgload[i].getAttribute('logo')+'")';
	}
	(function() {
    	var newTab=false; // 새 탭으로열기 true, false
        var comm=document.querySelectorAll(".comm-con>p");//이곳에 " " 는 댓글 내용이 담기는 태그를 CSS selector로 지정
        
        function urlfy(t,n){return t.replace(RegExp("(https?:\\\/\\\/"+n.join("\\\/?[^\\\s<\\\"']+)|(https?:\\\/\\\/")+"\\\/?[^\\\s<\\\"']+)","g"),function(t){return '<a href="'+t+'" target="'+(newTab?"_blank":"_self")+'">'+t+"</a>"})}
        if(comm.length>0){
            for (var i = 0; i < comm.length; i++) {
                comm[i].innerHTML=urlfy(comm[i].innerText,whitelist).split("\n").join("<br>");
            }
        }
    })();
}