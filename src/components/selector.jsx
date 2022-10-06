import styled from "styled-components";
import dropDown from "./icon/drop-down.svg";

const SelectorStyled = styled.select`
	background-color: var(--buttonBG);
	border: none;
	padding-inline-start: 1rem;
	padding-inline-end: 3rem;
	padding-block: 0.5rem;
	font: var(--body2-semi-bold);
	color: white;
	border-radius: 0.5rem;
	appearance: none;
	background-image: url(${dropDown});
	background-repeat: no-repeat;
	background-position: right 1.2rem center;
`;

function Selector({ children }) {
	return <SelectorStyled>{children}</SelectorStyled>;
}

export default Selector;
