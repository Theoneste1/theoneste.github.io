//Javascript

let btnNumber= document.querySelector('.produceNumbers');
let btnWinner=document.querySelector('.showWinners');
let ResetBtn= document.querySelector('.reset');
// console.log(btnWinner);
// console.log(btnNumber);
let newholeArray=[];
let secondnewholeArray=[];
var arrayNumbers=[];
var wholeArray=[];
let winners=[];



//disabling a button
function disablebtn(){
    if(wholeArray.length===0){
        // look for winners button
        btnWinner.style.backgroundColor="";
        btnWinner.style.color="white";
        btnWinner.style.opacity=0.5;
        btnWinner.disabled=true;
        
        //reset button
        ResetBtn.style.backgroundColor="";
        ResetBtn.style.color="white";
        ResetBtn.style.opacity=0.5;
        ResetBtn.disabled=true;
    }
    if(wholeArray.length===20){
        // winner button
        btnWinner.style.color="white";
        btnWinner.style.backgroundColor="black";
        btnWinner.disabled=false;  

        // look for winners button
        ResetBtn.style.color="white";
        ResetBtn.style.backgroundColor="black";
        ResetBtn.disabled=false;  
    }
}
disablebtn();

// number buuton

btnNumber.style.color="white";
btnNumber.style.backgroundColor="black"
btnNumber.disabled=false;  

btnNumber.addEventListener("click",(e)=>{
  
    disablebtn();
 if (newholeArray.length===0){
    newholeArray=wholeArray;

    console.log(`newholeArray ${[newholeArray]} yes`);
    return  displayProducedNumbers();
 }  

 else if(newholeArray.length===20){
     secondnewholeArray=wholeArray;
      for(var j=0; j<newholeArray.length; j++){
        for(var i=0; i<wholeArray.length; i++){

          if(newholeArray[j]===secondnewholeArray[i]){
             console.log("is the same kbs")
             window.location.reload();
             newholeArray=[];
             newholeArray.length=0;
             
          } 
         }
  }

}
return  displayProducedNumbers();

});

btnWinner.addEventListener("click", function(e){
    // e.preventDefault();
   
    //recalling the array after changing pages
    // displayProducedNumbers();
    displaywinners();
    
})

ResetBtn.addEventListener('click',function(e){

    //reloading to bring new screen
    window.location.reload(); 
});


function displayProducedNumbers() {
    x = document.getElementById("demo");
    x.innerHTML = wholeArray.map(number=>{

        return(winners.includes(number))? 
        `<div class="number winner ${number}">${number}</div>`:
        `<div class="number looser ${number}">${number}</div>`

    }).join("");
    // console.log(displayProducedNumbers());
    // console.log("I am produced Numbers")
  }

  displaywinners=()=>{
   
// go through the div class created
    const items=document.querySelectorAll('.result div');

    //changing Nodlist to array
    const array = [].slice.call(items);
    //Map through array
    array.map(item=>
        {
        if(item.classList.contains('winner')){
            item.style.backgroundColor="green";
            item.style.border=" solid yellow";
            }

        })

  }
  displaywinners();


//   anctivatingo


// looking for the winners
function isWinner(){


     while(winners.length<3 || 
        arrayNumbers.length<17){

        let winningNumber=Math.floor(Math.random()*1000);
            
            if(sumOfNumbers(winningNumber)!==1
                && (arrayNumbers.length<17)){

                // pushing in arrayNumbers
                arrayNumbers.push(winningNumber);
            //pushing in general array
                wholeArray.push(winningNumber); 
            }
            
            else if(sumOfNumbers(winningNumber)===1
                && winners.length<3)
            {
                //pushing in winner array
               winners.push(winningNumber);
               //push in general array
               wholeArray.push(winningNumber);
            }
            else if (wholeArray.length===20){
                return;
            }

    }

    console.log(`winners: [${winners}]`);
       console.log(`arrayNumbers: [${arrayNumbers}]`)
       console.log(`wholeArray :[${wholeArray}]`)

        return wholeArray;
}

isWinner();
// console.log(wholeArray);



function sumOfNumbers(number){
let newNumber=number.toString()
.split("");

//changing into numbesrs!
while(newNumber.length!==1){

    newNumberInteger=newNumber.map(num=>parseInt(num)*parseInt(num))

let sumOfArray=
newNumberInteger.reduce((numberOne,sum)=>
    sum+numberOne);

newNumber= sumOfArray.toString()
.split("");

// console.log(newNumber);
}
return parseInt(newNumber[0]); // that number
}
sumOfNumbers(13563);