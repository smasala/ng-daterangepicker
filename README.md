Note
---
Forked from: https://github.com/jkuri/ng-daterangepicker and
provides extra features (time edit) and bug fixes

Angular DateTimeRange Picker
---

This date range picker was heavily inspired by PayPal's datepicker as seen on website.

Demo: http://ng-daterangepicker.jankuri.com

### Installation

```sh
npm install ng-daterangepicker2 --save
```

or

```sh
yarn add ng-daterangepicker2 --save
```

### Example

```ts
import { NgDateRangePickerModule } from 'ng-daterangepicker';

// app.module.ts
@NgModule({
  ...
  imports: [ ..., NgDateRangePickerModule, ... ],
  ...
})
export class AppModule { }
```

```ts
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  options: NgDateRangePickerOptions;  // = {} see NgDateRangePickerOptions

}
```

```html
<!-- app.component.html -->
<ng-daterangepicker [(ngModel)]="value" [options]="options"></ng-daterangepicker>
```

### Configuration

```ts
export interface NgDateRangePickerOptions {
  theme?: 'default' | 'green' | 'teal' | 'cyan' | 'grape' | 'red' | 'gray';
  range?: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly';
  dayNames?: string[];
  presetNames?: string[];
  outputFormat?: string;
  startOfWeek?: number;
  showTime?: boolean;
  timeFormat?: 'HH:mm:ss' | 'HH:mm';
  container?: false | string;
}
```

### Running the demo

```sh
git clone https://github.com/jkuri/ng-daterangepicker.git --depth 1
cd ng-daterangepicker
npm start
```

### Licence

MIT
