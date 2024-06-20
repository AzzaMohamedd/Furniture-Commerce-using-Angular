import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

  constructor(private router:Router) {    
  }

  logout(){
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    this.router.navigate(["/loginregister"]);
  }

}
