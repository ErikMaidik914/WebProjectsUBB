import { Routes } from '@angular/router';
import { ChildCreateManyComponent } from './components/child-create-many/child-create-many.component';
import { ChildCreateComponent } from './components/child-create/child-create.component';
import { ChildListComponent } from './components/child-list/child-list.component';
import { ChildUpdateComponent } from './components/child-update/child-update.component';
import { LoginComponent } from './components/login/login.component';
import { ParentCreateManyComponent } from './components/parent-create-many/parent-create-many.component';
import { ParentCreateComponent } from './components/parent-create/parent-create.component';
import { ParentListComponent } from './components/parent-list/parent-list.component';
import { ParentUpdateComponent } from './components/parent-update/parent-update.component';

export const routes: Routes = [
  { path: 'parent-update/:id', component: ParentUpdateComponent },
  { path: 'child-update/:id', component: ChildUpdateComponent },
  { path: 'parent-list', component: ParentListComponent },
  { path: '', component: LoginComponent },
  { path: 'child-list', component: ChildListComponent },
  { path: 'child-create', component: ChildCreateComponent },
  { path: 'parent-create', component: ParentCreateComponent },
  { path: 'parent-create-many', component: ParentCreateManyComponent },
  { path: 'child-create-many', component: ChildCreateManyComponent },
  { path: '**', redirectTo: '' },
];
