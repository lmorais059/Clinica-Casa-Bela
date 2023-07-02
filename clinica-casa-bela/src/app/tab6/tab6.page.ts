import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {

  randomAdvice!: string;

  constructor(private http: HttpClient) {     

}

getRandomAdvice() {
  const url = 'https://api.adviceslip.com/advice';
  return this.http.get(url);
}


fetchRandomAdvice() {
  this.getRandomAdvice().subscribe((response: any) => {
    this.randomAdvice = response.slip.advice;
  });
}

}