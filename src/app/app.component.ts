import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './radbox/header/header.component';
import { KeypadComponent } from './radbox/keypad/keypad.component';
import { UserComponent } from './user/user.component';
import { provideHttpClient } from '@angular/common/http';

/*
ng build --base-href "https://kennethdeere.github.io/RadiationBox/" && npx angular-cli-ghpages --dir=docs && git add . && git commit -m "changes" && git push origin main
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    KeypadComponent,
    UserComponent,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent {}
