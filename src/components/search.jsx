import styled from "styled-components";
import { ButtonRounded } from "./button";
import Icon from "./icon";

const SearchStyled = styled.div`
	inset-inline-start: 1rem;
	inset-block-start: 1rem;
`;

function Search({ setModal }) {
	function handleClick() {
		setModal(true);
	}
	return (
		<SearchStyled onClick={handleClick}>
			<ButtonRounded
				icon={<Icon name="search" size="24" />}
			/>
		</SearchStyled>
	);
}

export default Search;
