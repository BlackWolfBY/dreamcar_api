import { RequestStatus } from "../attribute/request.status"


export class Request {

    id: string
    status: RequestStatus
    partName: string
    amount: number
    description: string
    expireAt: Date
    createdAt: Date
    createdBy: string
    updatedAt: Date
    updatedBy: string

}