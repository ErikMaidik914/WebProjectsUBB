import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ParentService } from '../../service/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent-create-many.component.html',
  styleUrls: ['./parent-create-many.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ParentCreateManyComponent {
  parents: { name: string; date: string; userId: string }[] = [];
  parentName = '';
  parentDate = '';
  userId = '';

  ngOnInit(): void {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigate([' ']);
    }
    this.userId = sessionStorage.getItem('user')!;
  }

  constructor(private parentsService: ParentService, private router: Router) {}

  saveParent() {
    this.parents.push({
      name: this.parentName,
      date: this.parentDate,
      userId: this.userId,
    });
    this.parentName = '';
    this.parentDate = '';
  }

  submitParents() {
    this.parentsService.addManyParents(this.parents).subscribe((response) => {
      console.log(response);
      this.parents = [];
      this.parentName = '';
      this.parentDate = '';
    });
  }
}
