import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const LoaderStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	block-size: 100vh;
	inline-size: 100vh;
`;

function Loader({ loading }) {
	return (
		<LoaderStyled>
			<ClipLoader
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
