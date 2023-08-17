import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: any = null;

  @Output() showCommentEmiter: EventEmitter<number> = new EventEmitter();
  @Output() deletePostEmiter: EventEmitter<number> = new EventEmitter();

}
