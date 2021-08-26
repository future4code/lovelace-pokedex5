import GlobalContext from "../../global/GlobalContext";
import { useContext } from "react";
import { Container } from "./styles";

const maxItems = 5;
const maxLeft = (maxItems - 1) / 2;

const Pagination = () => {
  const { state, setters } = useContext(GlobalContext);

  const total = 630;
  const currentPage = state.offset ? state.offset / state.limit + 1 : 1;
  const pages = Math.ceil(total / state.limit);
  const maxFirst = Math.max(pages - (maxItems - 1), 1);
  const firstPage = Math.min(Math.max(currentPage - maxLeft, 1), maxFirst);

  const onPageChange = (page) => {
    setters.setOffset((page - 1) * state.limit);
  };

  return (
    <Container>
      <ul>
        <li>
          <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
            Primeira
          </button>
        </li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {Array.from({ length: Math.min(maxItems, pages) })
          .map((item, index) => index + firstPage)
          .map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                disabled={page === currentPage}
              >
                {page}
              </button>
            </li>
          ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pages}
          >
            Próxima
          </button>
        </li>
        <button
          onClick={() => onPageChange(pages)}
          disabled={currentPage === pages}
        >
          Última
        </button>
      </ul>
    </Container>
  );
};

export default Pagination;
