var GENERATIONS = 1,
    POP_SIZE = 100,
    ELITE_RATE = 0.1,
    PLEBS_RATE = 0.25,
    MUTATION_RATE = 0.2,
    INVERSION_RATE = 0.2,
    CANVAS_CENTER = 50;

function Individual(gen_size, dna) {
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = [];
    for (var i=0; i<gen_size; i += 1) {
      this.dna.push(Math.floor(Math.random()*10));
    }
  }
  this.fitness = 0.0;
  this.gen_size = this.dna.length;
};

Individual.prototype.mutate = function() {
  var i;
  for (i = 0; i<this.gen_size; i += 1) {
    this.dna[i] = this.dna[i] + 1;
  }
};

Individual.prototype.crossover = function(other) {
};

Individual.prototype.inversion = function() {
};

Individual.prototype.fitness = function() {
};

function GA(pop_size, max_generations) {
  this.pop_size = pop_size;
  this.max_generations = max_generations;
  this.pop = [];
};

GA.prototype.run = function() {
  var i, generation, new_pop;

  // inicialização da pop. inicial
  for (i=0; i<this.pop_size; i += 1) {
    this.pop.push(new Individual(10));
  }

  // loop principal
  for (generation=0; generation<this.max_generations; generation += 1) {
    // preservação da elite
    // crossover
    // mutação
    for (i=0; i<this.pop_size; i += 1) {
      this.pop[i].mutate();
    }
    // atualização da população
    //this.pop = new_pop.slice(0);
    console.log(generation+1, this.pop);
  }
};

var foo = new GA(5,5);
foo.run();



