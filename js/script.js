var treeHeight = prompt('Podaj wysokość choinki');

drawTree (treeHeight);

function drawTree (treeHeight) {
	
for ( var i = 0 ; i <= treeHeight ; i++) {
  		var star = '';
		for (j = 1 ; j <= i ; j++){
			star += '*';
		} console.log(star);
	}
}