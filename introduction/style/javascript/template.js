var clickNumber = 0;
function menu_click(){
	clickNumber++;
	if((clickNumber%2)==0){
		document.getElementById('box-menu').className = "none-menu";
		document.getElementById('menu-button').src = "style/image/menu_icon.png";
	}else{
		document.getElementById('box-menu').className = "block-menu";
		document.getElementById('menu-button').src = "style/image/close_icon.png";
	}
}