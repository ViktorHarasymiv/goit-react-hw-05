import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { Note } from "../../types/note";

import css from "./NoteList.module.css";

import { deleteNote } from "../../services/noteService";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });
  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };
  return (
    <ul className={css.list}>
      {/* Набір елементів списку нотатків */}
      {notes.map((note, index) => {
        return (
          <li key={index} className={css.listItem}>
            <h2 className={css.title}>{note.title}</h2>
            <p className={css.content}>{note.content}</p>
            <div className={css.footer}>
              <span className={css.tag}>{note.tag}</span>
              <button
                onClick={() => {
                  handleDelete(note.id);
                }}
                className={css.button}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
