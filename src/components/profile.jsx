import styled from "styled-components";
import Button from "./button";
import Icon from "./icon";

const ProfileStyled = styled.div`
	grid-area: profile;
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: repeat(5, auto);
	grid-template-areas: "avatar names" "bio bio" "buttons buttons" "web web" "follow follow";
	overflow: hidden;
	padding-block-end: 1.5rem;
	border-bottom: 0.3px solid var(--grey-1);

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
		overflow: hidden;
		box-sizing: border-box;
		margin-block-end: 1.5rem;
		grid-area: avatar;
		block-size: 7.5rem;
		inline-size: 7.5rem;
		flex: 1;
	}
	.names {
		grid-area: names;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-inline-start: 1rem;
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
		grid-area: buttons;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-block: 1rem;
	}
	.bio {
		grid-area: bio;
		margin: 0;
	}
	.web {
		grid-area: web;
		margin: 0;
	}
	.twitterUser {
		display: none;
	}
	.location {
		display: none;
	}
	.followers {
		grid-area: follow;
		margin: 0;
	}
	@media screen and (min-width: 48rem) {
		block-size: 44rem;
		inline-size: 20rem;
		padding-inline-start: 1.5rem;
		padding-inline-end: 1rem;
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: repeat(8, auto);
		grid-template-areas: "avatar" "names" "bio" "buttons" "follow" "location" "web" "twitterUser";
		border-bottom: none;
		border-right: 1px solid #a5c71b;

		.avatar {
			block-size: 15.875rem;
			inline-size: 15.875rem;
			justify-self: center;
			margin-block-end: 0;
		}
		.twitterUser {
			display: block;
			grid-area: twitterUser;
			margin: 0;
		}
		.location {
			display: flex;
			grid-area: location;
			margin: 0;
			align-items: center;
		}
		.names {
			padding-inline-start: 0;
			align-items: center;
		}

		.bio {
			color: var(--white);
		}
		.username {
			margin-block-end: 0;
		}
	}
`;

function Profile(props) {
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

	return (
		<ProfileStyled>
			<img
				src={avatar_url}
				width="278"
				height="278"
				alt=""
				className="avatar"
			/>
			<div className="names">
				<p className="name">&lt; {name} /&gt;</p>
				<p className="username ">{login}</p>
			</div>
			<div className="buttons">
				<Button
					text="Follow"
					link={`https://twitter.com/${twitter_username}`}
				/>
				<Button
					text="Sponsor"
					icon={
						<Icon
							name="heart"
							size="24"
							color="red"
						/>
					}
					link="https://www.buymeacoffee.com/alfgow"
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
				className="web info"
			>
				{blog}
			</a>
			<a
				href={`https://twitter.com/${twitter_username}`}
				target="_blank"
				rel="noreferrer"
				className="twitterUser info"
			>
				@{twitter_username}
			</a>
		</ProfileStyled>
	);
}

export default Profile;
