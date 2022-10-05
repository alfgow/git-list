import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function ModalContent() {
	const form = useRef(null);
	const navigator = useNavigate();
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(form.current);
		console.log(formData.get("username"));
		navigator(`/${formData.get("username")}`);
	}
	return (
		<form ref={form} action="" onSubmit={handleSubmit}>
			<h2>Busca un usuario</h2>
			<input
				type="text"
				placeholder="username"
				id="username"
				name="username"
			/>
			<button>Search</button>
		</form>
	);
}

export { ModalContent };
