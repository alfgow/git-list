import styled from "styled-components";
import Dropdown from "./dropdown.jsx";
import InputText from "./input-text.jsx";
import Selector2 from "./selector2.jsx";
import Separator from "./separator.jsx";

const FiltersStyled = styled.div`
	grid-area: filters;
	color: var(--white);

	.count {
		font: var(--headline2-semi-bold);
	}
	.action-list {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.select-list {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.dropDown {
		inline-size: 100%;
		display: flex;
		align-items: center;

		@media screen and (min-width: 61.8rem) {
			justify-content: flex-end;
			padding-inline-end: 4.5rem;
		}
	}
	.hidden {
		display: none;
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
			</div>
			<Separator />
		</FiltersStyled>
	);
}

export default Filters;
