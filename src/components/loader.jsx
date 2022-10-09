import { CircleLoader } from "react-spinners";
import styled from "styled-components";

const LoaderStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	block-size: 100vh;
	@media screen and (min-width: 48rem) {
		block-size: 100vh;
		inline-size: 100vh;
		margin: auto;
		padding-inline: 1.25rem;
		padding-block: 2.5rem;
	}
`;

function Loader({ loading }) {
	return (
		<LoaderStyled>
			<CircleLoader
				color="#b5ff08"
				loading={loading}
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</LoaderStyled>
	);
}

export default Loader;
