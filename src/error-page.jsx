import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "./components/icon";

const ErrorPageStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: var(--white);
	block-size: 100vh;
	.settime {
		display: none;
	}
`;

function ErrorPage() {
	const navigator = useNavigate();

	return (
		<ErrorPageStyled>
			<Icon name="alert" size="48" color="yellow" />
			<h1>alfgow-bot: Error 404!</h1>
			<p>
				La página solicitada no existe, te estoy
				regresando a nuestro sitio.
			</p>
			<p className="settime">
				{setTimeout(() => navigator(`/`), 3000)}
			</p>
		</ErrorPageStyled>
	);
}

export default ErrorPage;
