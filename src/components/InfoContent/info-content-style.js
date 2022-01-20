import styled from "styled-components";
import bgInfoContent from "../../assets/bg-info-content.svg"       

const StyleInfoComponent = styled.div`
    width: 60vw;
    height: 100vh;
    padding: 0 2rem 0 0;

    background-image: url(${bgInfoContent});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .logo {
        max-width: 34.5rem;
        margin: 8.6rem 0 7.8rem 0;
        padding: 2.5rem 3rem;

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
            font-size: clamp(2.7vw, 3rem, 5vw);
            font-weight: 700;

        }

        p {
            margin-top: 1rem;
            font-size: clamp(1.8vw, 2rem, 5vw);
            font-weight: 300;
        }
    }
`;

export {
    StyleInfoComponent
}