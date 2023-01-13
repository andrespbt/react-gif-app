import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [value, setValue] = useState('');
	const onInputChange = ({ target: { value } }) => {
		setValue(value);
	};
	const handleSubmit = e => {
		e.preventDefault();

		if (value.trim() <= 1) return;

		onNewCategory(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search Gifs"
				onChange={onInputChange}
				value={value}
			/>
		</form>
	);
};
