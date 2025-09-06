import { Injectable } from '@nestjs/common';
import { Note } from './notes.model';

@Injectable()
export class NotesService {
  private notes: Note[] = [];
  constructor() {
    this.notes = [
      {
        id: '1',
        title: 'First Note',
        content: 'This is the content of the first note',
        createdAt: new Date(),
      },
      {
        id: '2',
        title: 'Second Note',
        content: 'This is the content of the second note',
        createdAt: new Date(),
      },
    ];
  }

  getAll(): Note[] {
    return this.notes;
  }

  getById(id: string): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }
  create(note: Note): void {
    this.notes.push(note);
  }
  deleteNote(id: string): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
  updateNote(id: string, updatedFields: Partial<Note>): Note | undefined {
    const note = this.getById(id);
    if (note) {
      Object.assign(note, updatedFields);
      return note;
    }
    return undefined;
  }
}
