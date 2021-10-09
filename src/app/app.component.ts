import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Login XD9', url: 'login', icon: 'list' },
    { title: 'Profile XD10', url: 'profile', icon: 'list' },
    { title: 'Dashboard XD11', url: 'dashboard', icon: 'list' },
    { title: 'Personal Account XD12', url: 'personal-account', icon: 'list' },
    { title: 'Postings XD13', url: 'postings', icon: 'list' },
    { title: 'post Innerpage XD14', url: 'post-innerpage', icon: 'list' },
    
    // { title: 'Browse Listings', url: '/folder/browseListings', icon: 'list' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'How to Setup Contract', url: '/folder/setupContract', icon: 'book' }
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
