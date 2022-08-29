import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  move(e:any,p:any,c:any,n:any){
  var length=c.value.length;
  var maxlength=c.getAttribute("maxlength");
  if(length==maxlength){
    if(n !=''){
      n.focus(); 

    }
 }
     if(e.key==="Backspace") {
      if(p !=''){
        p.focus();

      }
      
     }
  }

}
