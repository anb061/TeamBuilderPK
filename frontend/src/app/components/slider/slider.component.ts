import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliderValue: number = 0;
@Input() total: number = 0;
@Output() result =new EventEmitter<number>();
  limite:number = 0;
  constructor() {}
  ngOnInit(): void {
  }

  onSliderChange(event: Event): void {
    const slider = event.target as HTMLInputElement;
    this.limite = 510-this.total;

    if(this.limite>=Number(slider.value)&&this.limite>0){
     this.sliderValue = Number(slider.value);
    }else{
      if(this.limite<0){
        this.limite = 0;
      }
      this.sliderValue = this.limite;
    }
    this.result.emit(this.sliderValue);
  }

  onTextInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.limite = 510-this.total;
    if(this.limite>=Number(input.value)&&this.limite>0){
      this.sliderValue = Number(input.value);
    }else{
      if(this.limite<0){
        this.limite = 0;
      }
      this.sliderValue = this.limite;
    }
    this.result.emit(this.sliderValue);
  }


}
