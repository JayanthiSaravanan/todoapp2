import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddCategory1Component } from './add-category1/add-category1.component';
import { AddCourse1Component } from './add-course1/add-course1.component';
import { AddCourseComponent } from './add_course/add-course.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditCourse1Component } from './edit-course1/edit-course1.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureComponent } from './feature/feature.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ListCourse1Component } from './list-course1/list-course1.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ListComponent } from './list-Tasks/list-tasks.component';
import { ProjectComponent } from './project/project.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},

  {path:"login",component:LoginComponent},

  {path:"register",component:RegisterComponent},

  {path:"list",component:ListComponent},

  {path:"add-course",component:AddCourseComponent},

  {path:"add-category",component:AddCategoryComponent},

  {path:"categories",component:CategoriesComponent},

  {path:"view-course/:id",component:ViewCourseComponent},

  {path:"list-course",component:ListCourseComponent},

  {path:"view-category/:id",component:ViewCategoryComponent},

  {path:"edit-category/:id",component:EditCategoryComponent},

  {path:"edit-course/:id",component:EditCourseComponent},

  {path:"project",component:ProjectComponent},

  {path:"edit-project/:id",component:EditProjectComponent},

  {path:"list-project",component:ListProjectComponent},

  {path:"view-project/:id",component:ViewProjectComponent},

  {path:"projects/:id/add_feature",component:FeatureComponent},

  {path:"feature-list",component:FeatureListComponent},

  {path:"add-course1",component:AddCourse1Component},

  {path:"edit-course1/:id", component:EditCourse1Component},

  {path:"list-course1",component:ListCourse1Component},

  {path:"add-category1",component:AddCategory1Component},

  {path:'',redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
