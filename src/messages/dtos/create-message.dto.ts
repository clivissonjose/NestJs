import { IsString }  from 'class-validator';
export class CreateMessageDTO {

  // Certificar que o conteúdo é uma string
  @IsString()
  content: string;
}