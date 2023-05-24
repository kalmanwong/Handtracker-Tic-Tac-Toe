import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  keepGoing = 0;
  turnMonitor = 0;
  XO = ["X", "O"];
  whoseTurn = 0;
  buttons = [[" ", " "," "],[" ", " "," "],[" ", " "," "]];
  xWins = 0;
  oWins = 0;
  showTurn: String = "It's O's turn.";
  showScore: String = "Player X: " +this.xWins+ "</br>" + "Player O: " +this.oWins+"";

  constructor() { }

  ngOnInit(): void {
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
  }

  takeTurn(row: number, col: number){ //Determines whose turn it is and displays info in showTurn box
    if(!(this.buttons[row][col]=="O"||this.buttons[row][col]=="X")){

      if(this.turnMonitor==0){
        this.buttons[row][col]="O";
        this.checkWinner();
        this.turnMonitor++;
        this.showTurn = "It's X's turn.";

      }
    
      else if(this.turnMonitor==1){ //Determines whose turn it is and displays info in showTurn box
        this.buttons[row][col]="X";
        this.checkWinner();
        this.turnMonitor--;
        this.showTurn ="It's O's turn.";

      }
      // this.checkWinner();
    }
    // this.checkWinner();
  } 

  checkWinner(){ //Identifies winner by checking to see if a player has satisfied a winning condition
    console.log(this.buttons);
    let currentPlayer = " ";
    if(this.turnMonitor==0){
      currentPlayer = "O";
    } else{
      currentPlayer="X";
    }
    if(this.buttons[0][0] == currentPlayer &&	this.buttons[0][1] == currentPlayer && this.buttons[0][2] == currentPlayer){ //Top row across
      alert("Player " + currentPlayer + " has won.");
      if (this.turnMonitor%2==1) { //Keeps track of the number of wins each player and displays updated score in showScore box
        this.xWins++;
      }else if (this.turnMonitor % 2 == 0) {
        this.oWins++;
      }
      this.showScore="Player X: " +this.xWins+ "</br>" + "Player O: " +this.oWins+"";
      this.clearAll()
      // return true;
      
    }else if(this.buttons[1][0] == currentPlayer && this.buttons[1][1] == currentPlayer && this.buttons[1][2] == currentPlayer){ //Middle row across
      alert("Player " + currentPlayer + " has won.");
      if (this.turnMonitor%2==1) { //Keeps track of the number of wins each player and displays updated score in showScore box
        this.xWins++;
      }else if (this.turnMonitor%2==0) {
        this.oWins++;
      }
      this.showScore="Player X: " +this.xWins+ "</br>" + "Player O: " +this.oWins+"";
      this.clearAll()

      // return true;
    }else if(this.buttons[2][0] == currentPlayer && this.buttons[2][1] == currentPlayer && this.buttons[2][2] == currentPlayer){ //Bottom row across
      alert("Player " + currentPlayer + " has won.");
      if (this.turnMonitor%2==1) { //Keeps track of the number of wins each player and displays updated score in showScore box
        this.xWins++;
      }else if (this.turnMonitor%2==0) {
        this.oWins++;
      }
      this.showScore="Player X: " +this.xWins+ "</br>" + "Player O: " +this.oWins+"";
      this.clearAll()

      // return true;
    }else if(this.buttons[0][0] == currentPlayer && this.buttons[1][0] == currentPlayer && this.buttons[2][0] == currentPlayer){ //Left column vertical
      alert("Player " + currentPlayer + " has won.");
      if (this.turnMonitor%2==1) { //Keeps track of the number of wins each player and displays updated score in showScore box
        this.xWins++;
      }else if (this.turnMonitor%2==0) {
        this.oWins++;
      }
      this.showScore="Player X: " +this.xWins+ "</br>" + "Player O: " +this.oWins+"";
      this.clearAll()

      // return true;
    }else if(this.buttons[0][1] == currentPlayer && this.buttons[1][1] == currentPlayer && this.buttons[2][1] == currentPlayer){ //Middle column vertical
      alert("Player " + currentPlayer + " has won.");
      if (this.turnMonitor%2==1) { //Keeps track of the number of wins each player and displays updated score in showScore box
        this.xWins++;
      }else if (this.turnMonitor%2==0) {
        this.oWins++;
      }
      this.showScore="Player X: " +this.xWins+ "</br>" + "Player O: " +this.oWins+"";
      this.clearAll()

      // return true;
    }else if(this.buttons[0][2] == currentPlayer && this.buttons[1][2] == currentPlayer && this.buttons[2][2] == currentPlayer){ //Right column vertical
      alert("Player " + currentPlayer + " has won.");
      if (this.turnMonitor%2==1) { //Keeps track of the number of wins each player and displays updated score in showScore box
        this.xWins++;
      }else if (this.turnMonitor%2==0) {
        this.oWins++;
      }
      this.showScore="Player X: " + this.xWins + "</br>" + "Player O: " + this.oWins + "";
      this.clearAll()

      // return true;
    }else if(this.buttons[0][0] == currentPlayer && this.buttons[1][1] == currentPlayer && this.buttons[2][2] == currentPlayer){ //Criss cross: top-left to bottom-right
      alert("Player " + currentPlayer + " has won.");
      if (this.turnMonitor%2==1) { //Keeps track of the number of wins each player and displays updated score in showScore box
        this.xWins++;
      }else if (this.turnMonitor%2==0) {
        this.oWins++;
      }
      this.showScore="Player X: " +this.xWins+ "</br>" + "Player O: " +this.oWins+"";
      this.clearAll()

      // return true;
    }else if(this.buttons[0][2] == currentPlayer && this.buttons[1][1] == currentPlayer && this.buttons[2][0] == currentPlayer){ //Criss cross: bottom-left to top-right
      alert("Player " + currentPlayer + " has won.");
      if (this.turnMonitor%2==1) { //Keeps track of the number of wins each player and displays updated score in showScore box
        this.xWins++;
      }else if (this.turnMonitor%2==0) {
        this.oWins++;
      }
      this.showScore="Player X: " +this.xWins+ "</br>" + "Player O: " +this.oWins+"";
      this.clearAll()

      // return true;
    }			
  }						

  clearAll(){ //Clears entire game board of any Xs and Os
    this.buttons = [[" ", " "," "],[" ", " "," "],[" ", " "," "]];
    // this.showTurn="It's O's turn.";
    //this.turnMonitor = 0;
  }

}
