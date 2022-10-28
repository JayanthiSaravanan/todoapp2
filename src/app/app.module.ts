import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list-Tasks/list-tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { RegisterComponent } from './register/register.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCourseComponent } from './add_course/add-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ProjectComponent } from './project/project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCourse1Component } from './add-course1/add-course1.component';
import { EditCourse1Component } from './edit-course1/edit-course1.component';
import { ListCourse1Component } from './list-course1/list-course1.component';
import { AddCategory2Component } from './add-category2/add-category2.component';
import { AddCategory1Component } from './add-category1/add-category1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ListComponent,
    RegisterComponent,
    AddCategoryComponent,
    CategoriesComponent,
    AddCourseComponent,
    ViewCourseComponent,
    ListCourseComponent,
    ViewCategoryComponent,
    EditCategoryComponent,
    EditCourseComponent,
    ProjectComponent,
    ListProjectComponent,
    EditProjectComponent,
    ViewProjectComponent,
    FeatureComponent,
    FeatureListComponent,
    AddCourse1Component,
    EditCourse1Component,
    ListCourse1Component,
    AddCategory2Component,
    AddCategory1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
