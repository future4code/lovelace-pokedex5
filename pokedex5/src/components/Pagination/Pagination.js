import GlobalContext from "../../global/GlobalContext";
import { useContext } from "react";
import { Container, Button } from "./styles";

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

  console.log(currentPage);

  return (
    <Container>
      <ul>
        <li>
          <Button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
            Primeira
          </Button>
        </li>
        <li className="previous">
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
        </li>
        {Array.from({ length: Math.min(maxItems, pages) })
          .map((item, index) => index + firstPage)
          .map((page) => (
            <li key={page}>
              <Button
                onClick={() => onPageChange(page)}
                disabled={page === currentPage}
              >
                {page}
              </Button>
            </li>
          ))}
        <li className="next">
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pages}
          >
            Próxima
          </Button>
        </li>
        <li>
          <Button
            onClick={() => onPageChange(pages)}
            disabled={currentPage === pages}
          >
            Última
          </Button>
        </li>
      </ul>
    </Container>
  );
};

export default Pagination;
