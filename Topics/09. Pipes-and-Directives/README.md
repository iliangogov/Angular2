<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->

# Pipes and Directives
##  In Angular 2

<div class="signature">
    <p class="signature-course">Angular 2</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

# Pipes Overview

- What are pipes?
  - A way to transform the models
    - i.e. format a date, create strings to uppercase
    - sort, filter, etc...


#   Built-in Pipes

- There are a number of built-in pipes
  - date, uppercase, etc...
- How to use pipes?
  - Use the predefined operator `|`:

    ```html
    <h1>My birthday is on {{birthday}}</h1>
    ```

    - Prints something like `Tue Dec 13 2016 09:43:44 GMT+0200 (EET)`
  - There is a pipe for formating date:

    ```html
    <h1>My birthday is on {{birthday | date}}</h1>
    ```
    - Prints something like `Dec 13, 2016`

#   Date Pipe
##  [Live Demo](http://)

# Other built-in pipes

- `uppercase` prints the strings UPPERCASE
- `lowercase` prints the strings lowercase
- `currency` prints a number as currency
  - Needs internatiolization polyfill
- `decimal` formats numbers

#   Other Built-in Pipes
##  [Live Demo](http://)

<!-- section start -->

# Custom Pipes

- Angular 2 provides a way to create custom pipes
  - Define a custom behavior
- How?
  - Use the `@Pipe` decorator and implement `PipeTransform` interface

# Custom Pipe for filtering Superheroes by powers

- _Example:_

```
@Pipe({name: "filterByPower"})
export FilterByPowerPipe implements PipeTransform {
  transform(superheroes: any[], power: string){
    return superheroes.filter(sh => sh.powers.includes(power));
  }
}
```

# Custom Pipes
##  Live Demo

<!-- <img class="slide-image" showInPresentation="true"  src="imgs/angular.png" style="height:40%; left:75%; top:50%; border-radius: 10px;" /> -->

# Questions
##  Pipes and Directives
<!-- <img class="slide-image" showInPresentation="true"  src="imgs/questions.jpg" style="height:40%; left:30%; top:30 border-radius: 10px;" /> -->

<!-- attr: { showInPresentation: true, hasScriptWrapper: true} -->
# Free Training @ Telerik Academy

- Angular 2 Course
  - [Angular 2](http://academy.telerik.com/student-courses/web-design-and-ui/spa-applications-with-angular2/about)
- Telerik Software Academy
  - [telerikacademy.com](https://telerikacademy.com)
- Telerik Academy @ Facebook
  - [facebook.com/TelerikAcademy](https://facebook.com/TelerikAcademy)
- Telerik Academy Learning System
  - [telerikacademy.com](https://telerikacademy.com)
