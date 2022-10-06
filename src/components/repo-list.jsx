import styled from "styled-components";
import Swal from "sweetalert2";
import RepoItem from "./repo-item";

const RepoListStyled = styled.div`
	grid-area: repo-list;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

function RepoList({ repoList, search, username }) {
	let list = repoList;

	if (search !== "") {
		list = list.filter((item) => {
			return item.name.search(search) >= 0;
		});
		if (list.length < 1) {
			// return <NoRepo term={search} />;
			Swal.fire({
				title: "Ups!",
				text: `No hay resultados para tu criterio de busqueda '${search}'.`,
				icon: "error",
				showConfirmButton: false,
			});
			setTimeout(
				() => (window.location.href = `/${username}`),
				3000
			);

			return;
		}
	}

	return (
		<RepoListStyled>
			{list.map((item) => {
				return <RepoItem {...item} key={item.id} />;
			})}
		</RepoListStyled>
	);
}

export default RepoList;
