import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.scss'],
})
export class PostingsComponent implements OnInit {

  public posts = [
    {
      title: 'Toyota 4*4 wheel for sale with 33000km locate in delhi',
      timeAge: 'Published a day before',
      location: 'saith nagar delhi',
      leadCount: 2,
      chatCount: 4,
      status: 'Live'
    },
    {
      title: 'Toyota 4*4 wheel for sale with 33000km locate in delhi',
      timeAge: 'Published a day before',
      location: 'saith nagar delhi',
      leadCount: 1,
      chatCount: 0,
      status: 'Delete'
    },
    {
      title: 'Toyota 4*4 wheel for sale with 33000km locate in delhi',
      timeAge: 'Published a day before',
      location: 'saith nagar delhi',
      leadCount: 1,
      chatCount: 0,
      status: 'Stopped'
    },
    {
      title: 'Toyota 4*4 wheel for sale with 33000km locate in delhi',
      timeAge: 'Published a day before',
      location: 'saith nagar delhi',
      leadCount: 1,
      chatCount: 0,
      status: 'Completed'
    }
  ]
  constructor() { }

  ngOnInit() {}


}
