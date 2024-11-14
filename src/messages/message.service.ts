import { Injectable } from '@nestjs/common';
import  { MessagesRepository} from './message.repository';

@Injectable()
export class MessageService {

 // messagesRepo: MessagesRepository;
              // public messagesRepo
  constructor(public messagesRepo: MessagesRepository){}

  findOne(id: string){
    return this.messagesRepo.findOne(id);
  }

  findAll(){
    return this.messagesRepo.findAll();
  }

  create(message: string){
    return this.messagesRepo.create(message);
  }
}