import React from 'react';

function FormField({value, name, onChange, type, label}){

	if(type === 'textarea'){
		return(
			<div>
				<label>
					{label} : 
					<textarea
					value={value}
					name={name}
					onChange={ onChange }
					/>
				</label>
			</div>	
		)
	}

	return(
		<div>
			<label>
				{label} : 
				<input type={type}
				value={value}
				name={name}
				onChange={ onChange }
				/>
			</label>
		</div>
	)
}

export default FormField;