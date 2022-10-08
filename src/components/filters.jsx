import styled from "styled-components";
import Dropdown from "./dropdown";
import InputText from "./input-text";
import Selector2 from "./selector2";
import Separator from "./separator";

const FiltersStyled = styled.div`
	grid-area: filters;
	color: var(--white);
	display: grid;
	column-gap: 1rem;
	grid-template-columns: auto;
	grid-template-rows: repeat(3, auto);
	grid-template-areas: "count" "searchBar" "actionBar";

	.count {
		font: var(--headline2-semi-bold);
		grid-area: count;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0;
		margin-block-start: 1rem;
		margin-block-end: 0.5rem;
	}
	.action-list {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		grid-area: searchBar;
		padding-block: 0.5rem;
		margin-block-end: 0.5rem;
	}
	.select-list {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		flex-wrap: wrap;
		grid-area: actionBar;
	}
	.dropDown {
		inline-size: 100%;
		display: flex;
		align-items: center;
		padding-block-start: 1rem;

		@media screen and (min-width: 64rem) {
			inline-size: 100%;
			padding-inline-end: 4.5rem;
			padding-block-start: 0.5rem;

			grid-column: 1/3;
		}
	}
	.hidden {
		display: none;
	}
	@media screen and (min-width: 64rem) {
		grid-template-columns: 13rem 1fr;
		grid-template-rows: repeat(2, 1fr);
		grid-template-areas: "count searchBar" "actionBar actionBar";
	}
`;

function Filters({
	repoListCount,
	setSearch,
	setSearchStack,
	showDD,
	setShowDD,
}) {
	function handleChange(event) {
		setSearch(event.target.value);
	}

	return (
		<FiltersStyled>
			<h2 className="count">
				Repositorios ({repoListCount})
			</h2>
			<div className="action-list">
				<InputText
					type="search"
					placeholder="Encuentra un repositorio"
					onChange={handleChange}
					id="inputSearch"
				/>
			</div>
			<div className="select-list">
				<Selector2
					name="stack"
					showDD={showDD}
					setShowDD={setShowDD}
					id="stackSearch"
				></Selector2>
				<Selector2
					name="idioma"
					setShowDD={setShowDD}
				></Selector2>
				<Selector2
					name="tipo"
					setShowDD={setShowDD}
				></Selector2>
			</div>

			<div className="dropDown">
				<Dropdown
					showDD={showDD}
					setShowDD={setShowDD}
					setSearchStack={setSearchStack}
				/>
			</div>
			<Separator />
		</FiltersStyled>
	);
}

export default Filters;
