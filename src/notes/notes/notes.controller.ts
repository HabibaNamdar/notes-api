
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { NotesService } from './notes.service';
import type { CreateNoteDto } from '../../DTO/create-note.dto';
import type { UpdateNoteDto } from '../../DTO/update-note.dto';
import { Note } from './notes.model';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}

  @Get()
  getAll(): Note[] {
    return this.noteService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Note | undefined {
    return this.noteService.getById(id);
  }

  @Post()
  create(@Body() createNoteDto: CreateNoteDto): Note {
    // Generate a simple id for demonstration; in real apps use uuid or db id
    const note: Note = {
      id: Date.now().toString(),
      title: createNoteDto.title,
      content: createNoteDto.content,
      createdAt: new Date(),
    };
    this.noteService.create(note);
    return note;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto,
  ): Note | undefined {
    return this.noteService.updateNote(id, updateNoteDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): { message: string } {
    this.noteService.deleteNote(id);
    return { message: 'Note deleted successfully' };
  }
}
