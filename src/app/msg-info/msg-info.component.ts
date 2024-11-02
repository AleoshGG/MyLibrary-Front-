import { Component, Input } from '@angular/core';

@Component({
  selector: 'msg-info',
  templateUrl: './msg-info.component.html',
  styleUrl: './msg-info.component.css',
  standalone: true,
})
export class MsgInfoComponent {
  @Input() msg: string = 'Este es el mensaje'
}
