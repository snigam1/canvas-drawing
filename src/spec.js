describe('Testing the functionality, this is the checklist', ()=>{
    
  it('should draw a canvas with id myCanvas and given height and width', ()=>{
    let height = 115;
    let width  = 116;
    
    this.dvCanvas = document.createElement('div');
    this.dvCanvas.setAttribute("id", "dvCanvas")
    document.getElementsByTagName("body")[0].appendChild(this.dvCanvas);
    
    drawCanvas(width, height);
    const myCanvas = document.getElementById("myCanvas");

    
    expect(myCanvas).not.toEqual(null);
    expect(myCanvas.height).toEqual(115);
    expect(myCanvas.width).toEqual(116);
  });


  it('should clean canvas', ()=>{
    
    cleanCanvas();
    const myCanvas = document.getElementById("myCanvas");
    
    expect(myCanvas).toEqual(null);
  });

  
// To Be Added more tests 
//it('should draw  lines between 2 coordinates', ()=>{    
//   });
  

})