import { Injectable } from '@angular/core'
import { IBackground } from './background.model'
import { Observable, Subject } from 'rxjs'

@Injectable()
export class BackgroundService {
  getBackgroundChecks():Observable<IBackground[]> {
    let subject = new Subject<IBackground[]>()
    setTimeout(() => {subject.next(BACKGROUND); subject.complete();}, 1000)
    return subject
  }
  // getBackgroundCheck(id:number):IBackground | undefined {
  //   return BACKGROUND.find(background => background.id === id)
  // }

}

const BACKGROUND:IBackground[] = [
  {
    id: 1,
    backgroundTitle: 'Background Check',
    backgroundAvatar: 'person-circle',
    currentProgress: 55,
    estimatedCompletionDate: new Date ('05/01/2021'),
    date1: new Date('01/02/2021'),
    date2: new Date('02/02/2021'),
    date3: new Date('03/15/2021')
  }
]
