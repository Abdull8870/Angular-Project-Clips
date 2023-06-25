import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private visible=false;

  constructor() {

  }

  isModalVisible(){
    return this.visible;
  }

  toggalModal(){
    this.visible=!this.visible;
  }



}
