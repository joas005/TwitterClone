import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { TweetsComponent } from './components/tweets/tweets.component';

import { MessagesService } from './services/messages.service';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		NewPostComponent,
		TweetsComponent,
  AvatarComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [MessagesService],
	bootstrap: [AppComponent],
})
export class AppModule {}
