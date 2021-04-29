import { Component, ElementRef, OnInit, HostListener, ViewChild} from '@angular/core';
import SlDetails from 'dist/shoelace/assets/shoelace/components/details/details';

import { DetailsService } from '../shared/details.background.service';
import { IAttachments, IDetails } from '../shared/details.model';

@Component({
  selector: 'app-sl-details',
  templateUrl: './sl-details.component.html',
  styleUrls: ['./sl-details.component.scss']
})
export class SlDetailsComponent implements OnInit {
  details: IDetails[] | undefined
  showAge:any;
  candidateAge:number = 0;
  isDisabled:boolean = false;
  selectAll:boolean = false;
  availableAttachments: IAttachments[] = []
  moreDetails:boolean = true

  isOpen:string = ''
  constructor(private detailsService: DetailsService, public el:ElementRef) {

   };

   @HostListener('sl-show', ['$event']) doSomething(event:any) {
     console.log('inside the showing host');

     const container = document.querySelector('.details-group-example');
      container?.querySelectorAll('sl-details').forEach((details: SlDetails) => {
        details.open = event?.target === details;
      })
   };

   @HostListener('sl-hide') doSomethingElse() {
     console.log('inside the hiding host')
   }

  ngOnInit() {
    this.detailsService.getDetails().subscribe(details => {
      this.details = details;
    })
  }

  onClick() {
    this.isDisabled = !this.isDisabled
  }

  calcuateAge(value:any) {
    let dob = new Date(value)
    let month_diff = Date.now() - dob.getTime()
    let age_dt = new Date(month_diff)
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970)
    this.candidateAge = age
    return this.candidateAge
  }

  toggleSelectAll() {
    if (this.selectAll) {
      this.selectAll = false
    } else {
      this.selectAll = true
    }
  }

  openProfile() {
    this.isOpen === 'open' ? this.isOpen = '' : this.isOpen = 'open'
  }

  showMore() {
    this.moreDetails === true ? this.moreDetails = false: this.moreDetails = true
  }

  /*
  downloadAll(link) {

    if(attachment.selected) {
      attachment.link
    }
  }

  */

}
