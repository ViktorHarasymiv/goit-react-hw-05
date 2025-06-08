import css from "./SearchBox.module.css";

interface SearchBoxProps {
  updateQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ updateQuery }: SearchBoxProps) {
  return (
    <input
      onChange={updateQuery}
      className={css.input}
      type="text"
      placeholder="Search notes"
    />
  );
}
