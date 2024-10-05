import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../../shared/user-store/models/responses/user-response-model';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements OnInit {
  public userResponse$!: Observable<UserResponseModel>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userResponse$ = this.userService.getUserByEmail(
      'andi.dev94@gmail.com'
    );
  }
}
