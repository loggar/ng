import { Component } from '@angular/core';
import { SampleFormObj } from './SampleFormObj';

@Component ({
   selector: 'sample-form',
   templateUrl: './sample-form.component.html'
})

export class SampleFormComponent {
   model = new SampleFormObj(1, 'SampleA');
}
