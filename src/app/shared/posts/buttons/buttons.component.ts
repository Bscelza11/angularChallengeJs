import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl: 'buttons.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonsComponent {
    @Input() iconLeft: string = '';
    @Input() iconRight: string = '';
    @Input() isDisabledLeft: boolean = false;
    @Input() isDisabledRight: boolean = false;

    @Output() onLeft: EventEmitter<void> = new EventEmitter<void>();
    @Output() onRight: EventEmitter<void> = new EventEmitter<void>();
}