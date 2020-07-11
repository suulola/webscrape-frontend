import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { IRequest } from './model/irequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private apiService: ApiService) { }

  title = 'scrape';
  displayData = {};
  isLoading = false;
  isFirstTimeUser = true;
  err: string;

  searchUrl = async (url): Promise<void> => {
    this.err = '';
    try {
      if (url.value.length < 4 ) {
        this.err = 'Enter a valid url';
        return;
      }

      this.isLoading = true;
      console.log('searching....');
      const formData: IRequest = { url: url.value }
      this.apiService.scrapeWebPage(formData)
        .subscribe(response => {
         
          if (response.err !== null) {
            this.err = response.err;
            this.isLoading = false;
            return;
          } else {
            this.displayData = response;
            this.isLoading = false;
            this.isFirstTimeUser = false;

          }
          console.log(this.displayData);
        });




    } catch (err) {
      console.log('console.error');
      console.log(err);
      this.isLoading = false;
      this.err = 'Error displaying data. Please try again';
    }

  }

}
