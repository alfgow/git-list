import styled from "styled-components";
import Loader from "./loader";

const LayoutStyled = styled.main`
	min-block-size: 100vh;
	max-inline-size: 75rem;
	margin: auto;
	padding-inline: 1.25rem;
	padding-block: 2.5rem;
	background: var(--bg);

	@media screen and (min-width: 48rem) {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		column-gap: 2rem;
		grid-template-areas: "profile filters" "profile repo-list";
	}
`;

function Layout({ children, loading }) {
	return (
		<LayoutStyled>
			{loading ? <Loader {...loading} /> : [children]}
		</LayoutStyled>
	);
}

export default Layout;
