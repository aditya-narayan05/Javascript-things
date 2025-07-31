//named IIFE

(function car(){ 
    console.log(`Car Loaded`);
})(); //add semicolon if we want to make more iife


//unnamed iife;
(()=>{ 
    console.log(`Car Loaded Again`);
    
})();

((name)=>{ 
    console.log(`Car Loaded Again ${name}`);
    
})(`Rolls Royace`);