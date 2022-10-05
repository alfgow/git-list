import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonContrast } from "./button";
import InputText from "./input-text";
import Overlay from "./overlay";

const modalRoot = document.getElementById("portal");

class ModalPortal extends React.Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.el);
	}

	componentDidMount() {
		modalRoot.appendChild(this.el);
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}

export default function Modal({ isActive, setModal }) {
	if (isActive) {
		return (
			<ModalPortal>
				<ModalContent setModal={setModal} />
			</ModalPortal>
		);
	}
	return null;
}

const ModalContentStyled = styled.form`
	background: var(--bg);
	position: fixed;
	inset-block-start: 50%;
	transform: translateY(-50%) translateX(-50%);
	inset-inline-start: 50%;
	color: var(--white);
	padding: 1.5rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	inline-size: 24rem;
	block-size: 11.5rem;
	.title {
		font: var(--headline2-semi-bold);
		margin: 0;
	}
`;

function ModalContent({ setModal }) {
	const form = useRef(null);
	const navigator = useNavigate();
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(form.current);
		navigator(`/${formData.get("username")}`);
		setModal(false);
	}
	return (
		<Overlay>
			<ModalContentStyled
				ref={form}
				action=""
				onSubmit={handleSubmit}
			>
				<h2 className="title">Busca un usuario</h2>
				<InputText
					type="text"
					placeholder="username"
					id="username"
					name="username"
					autoComplete="off"
				/>
				<ButtonContrast text="Search"></ButtonContrast>
			</ModalContentStyled>
		</Overlay>
	);
}
