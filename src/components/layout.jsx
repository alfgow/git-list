import styled from "styled-components";

const LayoutStyled = styled.main`
	min-block-size: 100vh;
	max-inline-size: 75rem;
	margin: auto;
	padding-inline: 1.25rem;
	padding-block-start: 1.5rem;
	@media screen and (min-width: 48rem) {
		display: grid;
		border: 5px solid #a5c71b;
		grid-template-columns: 17.375rem, 1fr;
		grid-template-rows: auto 1fr;
		column-gap: 2rem;
		grid-template-areas: "profile filters" "profile repo-list";
	}
`;

function Layout({ children }) {
	return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
