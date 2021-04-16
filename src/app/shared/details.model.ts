export interface IDetails {
  name:string,
  email:string,
  status:string,
  requester:string,
  location:string,
  orderId:number,
  dateOrdered:Date,
  dateCreated:Date,
  packageType:string,
  accountNumber:number,
  governmentId:string,
  candidateDOB:Date,
  clientReference:string,
  attachments: IAttachments[]
}

export interface IAttachments {
  attachmentId: number
  name: string
  attachmentUrl: string
  selected: boolean
}
