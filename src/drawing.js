

function drawCanvas(width, height){
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute("id", "myCanvas")
    this.canvas.width = width;
    this.canvas.height = height;

    this.dvCanvas = document.getElementById("dvCanvas")
    this.dvCanvas.innerHTML ="";
    this.dvCanvas.appendChild(canvas);

    let c = document.getElementById("myCanvas");
    if(c) {
        this.ctx = c.getContext("2d");
        this.ctx.font = "15px verdana";
        this.ctx.textBaseline = "middle";
    }

}

function cleanCanvas() {
    if(this.dvCanvas) {
        this.ctx =null
        this.canvas = null;
        this.dvCanvas.innerHTML ="";
    }

}


function excuteCommnd(){
    let strCommand = document.getElementById("txtCommand").value;
    let arrCommand = strCommand.split(" ");


    // 1st chacter of the command text "C", "L" or "R"
    let controlKey = arrCommand[0].toUpperCase();

    
    // Validation of the numeric value
    let width = !isNaN(arrCommand[1]) ? parseInt(arrCommand[1]) : null ;
    let height = !isNaN(arrCommand[2]) ? parseInt(arrCommand[2]) : null ;
    let x1 = !isNaN(arrCommand[1]) ? parseInt(arrCommand[1]) : null ;
    let x2 = !isNaN(arrCommand[3]) ? parseInt(arrCommand[3]) : null ;
    let y1 = !isNaN(arrCommand[2]) ? parseInt(arrCommand[2]) : null ;
    let y2 = !isNaN(arrCommand[4]) ? parseInt(arrCommand[4]) : null ;



    switch(controlKey){
        case "C":
        {
            if( width && height)
                drawCanvas(width, height);

            break;
        }

        case "L":
        {
            if( this.ctx && x1 && y1 && x2 && y2)
                drawLine (x1, y1, x2, y2);

            break;
        }

        case "R":
        {
            if( this.ctx && x1 && y1 && x2 && y2)
                drawRectangle(x1,y1,x2,y2);

            break;
        }

        case "Q":
        {
            confirm("Are you sure to quit the program")? window.close(): "" ;
        }

        default :
        {
            return;
        }

    }


}

function drawLine (x1, y1, x2, y2 ) {

    if(x2 >= x1) {
        for (var i = x1; i <= x2; i += 10) {
            this.ctx.fillText("x",  i, y1);
        }
    }

    else{

        for (var i = x1; i >= x2; i -= 10) {
            this.ctx.fillText("x",  i, y1);
        }
    }

    // For vertical lines
    if(y1 < y2){
        for (var i = y1 ; i <= y2; i += 10) {
            this.ctx.fillText("x",  x2, i);
        }
    }

    else{
        for (var i = y2; i <= y1; i += 10) {
            this.ctx.fillText("x",  x2, i);
        }
    }
}


function drawRectangle (x1, y1, x2, y2) {

    if(x2 >= x1) {

        for (var i = x1; i <= x2; i += 10) {
            ctx.fillText("x",  i, y1);
            ctx.fillText("x",  i, y2);
        }

    }

    else{
        for (var i = x1; i >= x2; i -= 10) {
            ctx.fillText("x",  i, y1);
            ctx.fillText("x",  i, y2);
        }
    }

    // For vertical lines
    if(y1 < y2){
        for (var i = y1 ; i <= y2; i += 10) {
            ctx.fillText("x",  x2, i);
            ctx.fillText("x",  x1, i);
        }
    }

    else{
        for (var i = y2; i <= y1; i += 10) {
            ctx.fillText("x",  x2, i);
            ctx.fillText("x",  x1, i);
        }
    }
}

function enterKeyCommand(e){
    if(e.keyCode === 13){
        e.preventDefault();
        excuteCommnd();
    }
}

// To Be Added (Pending and some questions regarding the requirements )
function fillColor (x, y, c) {
    
}
