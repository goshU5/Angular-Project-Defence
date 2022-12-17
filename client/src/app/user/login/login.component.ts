import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { handleError } from 'src/app/shared/errorHandler';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

 
  constructor(private userService: UserService, private router: Router){

  }
  errors: string | undefined = undefined;
  login(form: NgForm): void{
    this.userService.login(form.value).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.errors = handleError(err.error?.error)
      }
    })
  }
}
