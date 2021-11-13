import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, ViewChild } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastService: HotToastService){}
  
  normalToast() {
    this.toastService.show('Normal toast!')
  }
  infoToast() {
    this.toastService.info('Toasts could be ridiculously long and still look fine!')
  }
  loadingToast() {
    this.toastService.loading('Please wait...')
  }
  customToast() {
      this.toastService.show('toasts are customizable!',{
        dismissible:true,
        position:'bottom-left',
        icon: '✌🏼'
      })
    }
  darkToast() {
    this.toastService.show('Snackbar',{theme:'snackbar',position:'bottom-center'})
  }
  markupToast() {
    this.toastService.show(`you can put <b>HTML Markup</b> in a toast`)
  }
}
