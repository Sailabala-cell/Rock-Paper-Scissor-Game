function rpsGame(yourChoice){
    console.log(yourChoice)
    console.log(yourChoice.src)
    // I have access to that code.I can control it (object poriented programming)
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randToRpsInt())
    console.log('Computer Choice:',botChoice)
    results=decideWinner(humanChoice,botChoice)
    console.log(results) // [1,0] human win, [.5,.5] draw, [0,1] bot win
    message = finalMessage(results)
    console.log(message)
    // ('message':You Won,'color':'green')
    rpsFrontEnd(yourChoice.id,botChoice,message)

}

function randToRpsInt(){
    return Math.floor(Math.random()*3)
}

function numberToChoice(number) {
    return ['rock','paper','scissor'][number]
}
// Object within object,Key is also has an object
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissor':1, 'rock':0.5, 'paper':0},
        'paper':{'paper':0.5, 'scissor':0, 'rock':1},
        'scissor':{'scissor':0.5, 'paper':1, 'rock':0},
    }
 var yourScore = rpsDatabase[yourChoice][computerChoice]   
 var computerScore = rpsDatabase[computerChoice][yourChoice]

 return[yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return{'message':'You lost','color':'red'}
    }else if(yourScore===0.5){
        return{'message':'you tied','color':'yellow'}
    }else{
        return{'message':'You won','color':'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }
    // let's remove all tge images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice] + "' height=150px width=150px style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px '>" +finalMessage['message']+"</h1>"
    botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice] + "' height= 150px width=150px style='box-shadow:0px 10px 50px rgba(233,37,50,1);'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)
    
}