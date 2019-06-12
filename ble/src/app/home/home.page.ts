import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private ble: BLE) {}

  scan() {
    this.ble.scan([], 5).subscribe(device => {
      console.log(device);
    });
  }
}
