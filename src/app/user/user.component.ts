import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { User } from './user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  allRoles = [
    { name: 'SELLER', checked: false },
    { name: 'MANAGER', checked: false },
    { name: 'CLIENT', checked: false }
  ];

  appliedFilters: string[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(x => {
      this.user = x;
      this.initRolesChecked(x.roles);
    });
  }

  initRolesChecked(userRoles) {
    this.allRoles = this.allRoles.map(role => ({name: role.name, checked: userRoles.includes(role.name)}));
  }

  toggleSelection(index, value) {
    this.allRoles[index].checked = !this.allRoles[index].checked;
  }

  applyRoles(roles: any): void {
    const newRoles = this.allRoles.filter(this.isSelected).map(this.roleName);
    console.log('applying roles', newRoles);
    this.userService.changeRoles(newRoles);
  }

  roleName = (r) => r.name;
  isSelected = (r) => r.checked;

 }
