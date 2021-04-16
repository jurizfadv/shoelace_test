import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../shared/background.service'
import { IBackground } from '../shared/background.model'

@Component({
  selector: 'app-sl-progress-card',
  templateUrl: './sl-progress-card.component.html',
  styleUrls: ['./sl-progress-card.component.scss']
})
export class SlProgressCardComponent implements OnInit {
  backgrounds: IBackground[] | undefined
  localData = {
    id: 1,
    backgroundTitle: 'Background Check',
    backgroundAvatar: 'person-circle',
    currentProgress: 40,
    dates: [
      '2021-02-20T10:15:34.098', '2021-04-15T09:01:34.098', '2021-03-01T22:22:34.098', '2021-01-10T10:45:34.098'
    ]
  }

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit() {
      this.backgroundService.getBackgroundChecks().subscribe(backgrounds => {
        this.backgrounds = backgrounds
    })
  }

/*
getCompletedDate function must check for
1. Past Dates
2. Blank/Empty Dates

The first conditional checks for empty date strings. Not sure
how blank/empty dates will be passed from the backend so this
may need to change.

The second condition checks for dates past today. This indicates
the check has expired.

If the dates pass both checks the function finds the date furthest in
the future and returns it as a Date String.

This is what is displayed to the user.
*/

  getCompleteDate() {
    for(let date of this.localData.dates) {
      if(date === '') {
        return "Unknown"
      } else if(Date.parse(date) > Date.now()) {
        return "Expired"
    }
  }
    let maxDate = this.localData.dates.reduce((a,b) => {
      return a > b ? a : b;
    })
    return new Date(maxDate).toDateString()

}

  isDatePassed (date:any) {
    return new Date(date.toDateString()) < new Date(new Date().toDateString())
  }
}

