import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css'],
})
export class DisclaimerComponent {
  @Output() hideDisc = new EventEmitter();

  hideDisclaimer(event: any) {
    this.hideDisc.emit(false);
  }
}
