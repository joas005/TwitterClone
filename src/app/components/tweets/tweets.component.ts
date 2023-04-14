import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-tweets',
	templateUrl: './tweets.component.html',
	styleUrls: ['./tweets.component.css'],
})
export class TweetsComponent {
	@Input() tweetMessage: string = '';
}
