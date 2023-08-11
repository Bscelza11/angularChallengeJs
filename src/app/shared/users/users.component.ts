import { Component, OnInit } from '@angular/core';
import { PostserviceService } from 'src/app/core/postservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers: any[] = [];

  constructor(private postService: PostserviceService){}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.postService.getUsers().subscribe(data => {
      this.listUsers = data;
      console.log(this.listUsers);
    })
  }
}
