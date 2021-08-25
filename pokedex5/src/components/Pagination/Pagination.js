import { Container } from './styles'

const maxItems = 5
const maxLeft = (maxItems - 1) / 2

const Pagination = ({ limit, total, offset, setOffset }) => {

    const currentPage = offset ? (offset / limit) + 1 : 1
    const pages = Math.ceil(total / limit)
    const firstPage = Math.max(currentPage - maxLeft, 1)

    const onPageChange = (page) => {
        setOffset((page - 1) * limit)
    }

    return (
        <Container>
            <ul>
                <li>
                    <button 
                        onClick={() => onPageChange(currentPage - 1)} 
                        disabled={currentPage === 1}>Anterior</button>
                </li>
                {Array.from({ length: Math.min(maxItems, pages) })
                    .map((item, index) => index + firstPage)
                    .map(page => (
                        <li key={page}>
                            <button 
                                onClick={() => onPageChange(page)} 
                                disabled={page === currentPage}>{page}</button>
                        </li>
                    ))}
                <li>
                    <button 
                        onClick={() => onPageChange(currentPage + 1)} 
                        disabled={currentPage === pages}>Próxima</button>
                </li>
            </ul>
        </Container>
    )
}

export default Pagination