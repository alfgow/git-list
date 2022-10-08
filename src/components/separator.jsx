import styled from "styled-components";

const SeparatorStyled = styled.div`
	margin-block: 1rem;
	border-bottom: 1px solid var(--grey-1);
`;

function Separator() {
	return <SeparatorStyled></SeparatorStyled>;
}

export default Separator;
