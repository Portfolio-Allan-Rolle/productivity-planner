import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'productivity-planner';
  readonly #authService = inject(AuthService);

  onLogin() {
    const email = 'john.doe@gmail.com';
    const password = 'azerty';
    this.#authService
      .login(email, password)
      .pipe(
        switchMap((response) => {
          const { email, localId, idToken } = response;
          return this.#authService.save(email, localId, idToken);
        })
      )
      .subscribe(console.log);
  }
}
