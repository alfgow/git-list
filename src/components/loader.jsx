import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import alfgow from "./img/alfgow.png";

const LoaderStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	block-size: 100vh;
	@media screen and (min-width: 48rem) {
		block-size: 100vh;
		inline-size: 100vh;
		margin: auto;
		padding-inline: 1.25rem;
		padding-block: 2.5rem;
		margin-inline-start: 7rem;
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
			<img src={alfgow} alt="" />
		</LoaderStyled>
	);
}

export default Loader;
