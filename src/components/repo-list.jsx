import styled from "styled-components";
import Swal from "sweetalert2";
import RepoItem from "./repo-item";

const RepoListStyled = styled.div`
	grid-area: repo-list;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

function RepoList({ repoList, search, username, searchStack }) {
	let list = repoList;

	function searchRepo() {
		list = list.filter((item) => {
			return item.name.search(search) >= 0;
		});
		if (list.length < 1) {
			// return <NoRepo term={search} />;
			let timerInterval;
			Swal.fire({
				title: "Ups!",
				text: `No hay resultados para tu criterio de busqueda '${search}'.`,
				icon: "error",
				showConfirmButton: false,
				timer: 2000,
				timerProgressBar: true,
				didOpen: () => {
					Swal.showLoading();
					const b =
						Swal.getHtmlContainer().querySelector(
							"b"
						);
					timerInterval = setInterval(() => {
						b.textContent =
							Swal.getTimerLeft();
					}, 100);
				},
				willClose: () => {
					clearInterval(timerInterval);
				},
			}).then((result) => {
				/* Read more about handling dismissals below */
				if (
					result.dismiss ===
					Swal.DismissReason.timer
				) {
				}
			});

			return;
		}
	}

	function searchRepoByStack() {
		list = list.filter((item) => item.language === searchStack);
		if (list.length < 1) {
			let timerInterval;
			Swal.fire({
				title: "Ups!",
				text: `No hay resultados para tu criterio de busqueda '${searchStack}'.`,
				icon: "error",
				showConfirmButton: false,
				timer: 2000,
				timerProgressBar: true,
				didOpen: () => {
					Swal.showLoading();
					const b =
						Swal.getHtmlContainer().querySelector(
							"b"
						);
					timerInterval = setInterval(() => {
						b.textContent =
							Swal.getTimerLeft();
					}, 100);
				},
				willClose: () => {
					clearInterval(timerInterval);
				},
			}).then((result) => {
				/* Read more about handling dismissals below */
				if (
					result.dismiss ===
					Swal.DismissReason.timer
				) {
				}
			});

			return;
		}
	}

	if (search !== "") {
		searchRepo();
	}

	if (searchStack !== "") {
		searchRepoByStack();
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
