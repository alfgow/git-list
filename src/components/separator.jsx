import styled from "styled-components";

const SeparatorStyled = styled.div`
	margin-block: 1.5rem;
	border-bottom: 1px solid var(--grey-1);
`;

function Separator() {
	return <SeparatorStyled></SeparatorStyled>;
}

export default Separator;
