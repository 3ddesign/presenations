import { Component, OnInit, HostListener } from '@angular/core';

import { FetchDataService } from '../service/fetch-data/fetch-data.service';
import { PortfolioService, PortfolioData } from '../service/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
    height: string = '400px';
    arrowSize: string = '30px';
    showArrows: boolean = true;
    disableSwiping: boolean = false;
    autoPlay: boolean = false;
    backgroundSize: string = 'cover';
    backgroundPosition: string = 'center center';
    backgroundRepeat: string = 'no-repeat';
    showDots: boolean = true;
    dotColor: string = '#fe6700';
    showCaptions: boolean = true;
    captionColor: string = '#FFF';
    captionBackground: string = 'rgba(0, 0, 0, .58)';
    lazyLoad: boolean = false;
    hideOnNoSlides: boolean = false;
    width: string = '100%';
    portfolioData: PortfolioData;
    constructor(private fetchDataService: FetchDataService,
                private portfolioService: PortfolioService) { }

    ngOnInit() {
      this.getPortfolioData();
      this.sizingSlider();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.sizingSlider();
    }

    sizingSlider() {
      if (window.innerWidth > 991) {
        this.height = '400px';
      } else if (window.innerWidth > 410) {
        this.height = '300px';
      } else {
        this.height = '150px';
      }
    }

    getPortfolioData() {
      this.fetchDataService.changeMessage(true);
      this.portfolioService.getPortfolioData()
        .subscribe((data: PortfolioData) => {
          this.portfolioData = data;
          this.fetchDataService.changeMessage(false);
        });
    }

}
