import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildService } from '../../service/child.service';
import { ParentService } from '../../service/parent.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ParentListComponent implements OnInit {
  parents: any[] = [];
  parentName = '';

  constructor(
    private parentService: ParentService,
    private router: Router,
    private childService: ChildService
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate([' ']);
    }
    this.parentService
      .getParentsByUserId(sessionStorage.getItem('user')!)
      .subscribe((parents) => {
        console.log(parents);
        parents.forEach((parent) => {
          let newParent;
          this.childService
            .getChildrenByParentId(parent.id)
            .subscribe((children) => {
              newParent = {
                ...parent,
                children: children.map((child) => child.name), //children.length pt nr de copii
              };
              this.parents.push(newParent);
            });
        });
      });
    this.parentName = '';
  }

  refresh(name: string): void {
    this.parentService.getParentsByName(name).subscribe((parents) => {
      this.parents = parents;
    });
  }

  refreshFrontend(name: string): void {
    this.parentService
      .getParentsByUserId(sessionStorage.getItem('user')!)
      .subscribe((parents) => {
        this.parents = parents;
        console.log(this.parents);
        console.log(name);
        if (name) {
          //to contain only the parent that contain the name
          this.parents = this.parents.filter((parent) =>
            parent.name.toLowerCase().includes(name.toLowerCase())
          );
        }
      });
  }

  createParent(): void {
    this.router.navigate(['/parent-create']);
  }

  createParentMany(): void {
    this.router.navigate(['/parent-create-many']);
  }

  updateParent(id: string): void {
    this.router.navigate(['/parent-update', id]);
  }

  deleteParent(id: string): void {
    this.parentService.deleteParent(id).subscribe((thing: any) => {
      console.log(thing);
      // remove the deleted parent from the list
      this.refreshFrontend('');
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate([' ']);
  }
}
