import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public scanResult = '';
  // private mac = '79:60:08:43:0A:7A';
  // private mac = '51:6A:23:C4:3C:49';
  private mac = '4F:9F:88:74:6B:DD';

  constructor(private ble: BLE) {}

  scan() {
    this.scanResult = '';
    this.ble.scan([], 5).subscribe(device => {
      this.scanResult = `${JSON.stringify(device)}.${this.scanResult}`;
      const adData = new Uint8Array(device.advertising);
      console.log(device);
    });
  }

  async connect() {
    console.log('Connect');
    this.ble.connect(this.mac).subscribe(x => {
      console.log(x);
    });
  }

  async disconnect() {
    console.log('disconnect');
    const x = await this.ble.disconnect(this.mac);
    console.log(x);
  }
}
