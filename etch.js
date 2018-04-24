let row= ''
let column = ''
let gridSize = 16
let square = ''
const createNew = document.getElementById('customGrid')
const resetGrids = document.getElementById('resetGrid')
let container = document.getElementById("container")
createGrid(gridSize)

createNew.addEventListener('click', function (){
	container.style.gridTemplateColumns = "repeat(" +gridSize +", 1fr)"
	container.style.gridTemplateRows = "repeat(" +gridSize +", 1fr)"
	createNewGrid()
})
function createNewGrid(){

	let gridSize = prompt("New grid size:", "16")
	container.style.setProperty('grid-height', gridSize)
	resetGrid()
	createGrid(gridSize)
	

}

function createGrid(gridSize){
	container.style.gridTemplateColumns = "repeat(" +gridSize +", 1fr)"
	container.style.gridTemplateRows = "repeat(" +gridSize +", 1fr)"
	for(x=0; x<gridSize; x++){
		for(j=0; j<gridSize; j++){
		let row = gridSize
		let column = row
		
		let square = document.createElement('div')
			square.id = "square";
			square.addEventListener('mouseover', changeSquare)
			document.getElementById('container').appendChild(square)
	}
}

}	

resetGrids.addEventListener('click', function() {
	resetGrid()
	createGrid(gridSize)
});
function changeSquare(e){
	e.target.style.backgroundColor = 'black'
}

function resetGrid(){
	while (container.hasChildNodes()) {
			container.removeChild(container.childNodes[0]);
		
	
	}
}

