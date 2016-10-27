import { Input, Directive, ElementRef } from '@angular/core';
import shave, { IShaveOptions }  from "shave";


@Directive({
  selector: "[shave]"
})
export class ShaveDirective {
  private _shaveOptions: IShaveOptions = {};
  private _height = 100;

  get shave(): IShaveOptions {
    return this._shaveOptions;
  }

  get shaveHeight(): number {
    return this._height;
  }

  @Input()
  set shave(val) {
    if( val ) {
     this._shaveOptions = val
    }
    this._runShave();
  }
  
  @Input()
  set shaveHeight(val) {
    this._height = val;
    this._runShave();
  }

  constructor( private ele : ElementRef ) {

  }

  private _runShave() {
    if( typeof this._height !== "number" ) {
      throw new Error("Height must be a number");
    }
    shave(this.ele.nativeElement, this.shaveHeight, this.shave);
  }
}