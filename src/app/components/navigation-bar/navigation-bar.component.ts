import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/api/user.service';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../../shared/user-store/models/responses/user-response-model';
import { CommonModule, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { IUserState } from '../../shared/user-store/user.state';
import { selectGetUserByEmail } from '../../shared/user-store/user.selectors';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements OnInit {
  public userResponse$: Observable<UserResponseModel | null> | null = null;
  constructor(private store: Store<IUserState>) {}

  ngOnInit(): void {
    this.userResponse$ = this.store.select(selectGetUserByEmail);
  }
}
