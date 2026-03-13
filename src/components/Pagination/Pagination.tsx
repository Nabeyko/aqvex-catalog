import "./Pagination.scss";
import rightArrow from "../../assets/icon/rightArrow.svg";
import leftArrow from "../../assets/icon/leftArrow.svg";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: Props) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination__arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={rightArrow} alt="arrow" className="pagination__button-icon" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`pagination__page ${
            currentPage === page ? "pagination__page--active" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="pagination__arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={leftArrow} alt="arrow" className="pagination__button-icon" />
      </button>
    </div>
  );
};
