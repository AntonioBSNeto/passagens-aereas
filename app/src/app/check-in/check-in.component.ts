import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show_modal(event: Event){
    const confirm_button = document.querySelector<HTMLElement>(".check-in-confirm");
    const modal_window = document.querySelector<HTMLElement>(".check-in-modal");

    const value = (<HTMLInputElement>event.target).value;
   
    if (confirm_button !== null){
      (<HTMLInputElement>confirm_button).value = value;
    } 
    
  
    //console.log((<HTMLInputElement>confirm_button).value);
    if (modal_window !== null && (<HTMLInputElement>event.target).style.backgroundColor != 'gray') {
      modal_window.style.display = 'block';
    }
    

  }

  hidden_modal_confirm(event: Event){
    const buttons_first_confirm = document.querySelectorAll(".check-in-button-get");
    const modal_window = document.querySelector<HTMLElement>(".check-in-modal");

    buttons_first_confirm.forEach((item, ind) => {
      if((<HTMLInputElement>item).value == (<HTMLInputElement>event.target).value){
        (<HTMLElement>item).style.backgroundColor = 'gray';  
      }
    });

    console.log((<HTMLInputElement>event.target).value);

    if (modal_window !== null) {
      modal_window.style.display = 'none';
    }
    
  }

  hidden_modal_cancel(event: Event){

    const modal_window = document.querySelector<HTMLElement>(".check-in-modal");

    if (modal_window !== null) {
      modal_window.style.display = 'none';
    }
    
  }

}
