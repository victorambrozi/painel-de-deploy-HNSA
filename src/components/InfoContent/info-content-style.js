import styled from "styled-components";
import bgInfoContent from "../../assets/bg-info-content.svg"       

const StyleInfoComponent = styled.div`
    width: 60vw;
    height: 100vh;

    background-image: url(${bgInfoContent});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .logo {
        max-width: 34.5rem;
        margin: 8.6rem 0 3.7rem 0;
        padding: 3.5rem 5rem;

        background: #FFF;
        
        border-top-right-radius: 5rem;
        border-bottom-right-radius: 5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .content {
        color: #FFF;
        margin-left: 12rem;
        
        h2 {
            font-size: clamp(3vw, 3rem, 5vw);
            font-weight: 700;

        }

        p {
            margin-top: 1rem;
            font-size: clamp(1.75vw, 2rem, 5vw);
            font-weight: 300;
        }
    }
`;

export {
    StyleInfoComponent
}