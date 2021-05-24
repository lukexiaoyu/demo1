import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  weiyi = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  change() {
    //   if (this.weiyi){
    //     this.weiyi=''
    //
    //   }
    //   else{
    //     this.weiyi='transform: translate(50px,50px)'
    //   }
    // }
    this.weiyi = this.weiyi ? '' : 'animation-name: demo1;animation-duration: 2s;'

  }
}
