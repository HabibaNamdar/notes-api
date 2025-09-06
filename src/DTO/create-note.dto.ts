import { IsString, MinLength } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  title: string;

  @IsString()
   @MinLength(5, { message: 'Cotent must be at least 5 characters long' })
  content?: string;
}
