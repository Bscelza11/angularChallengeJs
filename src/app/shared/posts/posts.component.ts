import { Component, OnInit } from '@angular/core';
import { PostserviceService } from 'src/app/core/postservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  listPosts: any[] = [];
  id: string;
  
  
  constructor(private postService: PostserviceService,
              private router: Router) {
    this.id = '';
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.listPosts = data;
      console.log(this.listPosts)
      
    });
  }


  showComments(id: number): void {
    this.router.navigate(['/posts/'+ id + '/comments']);
  }

  deleteFirstPost(): void {
    this.listPosts.shift();
  }

  deletePost(id: number): void {   
    const eliminar = this.listPosts.findIndex(post => post.id === id)
    if(eliminar !== -1) {
      this.listPosts.splice(eliminar, 1);
    }
  }

  addPost(): void {
    const newId = this.listPosts.length + 1;
    const newPost = {title: 'title', body: 'lorem impsu', id: newId }

    this.listPosts.unshift(newPost);
  }



}
