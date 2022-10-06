import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Filters from "./components/filters";
import Layout from "./components/layout";
import Modal from "./components/modal";
import Profile from "./components/profile";
import RepoList from "./components/repo-list";
import Search from "./components/search";
import { getRepos, getUser } from "./components/services/users";

function App() {
	const params = useParams();
	let userParams = params.user;
	if (!userParams) {
		userParams = "alfgow";
	}
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [modal, setModal] = useState(false);
	const [search, setSearch] = useState("");

	useEffect(() => {
		getUser(userParams).then(({ data, isError }) => {
			if (isError) {
				Swal.fire({
					title: "alfgow-bot: Error",
					text: `El usuario ${userParams} no existe. Te estoy regresando a nuestro sitio`,
					icon: "error",
					showConfirmButton: false,
				});
				setTimeout(
					() => (window.location.href = "/"),
					4000
				);

				return;
			}
			setUser(data);
			getRepos(userParams).then(({ data, isError }) => {
				setRepos(data);
			});
		});
	}, [userParams]);

	return (
		<Layout>
			<Modal isActive={modal} setModal={setModal} />
			<Profile {...user} />
			<Filters
				setSearch={setSearch}
				repoListCount={repos.length}
			/>
			<RepoList
				search={search}
				repoList={repos}
				username={userParams}
			/>
			<Search setModal={setModal} />
		</Layout>
	);
}

export default App;
