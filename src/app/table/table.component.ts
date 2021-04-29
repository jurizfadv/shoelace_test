import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  expandData = false
  dataSet = [
    {
    id: 1,
    thing1: 'This is thing one',
    thing2: '01/01/2021',
    thing3: false,
    thing4: 'This is thing one Extra Data',
    thing5: 'Yep'
  },
  {
    id: 2,
    thing1: 'This is thing two',
    thing2: '01/02/2021',
    thing3: true,
    thing4: 'This is thing two Extra Data',
    thing5: 'Nope'
  },
  {
    id: 3,
    thing1: 'This is thing three',
    thing2: '01/03/2021',
    thing3: false,
    thing4: 'This is thing three Extra Data',
    thing5: 'Maybe'
  },
]


  constructor() { }

  ngOnInit(): void {
    // console.log('**Printing details object: '+ document.querySelector('.details-group-example'));
  }

  findDetails (idx:number) {
    if (idx === this.dataSet[idx].id){

    }
  }

  handleClick(event:any): void{
    //   document.querySelector('.details-group-example').addEventListener('sl-show', ($event) => {
    //     console.log('Inside event handle', event);
    //  });
              console.log(event);
              // console.log(event.target)


  }

}
