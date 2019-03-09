import { Component } from "@angular/core";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
    selector:'transformation',
    templateUrl:'./transformation.component.html',
    styleUrls:['./transformation.component.css']
})

export class TransformationComponent{
    /** timePeriods = [
        'Source',
        'Stream',
        'Transform',
        'Target'
      ];
    
      drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
      }
      **/
}