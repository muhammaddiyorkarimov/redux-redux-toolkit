import React from 'react'

function UiInput({ label, type, setState, state }) {
	return (
		<div className="form-floating">
			<input type={type} className="form-control" id="floatingText" placeholder={label} value={state} onChange={(e) => {
				return setState(e.target.value)
			}} />
			<label htmlFor="floatingText">{label}</label>
		</div>
	)
}

export default UiInput