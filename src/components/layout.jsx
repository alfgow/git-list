import styled from "styled-components";

const LayoutStyled = styled.main`
	min-block-size: 100vh;
	max-inline-size: 75rem;
	margin: auto;
	padding-inline: 1.25rem;
	padding-block: 2.5rem;
	border: 1px solid #a5c71b;
	background: var(--bg);

	@media screen and (min-width: 48rem) {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		column-gap: 2rem;
		grid-template-areas: "profile filters" "profile repo-list";
	}
`;

function Layout({ children }) {
	return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
