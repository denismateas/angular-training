import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() iconType: string | undefined;
  @Output() onClick = new EventEmitter<MouseEvent>();
  public handleMouseEvent(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
