import { useState, useEffect } from 'react';
import { getGifs } from '../src/helpers/getGifts';

export const useFetchGifs = category => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState([]);

	const getImages = async category => {
		const imagesArr = await getGifs(category);
		setImages(imagesArr);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages(category);
	}, []);

	return {
		images,
		isLoading,
	};
};
