import { Injectable } from "@nestjs/common";
import {readFile, writeFile} from "fs/promises";

@Injectable()
export class MessagesRepository{

  async findOne(id: string){
    
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    console.log(id);
    return messages[id];
  };

  async findAll(){

    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    return messages;
  };

  async create(message: string){
     
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = {id, message};
    
    await writeFile('messages.json', JSON.stringify(messages));
  };

}