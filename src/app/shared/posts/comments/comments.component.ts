import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from 'src/app/core/postservice.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  listComments: any[] = [];
  id: number;

  constructor(private route: ActivatedRoute,
    private postService: PostserviceService) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.getComments();

  }

  getComments(): void {
    this.postService.getComments(this.id).subscribe(data => {
      this.listComments = (data)
    })
  }

  deleteComment(id: number): void {
    const eliminar = this.listComments.findIndex(comment => comment.id === id)
    if (eliminar !== -1) {
      this.listComments.splice(eliminar, 1);
    }
  }
  mayorAmenor(): void {
    this.listComments.sort((a, b) => b.id - a.id)
  }

  menorAmayor(): void {
    this.listComments.sort((a, b) => a.id - b.id);
  }

  moveComment(id: number): void {

    const idComment = this.listComments.findIndex(item => item.id === id)
    if(idComment == 0) return ;
    const idPosition = this.listComments[idComment];
    this.listComments[idComment] = this.listComments[idComment - 1];
    this.listComments[idComment - 1] = idPosition;


  }

}


