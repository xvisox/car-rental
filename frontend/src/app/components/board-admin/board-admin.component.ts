import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/data/data.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  error?: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
        this.error = false;
      },
      error: err => {
        console.log(err)
        this.error = true;
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }
}
