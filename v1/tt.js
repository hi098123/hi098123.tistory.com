(function(){
	var ptol=JSON.parse('{"/45":"random-number","/317":"roulette","/264":"lotto-6-45","/46":"password-generator","/284":"random-overwatch-aim","/393":"reaction-speed-test","/151":"invert-image-color","/132":"rgb-hex","/358":"color-picker","/389":"ico-converter","/391":"psd-to-png","/12":"qr-generator","/390":"qr-reader","/408":"face-blur","/226":"sprite-generator","/8":"count-text","/4":"case","/26":"punycode","/118":"codec","/169":"kor-eng","/173":"kor-abc","/373":"ocr","/394":"font-viewer","/5":"hash","/6":"hash","/156":"excel-pw","/388":"eml-reader","/155":"gcd-lcm","/409":"repeating-decimal","/392":"ip-calculator"}');
	if(ptol[location.pathname]){
		var el=document.createElement('div'),ref=document.querySelector('#tt-body-page div.article .titlegroup');
		el.innerHTML='<blockquote style="padding:12px 25px;background:#fafafa" data-ke-style="style3">광고 개수도 적고, 업데이트 된 툴을 사용하려면? <a href="https://t.hi098123.com/'+ptol[location.pathname]+'" target="_blank" rel="noopener">더 향상된 툴 이용하기</a></blockquote>';
		ref.parentElement.insertBefore(el,ref);
	}
	setTimeout(function(){if(document.querySelector('.uoc-count').textContent=='공감'){
		document.querySelector('.uoc-count').textContent='0'
	}},1000)
})();
