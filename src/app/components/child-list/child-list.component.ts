import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildService } from '../../service/child.service';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ChildListComponent implements OnInit {
  parentName = '';
  description = '';
  address = '';
  children: any[] = [];

  start = 0;
  end = 0;

  constructor(private childService: ChildService, private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate([' ']);
    }
    this.childService.getChildren().subscribe((children) => {
      this.children = children;
    });
    this.description = '';
    this.address = '';
  }

  refresh(description: string): void {
    this.childService
      .getChildrenByDescription(description)
      .subscribe((children) => {
        this.children = children;
      });
  }

  refreshFrontend(description: string): void {
    this.childService.getChildren().subscribe((children) => {
      this.children = children;
      console.log(this.children);
      console.log(description);
      //console.log(address);
      if (description) {
        //to contain only the child that contain the description
        this.children = this.children.filter((child) =>
          child.description.toLowerCase().includes(description.toLowerCase())
        );
      }
    });
  }

  //-----------

  createChild(): void {
    this.router.navigate(['/child-create']);
  }

  createChildMany(): void {
    this.router.navigate(['/child-create-many']);
  }

  updateChild(id: string): void {
    this.router.navigate(['/child-update', id]);
  }

  deleteChild(id: string): void {
    this.childService.deleteChild(id).subscribe(() => {
      this.refreshFrontend('');
    });
  }

  logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
