import styled from "styled-components";

const NoRepoStyled = styled.div`
	color: var(--white);
	border: 1px solid #a5c71b;
	display: flex;
	justify-content: center;
	align-items: center;
	block-size: 13rem;
`;

function NoRepo({ term }) {
	return (
		<NoRepoStyled>
			<h2>No hay resultados para '{term}'</h2>
		</NoRepoStyled>
	);
}

export default NoRepo;
