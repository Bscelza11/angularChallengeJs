import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './shared/posts/posts.component';
import { UsersComponent } from './shared/users/users.component';
import { AlbumsComponent } from './shared/albums/albums.component';
import { CommentsComponent } from './shared/posts/comments/comments.component';

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id/comments', component: CommentsComponent },
  {path: 'users', component: UsersComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: '**', redirectTo: 'posts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
