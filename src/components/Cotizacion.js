import React from 'react';
import styled from '@emotion/styled';

const ResultDiv=styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info=styled.p`
    font-size:18px;
    span{
        font-weight:bold;
    }
`;

const Price = styled.span`
    font-size:30px;
    font-weight:bold;

`;
const Cotizacion = ({result}) => {
    if(Object.keys(result).length===0) return null;
    console.log(result);
    return ( 
        <ResultDiv>
            <Info>El precio es: <Price>{result.PRICE}</Price></Info>
            <Info>Precio más alto del día: <Price>{result.HIGHDAY}</Price></Info>
            <Info>Precio más bajo del día: <Price>{result.LOWDAY}</Price></Info>
            <Info>Variación últimas 24 hrs: <Price>{result.CHANGEPCT24HOUR}</Price></Info>
            <Info>Última actualización: <Price>{result.LASTUPDATE}</Price></Info>
        </ResultDiv>
     );
}
 
export default Cotizacion;