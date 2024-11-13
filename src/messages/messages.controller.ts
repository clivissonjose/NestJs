import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {

  @Get('')
  listMesssages(){
     return "Hello, world!"
  };

  @Post('')
  createMessage(@Body() body: CreateMessageDTO){
    console.log(body);
  };

  @Get(':id')
  getMessage(@Param() id: string){
    console.log(id);
  };

}
