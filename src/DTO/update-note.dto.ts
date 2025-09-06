import { IsString, IsOptional, MinLength } from 'class-validator';

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(5, { message: 'Content must be at least 5 characters long' })
  content?: string;
}
