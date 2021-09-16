import styled from "styled-components";

export const Positioner = styled.div`
    width: 100%;
    height: 20vh;
`;

export const Wrapper = styled.div`
    width : 100%auto;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #1A1A1A;
    color : #fff;
`;

export const YearText = styled.h2`
    font-weight: normal;
    font-size: 30px;
    line-height: 37px;

    color: #FFFFFF;
`;

export const MonthText = styled.span`
    font-weight: normal;
    font-size: 80px;
    line-height: 98px;

    margin: 0px 40px;

    color: #FFFFFF;
`;

export const SubMonthText = styled.span`
    cursor: pointer;

    font-weight: normal;
    font-size: 60px;
    line-height: 98px;

    color : rgba(255, 255, 255, 0.24);
`;

export const DayText = styled.p`
    font-weight: normal;
    font-size: 52px;
    line-height: 64px;

    color: #FFFFFF;
`;