import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class GenerateComponent implements OnInit {


  windowWidth: string | undefined;
  showSplash: boolean=true;


  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.windowWidth='-'+ window.innerWidth + 'px';
      setTimeout(() =>{
        this.showSplash=!this.showSplash;
      },500

      );

    },3000);


    
  }

}
