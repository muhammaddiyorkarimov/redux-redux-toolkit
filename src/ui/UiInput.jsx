import React from 'react';

function UiInput({ label, type, setState, state, id }) {
	return (
		<div className="form-floating">
			<input 
				type={type} 
				className="form-control"
				placeholder={label}
				value={state} 
				onChange={(e) => setState(e.target.value)} 
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
}

export default UiInput;
