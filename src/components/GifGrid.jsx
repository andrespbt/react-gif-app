import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GiftItem } from './GiftItem';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{isLoading && <h2>Loading...</h2>}

			<div className="card-grid">
				{images.map(images => (
					<GiftItem
						key={images.id}
						{...images}
					/>
				))}
			</div>
		</>
	);
};
