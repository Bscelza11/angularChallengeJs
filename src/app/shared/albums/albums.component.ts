import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { PostserviceService } from 'src/app/core/postservice.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any[] = [];
  users: any[] = [];
  albumsToShow: any[] = [];

  constructor(private postService: PostserviceService) {

  }

  ngOnInit(): void {
    /*this.getAlbums();
    this.getUsers();
    setTimeout(()=> {
      this.createNewList();
    }, 3000)*/

    /*forkJoin([
      this.postService.getAlbums(),
      this.postService.getUsers()
    ]).subscribe(data => {
      this.listAlbums = data[0];
      this.listUsers = data[1];
      this.createNewList();
    });*/

    forkJoin([
      this.postService.getAlbums(),
      this.postService.getUsers()
    ]).pipe(
      map((data: any[]) => {
        this.albums = data[0];
        this.users = data[1];
        return this.createNewList()
      })
    ).subscribe(data =>  this.albumsToShow = data)
   
   
  }

  getAlbums(): void {
    this.postService.getAlbums().subscribe(data => {
      this.albums = data;
    })

  }

  getUsers(): void {
    this.postService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  createNewList() {
     return this.albums.map(album => {
      const user = this.users.find(user => user.id === album.userId)
      return {...album, name: user.name}        
    })
    
  }




}
