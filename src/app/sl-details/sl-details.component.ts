import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import SlDetails from 'dist/shoelace/assets/shoelace/components/details/details';
import { HttpClient } from '@angular/common/http';
import { DetailsService } from '../shared/details.background.service';
import { DataService } from '../services/data.service';
import { IAttachments, IDetails } from '../shared/details.model';
import { from } from 'rxjs';


@Component({
  selector: 'app-sl-details',
  templateUrl: './sl-details.component.html',
  styleUrls: ['./sl-details.component.scss']
})
export class SlDetailsComponent implements OnInit {
  availableAttachments: IAttachments[] = []
  candidateAge:number = 0;
  details: IDetails[] | undefined
  candidateDetails: any;
  isDisabled:boolean = false;
  isOpen:string = ''
  moreDetails:boolean = true;
  pokemons: any[] = [];
  selectAll:boolean = false;
  showAge:any;
  totalPokemons: number;

  constructor(private detailsService: DetailsService, public el:ElementRef, private dataService: DataService, private http: HttpClient) {

   };

   @HostListener('sl-show', ['$event']) doSomething(event:any) {
     console.log('inside the showing host' + event.target.value
     );

     const container = document.querySelector('.details-group-example');
      container?.querySelectorAll('sl-details').forEach((details: SlDetails) => {
        details.open = event?.target === details;
      })
   };

   @HostListener('sl-hide') doSomethingElse() {
     console.log('inside the hiding host')
   }

  //  ngOnInit() {
  //   this.dataService.getCandidate().subscribe(candidateDetails => {
  //     this.candidateDetails = candidateDetails;
  //   });
  //   console.log(this.candidateDetails)
  //  }

  //  Original ngOnInit with Pokemon Request
  ngOnInit() {
    this.detailsService.getDetails().subscribe(details => {
      this.details = details;
    });

    const headers = {'Ocp-Apim-Subscription-Key': '2b056fc992b74902b8fdde11ea7bfbea'}
    this.http.get(`https://apimeadev.azure-api.net/func-ea-dev/orderDetails`, {headers}).subscribe(details => {
      this.candidateDetails = details;
    })
    this.getPokemons();
    console.log(this.candidateDetails)
  }

  //  GET request to return multiple Pokemon
    getPokemons() {
      this.dataService.getPokemon()
      .subscribe((response:any) => {
        this.totalPokemons = response.count;

        response.results.forEach(result => {
          this.dataService.getAdditionalPokemon(result.name)
            .subscribe((uniqueResponse:any) => {
              this.pokemons.push(uniqueResponse);
              console.log(this.pokemons)
            })
        })
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

}
