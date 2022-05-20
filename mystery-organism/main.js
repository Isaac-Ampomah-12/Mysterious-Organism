// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Function returns an object
const pAequorFactory = (number, array) => {
  return {
    specimenNum : number,
    _dna: array,

    get dna(){
      return this._dna;
    },

    set dna(newdna){
      this._dna = newdna;
    },

    //mutate DNA
    mutate(){
      const originalBase = this.dna[0];
      const mutatedBase = returnRandBase();
      if (originalBase !== mutatedBase){ 
        let mutatedDna = mockUpStrand();
        return mutatedDna;
        }
    },

    //Compare 2 DNAs to see how similar they are
    compareDNA(dnaObject){
      let counter = 0;
      let percentage = 0;
      for(let index = 0; index <this.dna.length; index++){
        if(this.dna[index] === dnaObject[index]){
           counter += 1 ;
        }
      }
      percentage = ((counter/dnaObject.length) * 100).toFixed(2);
      const output = `Specimen A and Specimen B have ${percentage}% DNA in common.`;
      return output;
    },

    //check if specimen is likely to survive by checking how many C and G are in the DNA 
    willLikelySurvive(){
      let counter = 0;
      for(let index = 0; index < this.dna.length; index++){
        if(this.dna[index] ==='C' || this.dna[index] === 'G'){
          counter += 1;
        }
      }
      const willSurvive = (counter/this.dna.length)*100 >= 60? true: false;
      return willSurvive;
    }   
  }
}


//creating 30 instances of pAequor that can survive in their natural habitat. 
const samples = () =>{
  let samples = [];
  do{
   let specimen = mockUpStrand();
   let newObject = pAequorFactory(1, specimen);
   let willSurvive = newObject.willLikelySurvive();
   if (willSurvive === true){
     samples.push(specimen);
   }  
  }
  while(samples.length < 30);
 
  return samples;  
}

 console.log(samples()); 
 




