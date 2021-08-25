import GlobalContext from '../../global/GlobalContext'
import { useContext } from 'react'
import { Container } from './styles'

const maxItems = 5
const maxLeft = (maxItems - 1) / 2

const Pagination = () => {

    const { states, setters } = useContext(GlobalContext)

    const total = 898
    const currentPage = states.offset ? (states.offset / states.limit) + 1 : 1
    const pages = Math.ceil(total / states.limit)
    const maxFirst = Math.max(pages - (maxItems - 1), 1);
    const firstPage = Math.min(Math.max(currentPage - maxLeft, 1), maxFirst)


    const onPageChange = (page) => {
        setters.setOffset((page - 1) * states.limit)
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