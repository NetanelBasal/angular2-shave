import { ElementRef } from '@angular/core';
import { IShaveOptions } from "shave";
export declare class ShaveDirective {
    private ele;
    private _shaveOptions;
    private _height;
    shave: IShaveOptions;
    shaveHeight: number;
    constructor(ele: ElementRef);
    private _runShave();
}
