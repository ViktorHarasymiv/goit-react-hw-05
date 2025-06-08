import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPage,
  page,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPage}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
