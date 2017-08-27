import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransferState } from '../../modules/transfer-state/transfer-state';

@Component({
  selector: 'home-view',
  templateUrl: './home-view.html',
  styleUrls: ["./style.scss"]
})
export class HomeView implements OnInit {
  public message: string;

  constructor(private transferState: TransferState) {}

  ngOnInit() {
    this.message = this.transferState.get('message');
  }
}
