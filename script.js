var totalCards = 51;
var deck = [];
var p1 = [];
var p2 = [];
var p3 = [];
var p4 = [];
var z=1;
//var y=false
class Cards {

  createDeck() {
    for (var i = 1; i <= 10; i++) {
      deck.push(i);
    }
    for (var i = 1; i <= 10; i++) {
      deck.push(i);
    }
    for (var i = 1; i <= 10; i++) {
      deck.push(i);
    }
    for (var i = 1; i <= 10; i++) {
      deck.push(i);
    }
    for (var i = 11; i <= 13; i++) {
      deck.push(i);
    }
    for (var i = 11; i <= 13; i++) {
      deck.push(i);
    }
    for (var i = 11; i <= 13; i++) {
      deck.push(i);
    }
    for (var i = 11; i <= 13; i++) {
      deck.push(i);
    }
    //console.log(deck);
  }

  dealCards() {

    for (var i = 0; i <= 12; i++) {
      var randCard = (Math.floor(Math.random() * (totalCards + 1) + 0));
      p1.push(deck[randCard]);
      document.getElementById("player1").innerHTML = "player1 cards: " + p1;
      deck.splice(randCard, 1);
      totalCards--;


      randCard = (Math.floor(Math.random() * (totalCards + 1) + 0));
      p2.push(deck[randCard]);
      document.getElementById("player2").innerHTML = "player2 cards: " + p2;
      deck.splice(randCard, 1);
      totalCards--;

      randCard = (Math.floor(Math.random() * (totalCards + 1) + 0));
      p3.push(deck[randCard]);
      document.getElementById("player3").innerHTML = "player3 cards: " + p3;
      deck.splice(randCard, 1);
      totalCards--;

      randCard = (Math.floor(Math.random() * (totalCards + 1) + 0));
      p4.push(deck[randCard]);
      document.getElementById("player4").innerHTML = "player4 cards: " + p4;
      deck.splice(randCard, 1);
      totalCards--;

    }

  }

}


var deckPile = [];
var responseCards = [];
var cardsPlayed = [];
var numCards=0;
var cardsPlayedCopy=[]
var responseCardsCopy=[]
//document.getElementById("verify").addEventListener("click", myFunction);
var i = 4
var playerWhoVerify
var y 
//while(y==false){ 
class playerResponse {
  playersTurn() {
    //console.log(i)
    if (i % 4 == 0) {
      playerWhoVerify = "p1"
      i++
    }
    else if (i % 4 == 1) {
      playerWhoVerify = "p2"
      i++
    }
    else if (i % 4 == 2) {
      playerWhoVerify = "p3"
      i++
    }
    else if (i % 4 == 3) {
      playerWhoVerify = "p4"
      i++
    }
    document.getElementById("playerturn").innerHTML ="playerturn: "+playerWhoVerify
  }

//make sure this goes into HTML
  verifySit(deckPile, responseCardsCopy, cardsPlayedCopy, p1, p2, p3, p4, playerWhoVerify) {
    console.log("Verify" +cardsPlayed)
    console.log("Verify" +responseCards)
    if (deckPile.length == 0) {
      document.getElementById("verifyOutput").innerHTML =
        "You can't verify because there is nothing in the deck. place cards instead"
        return

    }
    else {
      var deckSize = deckPile.length;
      //console.log(deckPile.length());

      if (JSON.stringify(responseCards) == JSON.stringify(cardsPlayed)) {

        if (playerWhoVerify == "p1") {
          for (var i = 0; i < deckSize; i++) {
            p1.push(deckPile[0]);
            deckPile.splice(0, 1);


          }
          //System.out.println("deck size: "+deckPile.size());

          document.getElementById("verifyOutput").innerHTML =
            "player 4 was telling the truth you now have the whole deck added to yours";
            document.getElementById("player1").innerHTML="player1 cards: "+p1
            document.getElementById("responsecards").innerHTML=""
        } else if (playerWhoVerify == "p2") {
          for (var i = 0; i < deckSize; i++) {
            p2.push(deckPile[0]);
            deckPile.splice(0, 1);


          }
          //System.out.println("deck size: "+deckPile.size());


          document.getElementById("verifyOutput").innerHTML =
            "player 1 was telling the truth you now have the whole deck added to yours";
            document.getElementById("player2").innerHTML="player2 cards: "+p2
            document.getElementById("responsecards").innerHTML=""

        } else if (playerWhoVerify == "p3") {
          for (var i = 0; i < deckSize; i++) {
            p3.push(deckPile[0]);
            deckPile.splice(0, 1);


          }
          //System.out.println("deck size: "+deckPile.size());

          document.getElementById("verifyOutput").innerHTML =
            "player 2 was telling the truth you now have the whole deck added to yours";
            document.getElementById("player3").innerHTML="player3 cards: "+p3
            document.getElementById("responsecards").innerHTML=""
        } else if (playerWhoVerify == "p4") {
          for (var i = 0; i < deckSize; i++) {
            p4.push(deckPile[0]);
            deckPile.splice(0, 1);


          }
          //System.out.println("deck size: "+deckPile.size());

          document.getElementById("verifyOutput").innerHTML = "player 3 was telling the truth you now have the whole deck added to yours";
          document.getElementById("player4").innerHTML="player4 cards: "+p4
          document.getElementById("responsecards").innerHTML=""
        }
      } else if(JSON.stringify(responseCards)!=JSON.stringify(cardsPlayed)) {
        if (playerWhoVerify == "p1") {
          for (var i = 0; i < deckSize; i++) {
            p4.push(deckPile[0]);
            deckPile.splice(0, 1);


          }
          //System.out.println("deck size: "+deckPile.size());

          document.getElementById("verifyOutput").innerHTML = "player 4 was lying so they have the deck added to their's";
          document.getElementById("player4").innerHTML="player4 cards: "+p4
          document.getElementById("responsecards").innerHTML=""
        } else if (playerWhoVerify == "p2") {

          for (var i = 0; i < deckSize; i++) {
            p1.push(deckPile[0]);
            deckPile.splice(0, 1);


          }
          //System.out.println("deck size: "+deckPile.size());

          document.getElementById("verifyOutput").innerHTML = "player 1 was lying so they have the deck added to their's";
          document.getElementById("player1").innerHTML="player1 cards: "+p1
          document.getElementById("responsecards").innerHTML=""
        } else if (playerWhoVerify == "p3") {
          for (var i = 0; i < deckSize; i++) {
            p2.push(deckPile[0]);
            deckPile.splice(0, 1);


          }
          //System.out.println("deck size: "+deckPile.size());

          document.getElementById("verifyOutput").innerHTML = "player 2 was lying so they have the deck added to their's";
          document.getElementById("player2").innerHTML="player2 cards: "+p2
          document.getElementById("responsecards").innerHTML=""
        } else if (playerWhoVerify == "p4") {
          for (var i = 0; i < deckSize; i++) {
            p3.push(deckPile[0]);
            deckPile.splice(0, 1);


          }
          //System.out.println("deck size: "+deckPile.size());

          document.getElementById("verifyOutput").innerHTML = "player 3 was lying so they have the deck added to their's";
          document.getElementById("player3").innerHTML="player3 cards: "+p3
          document.getElementById("responsecards").innerHTML=""
        }
      }
    }
    this.playersTurn();
  }


  addCard(p1, p2, p3, p4, playerWhoVerify,deckPile,y,responseCardsCopy,cardsPlayedCopy) {
document.getElementById("verify").disabled=true
console.log(cardsPlayedCopy)
console.log(document.getElementById("cardsPlayedOutput").textContent)
if(document.getElementById("cardsPlayedOutput").textContent==""){
  console.log("dewibfiew")
        responseCards=[]
        cardsPlayed=[]
      }

console.log(cardsPlayed)
console.log(responseCards)
console.log(cardsPlayedCopy)
console.log(responseCardsCopy)
 if(playerWhoVerify=="p1"){
   document.getElementById("placecards").addEventListener
   if(cardsPlayed.length==4){
     if(document.getElementById("responsecards")==""){ 
    document.getElementById("cerror").innerHTML="make sure you enter at least 2 values for response cards"
   }
   else{
     document.getElementById("cerror").innerHTML="you have the maximum of 4 cardsPlayed. Click Done unless you still have to fill the responseCards values"
   }
   }

      else if(p1.indexOf(parseInt(document.getElementById("cardsplayed").value))==-1){
        document.getElementById("cerror").innerHTML="enter cards you actually have unless you choose to leave this blank"
        document.getElementById("cardsPlayedOutput").innerHTML="cardsPlayed: "
      }
      else if(cardsPlayed.length<=4){ 


        cardsPlayed.unshift(document.getElementById("cardsplayed").value)
      document.getElementById("cardsPlayedOutput").innerHTML="cardPlayed: "+cardsPlayed
          p1.splice(p1.indexOf(parseInt(cardsPlayed[0])),1)
          //console.log(p1)
          document.getElementById("player1").innerHTML="player1 cards: "+p1
          deckPile.push(cardsPlayed[0])
          document.getElementById("cerror").innerHTML="card has been added to deckPile and removed from your deck"

      }
    if(responseCards.length==0){

      console.log("responseCards "+responseCards)
      if(parseInt(document.getElementById("responsecard").value)<1||parseInt(document.getElementById("responsecard").value)>13||document.getElementById("responsecard").value==""){
        document.getElementById("done").disabled=true
    document.getElementById("rerror").innerHTML="enter applicable cards"

      }

      else{
        responseCards.unshift(document.getElementById("responsecard").value)
        document.getElementById("respRequirements").innerHTML="1 out of 2 values satisfied"
        document.getElementById("responsecards").innerHTML="responseCards: "+responseCards
        document.getElementById("done").disabled=true
        document.getElementById("rerror").innerHTML=""
      }
    }
    else if(responseCards.length==1){
      if(parseInt(document.getElementById("responsecard").value)<1||parseInt(document.getElementById("responsecard").value)>4||document.getElementById("responsecard").value==""){

    document.getElementById("rerror").innerHTML="enter applicable cards"
    document.getElementById("done").disabled=true
      }

      else{
       // document.getElementById("rerror").innerHTML="enter how many of the previous card you want to display"
        var numResp=document.getElementById("responsecard").value
        for(var i=1;i<numResp;i++){
        responseCards.unshift(responseCards[0])

      }
      document.getElementById("responsecards").innerHTML="responseCards: "+responseCards
      document.getElementById("respRequirements").innerHTML="2 out of 2 values satisfied"
      document.getElementById("done").innerHTML="Done"
      document.getElementById("done").disabled=false
      if(responseCardsCopy.length>0){
        responseCardsCopy=[]

      }



      }
    }

  }

    if(playerWhoVerify=="p2"){
   document.getElementById("placecards").addEventListener
   if(cardsPlayed.length==4){
     if(document.getElementById("responsecards")==""){ 
    document.getElementById("cerror").innerHTML="make sure you enter at least 2 values for response cards"
   }
   else{
     document.getElementById("cerror").innerHTML="you have the maximum of 4 cardsPlayed. Click Done unless you still have to fill the responseCards values"
   }
   }

      else if(p2.indexOf(parseInt(document.getElementById("cardsplayed").value))==-1){
        document.getElementById("cerror").innerHTML="enter cards you actually have unless you choose to leave this blank"

      }
      else if(cardsPlayed.length<=4){ 


        cardsPlayed.unshift(document.getElementById("cardsplayed").value)
      document.getElementById("cardsPlayedOutput").innerHTML="cardPlayed: "+cardsPlayed
          p2.splice(p2.indexOf(parseInt(cardsPlayed[0])),1)
          //console.log(p1)
          document.getElementById("player2").innerHTML="player2 cards: "+p2
          deckPile.push(cardsPlayed[0])
          document.getElementById("cerror").innerHTML="card has been added to deckPile and removed from your deck"

      }
    if(responseCards.length==0){ 
      console.log("responseCards "+responseCards)
      if(parseInt(document.getElementById("responsecard").value)<1||parseInt(document.getElementById("responsecard").value)>13||document.getElementById("responsecard").value==""){
        document.getElementById("done").disabled=true
    document.getElementById("rerror").innerHTML="enter applicable cards"

      }

      else{
        responseCards.unshift(document.getElementById("responsecard").value)
        document.getElementById("respRequirements").innerHTML="1 out of 2 values satisfied"
        document.getElementById("responsecards").innerHTML="responseCards: "+responseCards
        document.getElementById("done").disabled=true
        document.getElementById("rerror").innerHTML=""
      }
    }
    else if(responseCards.length==1){
      if(parseInt(document.getElementById("responsecard").value)<1||parseInt(document.getElementById("responsecard").value)>4||document.getElementById("responsecard").value==""){

    document.getElementById("rerror").innerHTML="enter applicable cards"
    document.getElementById("done").disabled=true
      }

      else{
       // document.getElementById("rerror").innerHTML="enter how many of the previous card you want to display"
        var numResp=document.getElementById("responsecard").value
        for(var i=1;i<numResp;i++){
        responseCards.unshift(responseCards[0])

      }
      document.getElementById("responsecards").innerHTML="responseCards: "+responseCards
      document.getElementById("respRequirements").innerHTML="2 out of 2 values satisfied"
      document.getElementById("done").innerHTML="Done"
      document.getElementById("done").disabled=false



      }
    }

  }


     if(playerWhoVerify=="p3"){
   document.getElementById("placecards").addEventListener
   if(cardsPlayed.length==4){
     if(document.getElementById("responsecards")==""){ 
    document.getElementById("cerror").innerHTML="make sure you enter at least 2 values for response cards"
   }
   else{
     document.getElementById("cerror").innerHTML="you have the maximum of 4 cardsPlayed. Click Done unless you still have to fill the responseCards values"
   }
   }

      else if(p3.indexOf(parseInt(document.getElementById("cardsplayed").value))==-1){
        document.getElementById("cerror").innerHTML="enter cards you actually have unless you choose to leave this blank"

      }
      else if(cardsPlayed.length<=4){ 


        cardsPlayed.unshift(document.getElementById("cardsplayed").value)
      document.getElementById("cardsPlayedOutput").innerHTML="cardPlayed: "+cardsPlayed
          p3.splice(p3.indexOf(parseInt(cardsPlayed[0])),1)
          //console.log(p1)
          document.getElementById("player3").innerHTML="player3 cards: "+p3
          deckPile.push(cardsPlayed[0])
          document.getElementById("cerror").innerHTML="card has been added to deckPile and removed from your deck"

      }
    if(responseCards.length==0){ 
      console.log("responseCards "+responseCards)
      if(parseInt(document.getElementById("responsecard").value)<1||parseInt(document.getElementById("responsecard").value)>13||document.getElementById("responsecard").value==""){
        document.getElementById("done").disabled=true
    document.getElementById("rerror").innerHTML="enter applicable cards"

      }

      else{
        responseCards.unshift(document.getElementById("responsecard").value)
        document.getElementById("respRequirements").innerHTML="1 out of 2 values satisfied"
        document.getElementById("responsecards").innerHTML="responseCards: "+responseCards
        document.getElementById("done").disabled=true
        document.getElementById("rerror").innerHTML=""
      }
    }
    else if(responseCards.length==1){
      if(parseInt(document.getElementById("responsecard").value)<1||parseInt(document.getElementById("responsecard").value)>4||document.getElementById("responsecard").value==""){

    document.getElementById("rerror").innerHTML="enter applicable cards"
    document.getElementById("done").disabled=true
      }

      else{
       
        var numResp=document.getElementById("responsecard").value
        for(var i=1;i<numResp;i++){
        responseCards.unshift(responseCards[0])

      }
      document.getElementById("responsecards").innerHTML="responseCards: "+responseCards
      document.getElementById("respRequirements").innerHTML="2 out of 2 values satisfied"
      document.getElementById("done").innerHTML="Done"
      document.getElementById("done").disabled=false

      //responseCardsCopy=JSON.stringify(responseCards)
      //responseCards=[]

      }
    }

  }

        if(playerWhoVerify=="p4"){
   document.getElementById("placecards").addEventListener
   if(cardsPlayed.length==4){
     if(document.getElementById("responsecards")==""){ 
    document.getElementById("cerror").innerHTML="make sure you enter at least 2 values for response cards"
   }
   else{
     document.getElementById("cerror").innerHTML="you have the maximum of 4 cardsPlayed. Click Done unless you still have to fill the responseCards values"
   }
   }

      else if(p4.indexOf(parseInt(document.getElementById("cardsplayed").value))==-1){
        document.getElementById("cerror").innerHTML="enter cards you actually have unless you choose to leave this blank"

      }
      else if(cardsPlayed.length<=4){ 


        cardsPlayed.unshift(document.getElementById("cardsplayed").value)
      document.getElementById("cardsPlayedOutput").innerHTML="cardPlayed: "+cardsPlayed
          p4.splice(p4.indexOf(parseInt(cardsPlayed[0])),1)
          //console.log(p1)
          document.getElementById("player2").innerHTML="player4 cards: "+p4
          deckPile.push(cardsPlayed[0])
          document.getElementById("cerror").innerHTML="card has been added to deckPile and removed from your deck"

      }
    if(responseCards.length==0){ 
      console.log("responseCards "+responseCards)
      if(parseInt(document.getElementById("responsecard").value)<1||parseInt(document.getElementById("responsecard").value)>13||document.getElementById("responsecard").value==""){
        document.getElementById("done").disabled=true
    document.getElementById("rerror").innerHTML="enter applicable cards"

      }

      else{
        responseCards.unshift(document.getElementById("responsecard").value)
        document.getElementById("respRequirements").innerHTML="1 out of 2 values satisfied"
        document.getElementById("responsecards").innerHTML="responseCards: "+responseCards
        document.getElementById("done").disabled=true
        document.getElementById("rerror").innerHTML=""
      }
    }
    else if(responseCards.length==1){
      if(parseInt(document.getElementById("responsecard").value)<1||parseInt(document.getElementById("responsecard").value)>4||document.getElementById("responsecard").value==""){

    document.getElementById("rerror").innerHTML="enter applicable cards"
    document.getElementById("done").disabled=true
      }

      else{
       // document.getElementById("rerror").innerHTML="enter how many of the previous card you want to display"
        var numResp=document.getElementById("responsecard").value
        for(var i=1;i<numResp;i++){
        responseCards.unshift(responseCards[0])

      }
      document.getElementById("responsecards").innerHTML="responseCards: "+responseCards
      document.getElementById("respRequirements").innerHTML="2 out of 2 values satisfied"
      document.getElementById("done").innerHTML="Done"
      document.getElementById("done").disabled=false

      //responseCardsCopy=JSON.stringify(responseCards)
      //responseCards=[]

      }
    }

  }


  }
  playerDone(playerWhoVerify, cardsPlayed,cardsPlayedCopy,responseCardsCopy,responseCards,p1,p2,p3,p4,deckPile,y){
    console.log(playerWhoVerify)
    if(playerWhoVerify=="p1"){
      console.log("12343445")
      if(p4.length==0){
        document.getElementById("player1").innerHTML="player4 won game over"
        document.getElementById("player2").innerHTML="player4 won game over"
        document.getElementById("player3").innerHTML="player4 won game over"
        document.getElementById("player4").innerHTML="player4 won game over"
      }

      //playerWhoVerify="p2"
      //document.getElementById("playerturn").innerHTML="playerTurn: "+playerWhoVerify
      document.getElementById("cardsPlayedOutput").textContent=""
      document.getElementById("cerror").innerHTML=""
      document.getElementById("rerror").innerHTML=""
document.getElementById("verify").disabled=false
document.getElementById("done").disabled=true
document.getElementById("verifyOutput").innerHTML=""
document.getElementById("respRequirements").innerHTML="" 
        this.playersTurn();
        y=false
        cardsPlayedCopy=JSON.stringify(cardsPlayed)
        console.log(cardsPlayedCopy)
        console.log(cardsPlayedCopy.length)
        responseCardsCopy=JSON.stringify(responseCards)
        console.log()
        console.log(responseCardsCopy)
        return


    } 
    if(playerWhoVerify=="p2"){

      if(p1.length==0){
        document.getElementById("player1").innerHTML="player1 won game over"
        document.getElementById("player2").innerHTML="player1 won game over"
        document.getElementById("player3").innerHTML="player1 won game over"
        document.getElementById("player4").innerHTML="player1 won game over"
      }
      else{
        document.getElementById("cardsPlayedOutput").textContent=""
      document.getElementById("cerror").innerHTML=""
      document.getElementById("rerror").innerHTML=""
document.getElementById("verify").disabled=false
document.getElementById("done").disabled=true
document.getElementById("respRequirements").innerHTML=""
document.getElementById("verifyOutput").innerHTML="" 
        this.playersTurn();
        y=false
        cardsPlayedCopy=JSON.stringify(cardsPlayed)
        return
      }

    } 
    if(playerWhoVerify=="p3"){
      if(p2.length==0){
        document.getElementById("player1").innerHTML="player2 won game over"
        document.getElementById("player2").innerHTML="player2 won game over"
        document.getElementById("player3").innerHTML="player2 won game over"
        document.getElementById("player4").innerHTML="player2 won game over"
      }
      else{
        document.getElementById("cardsPlayedOutput").innerHTML=""
      document.getElementById("cerror").innerHTML=""
      document.getElementById("rerror").innerHTML=""
document.getElementById("verify").disabled=false
document.getElementById("done").disabled=true
document.getElementById("respRequirements").innerHTML="" 
document.getElementById("verifyOutput").innerHTML=""
        this.playersTurn();
        y=false
        cardsPlayedCopy=JSON.stringify(cardsPlayed)
        return
      }

    } 
    if(playerWhoVerify=="p4"){
      if(p3.length==0){
        document.getElementById("player1").innerHTML="player3 won game over"
        document.getElementById("player2").innerHTML="player3 won game over"
        document.getElementById("player3").innerHTML="player3 won game over"
        document.getElementById("player4").innerHTML="player3 won game over"
      }
      else{
        document.getElementById("cardsPlayedOutput").textContent=""
      document.getElementById("cerror").innerHTML=""
      document.getElementById("rerror").innerHTML=""
document.getElementById("verify").disabled=false
document.getElementById("done").disabled=true
document.getElementById("respRequirements").innerHTML="" 
document.getElementById("verifyOutput").innerHTML=""
        this.playersTurn();
        y=false
        cardsPlayedCopy=JSON.stringify(cardsPlayed)
        return
      }

    } 



   }


    }





p = new playerResponse()
d = new Cards()
p.playersTurn()
d.createDeck()
d.dealCards()
document.getElementById("verify").addEventListener("click", callFunction);
document.getElementById("placecards").addEventListener("click", calladdCard);
document.getElementById("done").addEventListener("click",callDone);
document.getElementById("done").disabled=true
function calladdCard(){ 
  p.addCard(p1, p2, p3, p4, playerWhoVerify,deckPile,y,responseCardsCopy,cardsPlayedCopy)
}
  function callFunction(){
    p.verifySit(deckPile, responseCardsCopy, cardsPlayedCopy, p1, p2, p3, p4, playerWhoVerify)
  }
  function callDone(){
p.playerDone(playerWhoVerify, cardsPlayed,cardsPlayedCopy,responseCardsCopy,responseCards,p1,p2,p3,p4,deckPile,y)  
}