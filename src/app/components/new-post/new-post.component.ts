import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {
  tweetMassage: string = ""
  tweetMaxLength: number = 240
  tweetChar: number = 0

  sendTweet () {
    if (this.tweetChar > 6) {
      alert("Tweet enviado.")
    } else {
      alert("Seu tweet não atinge a quantidade mínima de 6 caractéries!")
    }
    
  }

  changeTweet () {
    this.tweetChar = this.tweetMassage.length
  }
}

