import React from "react";
import Skeleton from "react-loading-skeleton";
import { Props } from "../../types/types";

const Card = ({ item, index, small, source }: Props) => {
	function handleVoteClass(stats: String) {
		if (stats === "up") return "--up";
		if (stats === "down") return "--down";
	}

	if (source === "summary") {
		return (
			<div key={index} className={`card card--${item.media}`}>
				<strong className="card__author flex-icon">
					<img
						src={`/${item.mediaPath}`}
						alt={item.media}
					/>{" "}
					{item.username}
				</strong>
				<p className="card__number">
					<strong>{item.score}</strong>
					Followers
				</p>
				<strong
					className={`card__stats card__stats${handleVoteClass(
						item.stats
					)} flex-icon`}
				>
					<img
						src={`/${item.statsPath}`}
						alt={item.stats}
					/>{" "}
					{item.number} {small ? "%" : "Today"}
				</strong>
			</div>
		);
	}

	if (source === "overview") {
		return (
			<div key={item.id} className="card card--small">
				<strong className="card__title">{item.title}</strong>
				<img
					className="card__icon-media"
					src={item.mediaPath}
					alt={item.media}
				/>
				<p className="card__number">
					<strong>{item.score}</strong>
				</p>
				<strong
					className={`card__stats card__stats${handleVoteClass(
						item.stats
					)} flex-icon`}
				>
					<img src={item.statsPath} alt={item.stats} /> {item.number}{" "}
					%
				</strong>
			</div>
		);
	}

	return (
		<div key={index} className="card card--small">
			<strong className="card__title">{item.title}</strong>
			<img
				className="card__icon-media"
				src={item.mediaPath}
				alt={item.media}
			/>
			<p className="card__number">
				<strong>{item.score}</strong>
			</p>
			<strong
				className={`card__stats card__stats${handleVoteClass(
					item.stats
				)} flex-icon`}
			>
				<img src={item.statsPath} alt={item.stats} /> {item.number} %
			</strong>
		</div>
	);
};

export default Card;
