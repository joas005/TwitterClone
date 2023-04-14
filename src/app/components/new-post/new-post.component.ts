import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent {
  tweetMessage: string = ""
  tweetMaxLength: number = 240
  tweetChar: number = 0

  constructor (private service:MessagesService) {

  }

  sendTweet () {
    if (this.tweetChar > 6) {
      this.service.addMessage(this.tweetMessage)
      this.tweetMessage = ""
      this.tweetChar = 0
      alert("Tweet enviado.")
    } else {
      alert("Seu tweet não atinge a quantidade mínima de 6 caractéries!")
    }
    
  }

  changeTweet () {
    this.tweetChar = this.tweetMessage.length
  }
}

