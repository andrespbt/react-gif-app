import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
	const [categories, setCategories] = useState(['Dragon Ball Z']);

	const onAddCategory = newCategory => {
		const categoriesLowerCase = categories.map(category => category.toLowerCase());
		const newCategoryLowerCase = newCategory.toLowerCase();
		if (categoriesLowerCase.includes(newCategoryLowerCase)) return;

		setCategories([newCategory, ...categories]);
	};
	return (
		<>
			<h1>GiftExpertApp</h1>

			<AddCategory onNewCategory={onAddCategory} />

			<ol>
				{categories.map(category => (
					<GifGrid
						key={category}
						category={category}
					/>
				))}
			</ol>
			{/* gif item */}
		</>
	);
};
