import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  resultApi = null;
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loading = true;
    this.apiService.loadApi().subscribe((res) => {
      if (res) {
        this.resultApi = res;
        this.loading = false;
      }
      console.log(this.resultApi);
    });
  }
}
