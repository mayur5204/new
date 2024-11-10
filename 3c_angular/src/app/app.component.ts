import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Registration Form';
  isRegisterVisible = true;
  isLoginVisible = false;
  isLoggedIn = false;
  users: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialization logic without localStorage
  }

  showRegister() {
    this.isRegisterVisible = true;
    this.isLoginVisible = false;
  }

  showLogin() {
    this.isRegisterVisible = false;
    this.isLoginVisible = true;
  }

  registerUser(name: string, email: string, contact: string, address: string, password: string) {
    const user = { name, email, contact, address, password };
    this.users.push(user);
    console.log('User registered:', user);
    alert('User registered successfully!');
  }

  loginUser(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      console.log('User logged in:', user);
      alert('Login successful!');
      this.isLoggedIn = true;
    } else {
      alert('Invalid email or password');
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.showLogin();
  }
}
