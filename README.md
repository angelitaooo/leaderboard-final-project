# FinalProjectLeaderboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## For the project I used:

### Angular Material
`yarn add @angular/material @angular/cdk`

### ngx-datatable 
This is an Angular component used for the leaderboard table.
`yarn add @swimlane/ngx-datatable`

### angular-in-memory-web-api
To simulate the web API
`yarn add angular-in-memory-web-api`

## DEVELOPMENT PROCESS

1. Installed all the packages.
2. Created the template using ngx-datatable, for the leaderboard view, with sorting table methods and a filter input.
3. Created leaderboard module with one smart component (LeadetboardComponent) and two dumb components to show full and compact tables( FullTableComponent and CompactTableComponent) and we can switch between views usin a toggle button from angular material.
4. Created InMemoryDataService to simulate the web api.
5. Created a Student module to show the detail of each student with its respective route, also StudentComponent is a smart one, inside this component we can edit and delete the student info.
6. Created services to transport data to the components when needed (StudentService) this contains logic for get data, edit and delete students from web api.
7. Added a CreateStudentComponent inside student module to create a new student, use angular forms module and StudentService.
8. Visual cue component (StatusComponent) is created inside shared module, this one prints a chip tellling us if the student completes or not its homeworks.
9. In shared module I created a directive to higthlight the top of students based on the average grade.

## Project Management

I tried to create a branch per feature and then I merged it into master when it was ready.





