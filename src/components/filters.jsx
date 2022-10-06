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

function Filters({ repoListCount, setSearch }) {
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
				/>

				<div className="select-list">
					<Selector>
						<option value="" disabled>
							Tipo{" "}
						</option>
						<option value="All">
							Todos
						</option>
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
						<option value="english">
							Inglés
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
