import { Injectable } from '@angular/core'
import { IDetails } from './details.model'
import { Observable, Subject } from 'rxjs'

@Injectable()
export class DetailsService {
  details: IDetails[] | undefined

  getDetails():Observable<IDetails[]> {
    let subject = new Subject<IDetails[]>()
    setTimeout(() => {subject.next(DETAILS); subject.complete();}, 20)
    return subject
  }

   getDetail(id:number):IDetails | undefined {
     return DETAILS.find(details => details.orderId === id)
  }
}

const DETAILS:IDetails[] = [
  {
    name: 'Jeremy Uriz',
    email: 'jeremy@fadv.com',
    status: 'Pending',
    requester: 'Kristopher Kinlen',
    location: 'Atlanta',
    orderId: 89124,
    dateOrdered: new Date('01/01/2021'),
    dateCreated: new Date('01/10/2021'),
    packageType: 'Background Screen',
    accountNumber: 12349876,
    governmentId: '',
    candidateDOB: new Date('1950-01-20'),
    clientReference: 'CR1',
    attachments: [
      {
        attachmentId: 1,
        name: 'test document',
        attachmentUrl: 'https://unsplash.com/photos/1l2waV8glIQ/download?force=true&w=640',
        selected: false
      },
      {
        attachmentId: 2,
        name: 'tester document',
        attachmentUrl: 'https://unsplash.com/photos/pdALzg0yN-8/download?force=true&w=640',
        selected: false
      },
      {
        attachmentId: 3,
        name: 'tested document',
        attachmentUrl: 'https://unsplash.com/photos/rW-I87aPY5Y/download?force=true&w=640',
        selected: false
      },
    ]
  }
]
