import styled from "styled-components";

const SeparatorStyled = styled.div`
	margin-block: 1rem;
	border-bottom: 1px solid var(--grey-1);
	@media screen and (min-width: 64rem) {
		grid-column: 1/3;
		grid-row: 4/5;
	}
`;

function Separator() {
	return <SeparatorStyled></SeparatorStyled>;
}

export default Separator;
