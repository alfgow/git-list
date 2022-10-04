import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./button";
import Icon from "./icon";
import props from "./profile-data";

const ProfileStyled = styled.div`
	grid-area: profile;

	.info {
		margin: 0;
		color: var(--grey-1);
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-block: 1rem;
		font: var(--body2-semi-bold);
	}
	a:hover {
		text-decoration: underline;
	}
	.avatar {
		border-radius: 50%;
		border: 1px solid #a5c71b;
		overflow: hidden;
		box-sizing: border-box;
		margin-block-end: 1.5rem;
	}
	.name {
		color: var(--white);
		font: var(--headline1);
		margin: 0;
		margin-block-end: 0.5rem;
	}
	.username {
		color: var(--headline2-ligth);
		color: var(--grey-2);
		margin: 0;
		margin-block-end: 1.5rem;
	}
	.buttons {
		display: flex;
		gap: 0.5rem;
		margin-block-end: 1.5rem;
	}
`;

function Profile() {
	const {
		name,
		login,
		avatar_url,
		bio,
		followers,
		following,
		location,
		twitter_username,
		blog,
	} = props;
	const [coolName, setCoolName] = useState(name);

	useEffect(() => {
		setTimeout(() => {
			setCoolName("Alfonso");
		}, 1000);
	}, []);

	return (
		<ProfileStyled>
			<img
				src={avatar_url}
				width="278"
				height="278"
				alt=""
				className="avatar"
			/>
			<p className="name">{coolName}</p>
			<p className="username ">{login}</p>
			<div className="buttons">
				<Button text="Follow" link="#" />
				<Button
					text="Sponsor"
					icon={
						<Icon
							name="heart"
							size="24"
							color="red"
						/>
					}
				/>
			</div>
			<p className="bio info">{bio}</p>
			<p className="followers info">
				* {followers} <span>Followers</span> *{" "}
				{following} <span>Following</span>
			</p>
			<p className="location info">{location}</p>
			<a
				href={blog}
				target="_blank"
				rel="noreferrer"
				className="info"
			>
				{blog}
			</a>
			<a
				href={`https://twitter.com/${twitter_username}`}
				target="_blank"
				rel="noreferrer"
				className="info"
			>
				@{twitter_username}
			</a>
		</ProfileStyled>
	);
}

export default Profile;
