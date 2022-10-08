import styled from "styled-components";
import dropDown from "./icon/drop-down.svg";

const Selector2Styled = styled.button`
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
	cursor: pointer;
	flex: 1;
	&:active {
		transform: (1.1);
	}
`;

function Selector2({ name, setShowDD, showDD, setSearchStack }) {
	function showDropdown() {
		if (showDD === "") {
			setShowDD("hidden");
			return;
		}
		setShowDD("");
	}

	switch (name) {
		case "stack": {
			return (
				<Selector2Styled onClick={showDropdown}>
					{name}{" "}
				</Selector2Styled>
			);
		}

		default: {
			return <Selector2Styled>{name} </Selector2Styled>;
		}
	}
}

export default Selector2;
