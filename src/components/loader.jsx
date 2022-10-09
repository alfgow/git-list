import { CircleLoader } from "react-spinners";
import styled from "styled-components";
import alfgow from "./img/alfgow.png";

const LoaderStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	block-size: 100vh;
	overflow: hidden;
	@media screen and (min-width: 48rem) {
		flex-direction: row;
		padding-inline: 10rem;
		flex-wrap: wrap;
	}
	.imgLoader {
		inline-size: 30rem;
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

			<img src={alfgow} alt="" className="imgLoader" />
		</LoaderStyled>
	);
}

export default Loader;
