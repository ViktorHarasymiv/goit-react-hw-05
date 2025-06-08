import css from "./SearchBox.module.css";

interface SearchBoxProps {
  query: string;
  updateQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ query, updateQuery }: SearchBoxProps) {
  return (
    <input
      onChange={updateQuery}
      className={css.input}
      type="text"
      value={query}
      placeholder="Search notes"
    />
  );
}
