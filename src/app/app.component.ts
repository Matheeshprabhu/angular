import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ServerComponent, SuccessComponent, WarningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  submissionStatus = false

  password = "pass"
  passwordMatchStatus = false

  getPassword(event : Event){
    if (this.password == (<HTMLInputElement>event.target).value){
        this.passwordMatchStatus = true
    } else{
      this.passwordMatchStatus = false
    }
  }
  getPasswordMatchStatus(){
    return this.passwordMatchStatus
  }
}
