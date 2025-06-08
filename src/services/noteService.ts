import axios from "axios";

import type { Note } from "../types/note";

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

interface NewNote {
  title: string;
  content: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
}

axios.defaults.baseURL = "https://notehub-public.goit.study/api";

// GET FETCH

export const fetchNotes = async (
  query: string,
  page: number
): Promise<NotesHttpResponse> => {
  const response = await axios.get<NotesHttpResponse>(
    `/notes?${query !== "" ? `search=${query}` : `page=${page}`}`,
    {
      headers: {
        Authorization: import.meta.env.VITE_NOTEHUB_TOKEN,
      },
    }
  );

  return response.data;
};

// POST FETCH

export const createNote = async (newNote: NewNote): Promise<Note> => {
  const response = await axios.post<Note>("/notes", newNote, {
    headers: {
      Authorization: import.meta.env.VITE_NOTEHUB_TOKEN,
    },
  });
  return response.data;
};

// DELETE POST

export const deleteNote = async (id: number): Promise<Note> => {
  const response = await axios.delete<Note>(`/notes/${id}`, {
    headers: {
      Authorization: import.meta.env.VITE_NOTEHUB_TOKEN,
    },
  });
  return response.data;
};
