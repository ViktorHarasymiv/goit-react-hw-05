import { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

import { fetchNotes } from "../../services/noteService";

import css from "./App.module.css";

import NoteModal from "../NoteModal/NoteModal";
import SearchBox from "../SearchBox/SearchBox";
import Pagination from "../Pagination/Pagination";
import NoteList from "../NoteList/NoteList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Queries
  const [debouncedQuery] = useDebounce(query, 400);

  const { data, isSuccess } = useQuery({
    queryKey: ["notes", debouncedQuery, page],
    queryFn: () => fetchNotes(debouncedQuery, page),
    placeholderData: keepPreviousData,
  });

  const updateQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setPage(1);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox query={query} updateQuery={updateQuery} />
        {data?.totalPages && data.totalPages > 1 ? (
          <Pagination
            totalPages={data?.totalPages}
            page={page}
            onPageChange={setPage}
          />
        ) : (
          ""
        )}
        <button className={css.button} onClick={openModal}>
          Create note +
        </button>

        {isModalOpen && <NoteModal onClose={closeModal} />}
      </header>
      <main>
        {isSuccess && data.notes.length > 0 && <NoteList notes={data.notes} />}
      </main>
    </div>
  );
}

export default App;
