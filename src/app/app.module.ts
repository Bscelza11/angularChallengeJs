import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './shared/users/users.component';
import { AlbumsComponent } from './shared/albums/albums.component';
import { PostsComponent } from './shared/posts/posts.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CommentsComponent } from './shared/posts/comments/comments.component';
import { CommentComponent } from './shared/posts/comment/comment.component';
import { ButtonsComponent } from './shared/posts/buttons/buttons.component';
import { PostComponent } from './shared/posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumsComponent,
    PostsComponent,
    NavbarComponent,
    CommentsComponent,
    CommentComponent,
    ButtonsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
