import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;

    button {
        padding: 5px;
        margin-bottom: 20px;
        
        &:hover {
            cursor: pointer;
        }
    }

    > ul {
        display: flex;
        list-style: none;

        > li + li {
            margin-left: 10px;
        }
    }
`