import {Component} from "angular2/core";
import {Employee} from './employee.interface';
import {EmployeeContactService} from './employee-contact.service';

@Component({
  templateUrl :'/app/employee/employee-contactlist.html',
  providers: [EmployeeContactService]      
})

export class EmployeeContactListComponent {

  private employeeContacts : Observable<Employee>; 

  constructor(private _employeeContactService: EmployeeContactService) { }

  ngOnInit() {
    this.getEmployeeContacts();
  }

  private getEmployeeContacts() {
    this.employeeContacts = this._employeeContactService.getEmployeeContacts();
  }
}

