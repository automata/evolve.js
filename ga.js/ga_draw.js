var PROTOTYPE1_DNA = [["rt", 90.0, 1], 
                      ["fd", 100, 1]];

var PROTOTYPE2_DNA = [["rt", 90.0, 1], 
                      ["fd", 10, 1]];


function Individual(dna, pop_size) {  
  this.dna = [];
  this.probabilities = [];
  for (var i=0; i<pop_size; i += 1) {
    probability = 0.5;
    if (Math.random() < probability) {
      this.dna.push(PROTOTYPE1_DNA[i]);
    } else {
      this.dna.push(PROTOTYPE2_DNA[i]);
    }
    this.probabilities.push(probability);
  }
  this.score = 0.0;
  this.coords = this.evalDNA();
}

Individual.prototype.evalDNA = function() {
  var x = 0.0,
      y = 0.0,
      xs = [CANVAS_CENTER],
      ys = [CANVAS_CENTER],
      i = 0,
      j = 0,
      angle = 0.0,
      circle = 360.0,
      radians = Math.PI / (circle * 0.5),
      instr;

  for (j = 0; j<this.dna.length; j += 1) {
    instr = this.dna[j];
    console.log(instr);
    if (instr[0] === "fd") {
      for (i = 0; i<instr[2]; i += 1) {
        x = x + instr[1] * Math.cos(angle*radians);
        y = y - instr[1] * Math.sin(angle*radians);
      }
      xs.push(x);
      ys.push(y);
    } else if (instr[0] === "bd") {
      for (i = 0; i<instr[2]; i += 1) {
        x = x - instr[1] * Math.cos(angle*radians);
        y = y + instr[1] * Math.sin(angle*radians);
      }
      xs.push(x);
      ys.push(y);
    } else if (instr[0] === "rt") {
      angle = (angle + instr[1]) % circle;      
    } else if (instr[0] === "lt") {
      angle = (angle - instr[1]) % circle;
    }
  }
  return [xs, ys];
};

Individual.prototype.draw = function() {
  var c = document.getElementById("foo");
  var ctx = c.getContext("2d");
  for (var i=0; i<this.coords[0].length-1; i += 1) {
    ctx.moveTo(this.coords[i][0], this.coords[i][1]);
    ctx.lineTo(this.coords[i+1][0], this.coords[i+1][1]);
  }
  ctx.stroke();
};
