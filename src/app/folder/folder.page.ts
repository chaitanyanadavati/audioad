import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public cards: any[] = [
    {
      title: 'Data Science Trainer Available',
      location: 'Kukatpally',
      image: '',
      publishedDate: 'published a day before'
    },
    {
      title: 'AI Trainer Available',
      location: 'Madhapur',
      image: '',
      publishedDate: 'published a day before'
    },
    {
      title: 'ML Trainer Available',
      location: 'Kondapur',
      image: '',
      publishedDate: 'published a day before'
    },
    {
      title: 'React Trainer Available',
      location: 'KPHB',
      image: '',
      publishedDate: 'published a day before'
    },
  ]

  constructor(private activatedRoute: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


  public navigateTo(to:string): void {
    this.router.navigate([to]);
  }

}
