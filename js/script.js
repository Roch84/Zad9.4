var height = prompt('Podaj wysokość choinki');

drawTree (height);

function drawTree (treeHeight) {
	
for ( var i = 0 ; i <= height ; i++) {
  		var star = '';
		for ( var j = 1 ; j <= i ; j++){
			star += '*';
		} console.log(star);
	}
}