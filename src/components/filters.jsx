import styled from "styled-components";
import InputText from "./input-text.jsx";
import Selector from "./selector.jsx";
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
`;

function Filters({ repoListCount, setSearch, setSearchStack }) {
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
					<Selector
						id="stackSearch"
						setSearchStack={setSearchStack}
					>
						<option value="">Stack </option>
						<option value="JavaScript">
							JavaScript
						</option>
						<option value="HTML">
							HTML
						</option>
						<option value="CSS">CSS</option>
					</Selector>
					<Selector>
						<option
							value="language"
							disabled
						>
							Idioma{" "}
						</option>
						<option value="spanish">
							Español
						</option>
					</Selector>
					<Selector>
						<option value="sort">
							Clasificacion{" "}
						</option>
					</Selector>
				</div>
			</div>
			<Separator />
		</FiltersStyled>
	);
}

export default Filters;
