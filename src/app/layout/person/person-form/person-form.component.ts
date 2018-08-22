import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../models/person';
import { RequestService } from '../../../shared/services/request.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
  providers: [RequestService]
})
export class PersonFormComponent implements OnInit {

  @Input() edittata: EventEmitter<any>;
  @Output() update = new EventEmitter<Person>();
  @Output() cancel = new EventEmitter();
  editperson: Person;
  constructor(private  api: RequestService) { }

  ngOnInit() {
    this.editperson = new Person();
    if (this.edittata) {
      this.edittata.subscribe(data => {
        this.editperson = Object.assign({}, data.editperson);
      });
    }
  }
  onSubmit() {
  
  }
  
  onCancel() {
    this.cancel.emit();
  }

}
