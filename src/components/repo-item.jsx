import styled from "styled-components";
import Icon from "./icon";
import Language from "./language";

const RepoItemStyled = styled.div`
	color: var(--white);
	padding-block: 1rem;
	border-block-end: 1px solid var(--grey-1);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	&:last-child {
		border-block-end: none;
	}
	.title {
		display: flex;
		gap: 1rem;
		margin: 0;
		a {
			color: var(--primary);
			text-decoration: none;
			font: var(--headline2-semi-bold);
		}
	}
	.public {
		border: 1px solid #a5c71b;
		padding-inline: 0.5rem;
		padding-block: 0.125rem;
		border-radius: 0.5rem;
		font: var(--caption-regular);
	}
	.desrciption {
		font: var(--body2-regular);
		color: var(--grey-1);
	}
	.topicList {
		display: flex;
		gap: 0.25rem;
		overflow: hidden;
		flex-wrap: wrap;
	}
	.listItem {
		padding-block: 0.25rem;
		padding-inline: 0.75rem;
		border-radius: 2.375rem;
		background: #15223a;
		font: var(--caption-medium);
		color: var(--primary);
	}
	.details {
		display: flex;
		gap: 1rem;
		font: var(--caption-regular);
		color: var(--grey-2);
	}
	.details-item {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
`;

function RepoItem(props) {
	const {
		name,
		html_url,
		description,
		topics,
		language,
		forks_count,
		stargazers_count,
		updated_at,
	} = props;
	const updatedAt = new Date(updated_at);
	const today = new Date();
	const difference = updatedAt - today;
	const differenceDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
	const timeAgo = new Intl.RelativeTimeFormat("es").format(
		differenceDays,
		"days"
	);

	return (
		<RepoItemStyled>
			<h3 className="title">
				<a href={html_url}>{name}</a>
				{!props.private ? (
					<span className="public">Public</span>
				) : null}
			</h3>
			{description ? (
				<p className="desrciption">{description}</p>
			) : null}
			{topics.length ? (
				<div className="topicList">
					{topics.map((item) => (
						<span className="listItem">
							{item}
						</span>
					))}
				</div>
			) : null}
			<div className="details">
				{language ? <Language name={language} /> : null}

				<span className="details-item">
					<Icon
						name="star"
						color="var(--grey-1)"
					/>
					{stargazers_count}
				</span>
				<span className="details-item">
					<Icon
						name="branch"
						color="var(--grey-1)"
					/>
					{forks_count}
				</span>
				<span className="details-item">
					Actualizado: {timeAgo}
				</span>
			</div>
		</RepoItemStyled>
	);
}

export default RepoItem;
