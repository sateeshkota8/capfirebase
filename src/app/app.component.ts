import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){
    // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5SP2UBlRUF3DqTQFOAkofth5cYpBFMMw",
    authDomain: "myproject-12cd7.firebaseapp.com",
    databaseURL: "https://myproject-12cd7.firebaseio.com",
    projectId: "myproject-12cd7",
    storageBucket: "myproject-12cd7.appspot.com",
    messagingSenderId: "125783193277"
  };
  firebase.initializeApp(config);
  }

    
  
   

  
}
