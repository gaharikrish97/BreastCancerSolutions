import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent  {
  constructor(private http: HttpClient){}
  name = 'Angular';
  messages: string[] = [];//array that hold the record of each string in chat
  lastUserMessage = ""; //keeps track of the most recent input string from the user
  botMessage = "";//var keeps track of what the chatbot is going to say
  botName = "Pink bot"; //name of the chatbot
  talking = true; //when false the speach function doesn't work
  search:string = '';
newEntry(message:string){
  this.clearSearch();
  if(message!=null){
    var Question={"Question":message}
    this.http.post<any>('http://13.127.44.253:8080/ChatBox/chat', Question).subscribe(result => {
      alert(JSON.stringify(result));
      });
    console.log("checko",document.getElementById("chatbox").nodeValue);
    this.lastUserMessage=message;
    this.messages.push("<b>User: </b> "+this.lastUserMessage);
    //this.Speech(this.lastUserMessage);  //says what the user typed outloud
    document.getElementById("chatbox").nodeValue = "";
    this.chatBotResponse();
    this.messages.push("<b>PinkBot: </b> " + this.botMessage);
    this.Speech(this.botMessage);
    
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 20; i++) {
      if (this.messages[this.messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = this.messages[this.messages.length - i];
    }
  }
}

  clearSearch() {
    console.log("search",this.search)
    this.search = ' ';
    console.log("searchy",this.search)
  }

chatBotResponse(){
  
  this.talking=true;
  this.botMessage="I couldn't understand";
  var greetings:string[] = ['Hi', 'hi','hello','Hello','hey'];
    if (greetings.includes(this.lastUserMessage)) {
    const hi = ['hi','howdy','hello']
    this.botMessage = hi[Math.floor(Math.random()*(hi.length))];
  }

  var chatBotName:string[] = ['name', 'what is your name','what is your name?',
  'What is your name ?','What is your name'];
  if (chatBotName.includes(this.lastUserMessage)) {
    this.botMessage = 'My name is ' + this.botName;
  }

  var chatBotName:string[] = ['Potter', 'potter','who is vignesh',
  'who is Vignesh'];
  if (chatBotName.includes(this.lastUserMessage)) {
    this.botMessage = "Number one dubakoor in the Universe!!";
  }
}

Speech(say:string) {
  if ('speechSynthesis' in window && this.talking) {
   var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}

}