import React from 'react'

function Input({label, setState, type="text"}) {

	return (
		<div className="form-floating">
			<input type={type} onChange={(e) => {
				setState(e.target.value)
			}} className="form-control mt-3" id="floatingInput" placeholder={label} />
			<label htmlFor="floatingInput">{label}</label>
		</div>
	)
}

export default Input