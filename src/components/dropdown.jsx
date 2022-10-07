import { useState } from "react";
import styled from "styled-components";

const DropdownStyled = styled.div`
	inline-size: 16.25rem;
	block-size: auto;
	display: grid;
	grid-template-columns: 260px;
	grid-template-rows: 50px repeat(4, auto);
	background: #212730;
	border: 1px solid #a5c71b;
	border-radius: 0.5rem;
	overflow: hidden;

	* {
		padding: 1rem;
		margin: 0;
	}
	.dropdown-item {
		background: #212730;
		cursor: pointer;
		border: none;
		color: var(--grey-2);
		display: flex;
		&:hover {
			background: #19222d;
		}
	}

	.dropdown-item.active {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #0f1a29;
		&:before {
			content: "✔️";
		}
	}

	.dropdown-header {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--grey-2);
		font: var(--body2-semi-bold);
		padding: 0;
		background: #0f1a29;
		border-bottom: 1px solid #a5c71b;
	}
	.dropdown-header p {
		margin: 0;
		padding-block: 0;
	}
	.hidden {
		display: none;
	}
`;

function Dropdown({ showDD, setShowDD, setSearchStack }) {
	const [classAll, setClassAll] = useState("dropdown-item");
	const [classJS, setClassJS] = useState("dropdown-item");
	const [classHTML, setClassHTML] = useState("dropdown-item");
	const [classCSS, setClassCSS] = useState("dropdown-item");

	function handleClickDropdown(event) {
		const stack = event.target.value;
		setSearchStack(stack);
		const idElement = event.target.id;
		setShowDD("hidden");
		switch (idElement) {
			case "all": {
				return (
					setClassAll("dropdown-item active"),
					setClassJS("dropdown-item"),
					setClassHTML("dropdown-item"),
					setClassCSS("dropdown-item")
				);
			}
			case "js": {
				return (
					setClassAll("dropdown-item "),
					setClassJS("dropdown-item active"),
					setClassHTML("dropdown-item"),
					setClassCSS("dropdown-item")
				);
			}
			case "html": {
				return (
					setClassAll("dropdown-item "),
					setClassJS("dropdown-item"),
					setClassHTML("dropdown-item active"),
					setClassCSS("dropdown-item")
				);
			}
			case "css": {
				return (
					setClassAll("dropdown-item "),
					setClassJS("dropdown-item"),
					setClassHTML("dropdown-item"),
					setClassCSS("dropdown-item active")
				);
			}
			default:
				break;
		}
	}

	return (
		<DropdownStyled className={showDD}>
			<div className="dropdown-header ">
				<p>Seleccionar Stack</p>
			</div>
			<button
				className={classAll}
				onClick={handleClickDropdown}
				id="all"
				value="All"
			>
				All
			</button>
			<button
				className={classJS}
				onClick={handleClickDropdown}
				id="js"
				value="JavaScript"
			>
				{" "}
				JavaScript
			</button>
			<button
				className={classHTML}
				onClick={handleClickDropdown}
				id="html"
				value="HTML"
			>
				HTML
			</button>
			<button
				className={classCSS}
				onClick={handleClickDropdown}
				id="css"
				value="CSS"
			>
				CSS
			</button>
		</DropdownStyled>
	);
}

export default Dropdown;
