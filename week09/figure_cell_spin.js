
function enter(event) {
    this.fillColor = 'red';
    //console.log("Entering ", this.cellIndex[0], this.cellIndex[1]);
    bigCells[this.cellIndex[0]][this.cellIndex[1]].fillColor = 'red';
}

function exit(event) {
    this.fillColor = null;
    //console.log("Exiting ", this.cellIndex[0], this.cellIndex[1]);
    bigCells[this.cellIndex[0]][this.cellIndex[1]].fillColor = null;
}

function drawGrid(origin, size, nx, ny) {
    var cells = [];
    var point = origin.clone();
    for (i = 0; i < nx ; i++) {
        point.y = origin.y;
        var row = [];
        cells.push(row);
        for (j = 0; j < nx ; j++) {
            var cell = new Path.Rectangle(point, size);
            cell.strokeColor = '#000000';
            cell.fillColor = '#FFFFFF';
            cell.onMouseEnter = enter;
            cell.onMouseLeave = exit;
            cell.cellIndex = [i, j];
            cells[i].push(cell)
            point.y += size.height + 5;
        }
        point.x += size.width + 5;
    }
    return cells;
}

var cells = drawGrid(new Point(10.0, 10.0), new Size(20.0, 20.0), 5, 4);
var bigCells = drawGrid(new Point(10, 160), new Size(50, 50), 5, 4);

function onFrame(event) {
    cells[0][0].rotate(1);
}
