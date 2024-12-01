import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChildService } from '../../service/child.service';
import { ParentService } from '../../service/parent.service';

@Component({
  selector: 'app-child-create',
  templateUrl: './child-create.component.html',
  styleUrls: ['./child-create.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ChildCreateComponent {
  child = { address: '', description: '', parentId: '' };
  parents: any[] = [];

  constructor(
    private childService: ChildService,
    private router: Router,
    private parentService: ParentService
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate([' ']);
    }
    this.parentService.getParents().subscribe((parents) => {
      this.parents = parents;
    });
  }

  createChild(): void {
    this.childService.createChild(this.child).subscribe(() => {
      this.router.navigate(['/child-list']);
    });
  }
}
