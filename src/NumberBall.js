import styled from "styled-components";


const NumberBall = styled.div`
    border: 5px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: ${props => props.color};
    text-align: center;
    line-height: 3;
    font-size: 18px;
    color: white;
    display: inline-block;
    margin: 4px;
`
export default NumberBall;