import { isValidElement } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
	display: inline-flex;
	gap: 0.5rem;
	align-items: center;
	cursor: pointer;
	text-decoration: none !important;
	background: var(--buttonBG);
	color: var(--white);
	border: 1px solid var(--grey-1);
	border-radius: 0.5rem;
	min-inline-size: 8.4375rem;
	justify-content: center;
	padding-block: 0.25rem;
	font: var(--button);
	flex: 1;
	&:hover {
		background: var(--white);
		color: var(--buttonBG);
	}
`;

function Button({ text, link, className, icon }) {
	const component = link ? "a" : "button";
	let iconComponent = null;
	if (icon) {
		if (isValidElement(icon)) {
			iconComponent = icon;
		}
	}
	return (
		<ButtonStyled
			as={component}
			href={link}
			className={className}
			target="_blank"
		>
			{iconComponent}
			{text}
		</ButtonStyled>
	);
}

export const ButtonContrast = styled(Button)`
	background: var(--white);
	color: var(--buttonBG);
	&:hover {
		background: var(--buttonBG);
		color: var(--white);
	}
`;

export const ButtonRounded = styled(Button)`
	min-inline-size: initial;
	border-radius: 50%;
	padding: 0.75rem;
	border: 1px solid #a5c71b;
	&:hover {
		background: var(--buttonBG);
		transform: scale(1.1);
	}
`;

export default Button;
