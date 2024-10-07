import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseModel } from '../../shared/user-store/models/responses/user-response-model';
import { CommonModule, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { IUserState } from '../../shared/user-store/user.state';
import { userActions } from '../../shared/user-store/user.actions';
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
    this.store.dispatch(
      userActions.getUserByEmail({ email: 'andi.dev94@gmail.com' })
    );

    this.userResponse$ = this.store.select(selectGetUserByEmail);
  }
}
