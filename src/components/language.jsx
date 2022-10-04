import styled from "styled-components";

const LanguageStyled = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	&:before {
		content: "";
		block-size: 1rem;
		inline-size: 1rem;
		border-radius: 50%;
		background: ${({ color }) => color};
	}
`;

const languages = {
	html: {
		color: "#ff8400",
	},
	css: {
		color: "#00fa89",
	},
	javascript: {
		color: "#d5fe30",
	},
};

function Language({ name }) {
	const formattedName = name.toLowerCase();
	const color = languages[formattedName]
		? languages[formattedName].color
		: "white";

	return <LanguageStyled color={color}>{name}</LanguageStyled>;
}

export default Language;
