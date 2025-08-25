import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { Storage } from 'src/app/shared/services/storage/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  public users: IUser[] = [];

  constructor(private readonly storageSrv: Storage, private readonly router: Router) {}

  ngOnInit() {
    this.users = this.storageSrv.get<IUser[]>('users') || [];
    console.log(this.users);
  }

  public goToDetail(id: IUser['uuid']) {
    this.router.navigate(['/detail', id]);
  }

}
