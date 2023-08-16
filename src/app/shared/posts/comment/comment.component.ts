import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-comment',
    templateUrl: 'comment.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommentComponent  {

    @Input() comment: any = null;
    @Input() isMoveDisabled: boolean = false;

    @Output() deleteCommentEmiter: EventEmitter<number> = new EventEmitter<number>();
    @Output() moveCommentEmiter: EventEmitter<number> = new EventEmitter<number>();

}