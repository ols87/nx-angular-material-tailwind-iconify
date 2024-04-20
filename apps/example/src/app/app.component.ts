import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'example-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <span>ExampleAppComponent</span>
    </mat-toolbar>

    <div id="helloWorld" class="p-4">Hello World</div>

    <div id="icon" class="px-4">
      <i class="icon-[solar--minus-circle-outline]"></i>
    </div>

    <router-outlet></router-outlet>
  `,
})
export class ExampleAppComponent {}
