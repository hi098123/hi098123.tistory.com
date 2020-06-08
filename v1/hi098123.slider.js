var slider = [];
var isDown = false;
for (var i = 0; i < document.getElementsByClassName('menualldiv').length; i++) {
	(function(i){
		var startX;
		var scrollLeft;
		slider[i]=document.getElementsByClassName('menualldiv')[i];
		slider[i].addEventListener('mousedown', function(e) {
			isDown = true;
			startX = e.pageX - slider[i].offsetLeft;
			scrollLeft = slider[i].scrollLeft;
		});
		slider[i].addEventListener('mouseleave', function(e) {
			isDown = false;
		});
		slider[i].addEventListener('mouseup', function(e) {
			isDown = false;
		});
		slider[i].addEventListener('mousemove', function(e){
			if(!isDown) return;
			const x = e.pageX - slider[i].offsetLeft;
			const walk = (x - startX) ;
			slider[i].scrollLeft = scrollLeft - walk;
		},{passive: true});
		slider[i].addEventListener('touchstart', function(e){
			var touchLocation = e.targetTouches[0];
			isDown = true;
			startX = touchLocation.pageX - slider[i].offsetLeft;
			scrollLeft = slider[i].scrollLeft;
		},{passive: true});
		slider[i].addEventListener('touchmove', function(e) {
			if(!isDown) return;
			var touchLocation = e.targetTouches[0];
			e.preventDefault();
			const x = touchLocation.pageX - slider[i].offsetLeft;
			const walk = (x - startX) ;
			slider[i].scrollLeft = scrollLeft - walk;
		})
		slider[i].addEventListener('touchend', function(e) {
			isDown = false;
		})
	})(i);
}
var i=document.getElementsByClassName('menualldiv').length;
var isDown2 = false;
var startX2;
var scrollLeft2;
slider[i]=document.getElementsByClassName('menu')[0];
slider[i].addEventListener('mousedown', function(e) {
	isDown2 = true;
	startX = e.pageX - slider[i].offsetLeft;
	scrollLeft2 = slider[i].scrollLeft;
});
slider[i].addEventListener('mouseleave', function(e){
	isDown2 = false;
});
slider[i].addEventListener('mouseup',function(e) {
	isDown2 = false;
});
slider[i].addEventListener('mousemove', function(e) {
	if(!isDown2||isDown) return;
	const x = e.pageX - slider[i].offsetLeft;
	const walk = (x - startX) ;
	slider[i].scrollLeft = scrollLeft2 - walk;
},{passive: true});
slider[i].addEventListener('touchstart', function(e) {
	var touchLocation = e.targetTouches[0];
	isDown2 = true;
	startX = touchLocation.pageX - slider[i].offsetLeft;
	scrollLeft2 = slider[i].scrollLeft;
},{passive: true});
slider[i].addEventListener('touchmove', function(e) {
	if(!isDown2||isDown) return;
	var touchLocation = e.targetTouches[0];
	e.preventDefault();
	const x = touchLocation.pageX - slider[i].offsetLeft;
	const walk = (x - startX) ;
	slider[i].scrollLeft = scrollLeft2 - walk;
})
slider[i].addEventListener('touchend', function(e) {
	isDown2 = false;
})