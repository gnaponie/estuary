import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {

  availableResources: Array<any>;
  selectedResource: string;
  selectedUID: string;
  errorMsg: string;

  constructor(private router: Router) {
    // Set the the background image
    document.body.className = 'searchBg';
    this.availableResources = [
      {name: 'advisory', displayName: 'Advisory'},
      {name: 'bugzillabug', displayName: 'Bugzilla Bug'},
      {name: 'kojibuild', displayName: 'Build'},
      {name: 'distgitcommit', displayName: 'Commit'}
    ];
    // Default the select element to be the first key
    this.selectedResource = 'advisory';
  }

  ngOnDestroy() {
    // Remove the background image
    document.body.className = '';
  }

  navigateToStory() {
    if (this.selectedResource && this.selectedUID) {
      this.router.navigate(['/', this.selectedResource, this.selectedUID.trim()]);
    } else {
      this.errorMsg = 'Please enter a search value';
    }
  }
}
