export const GiftItem = ({ title, url }) => {
	return (
		<div className="card">
			<img
				src={url}
				alt={title}
				height="275"
				width="275"
			/>
			<p>{title}</p>
		</div>
	);
};
