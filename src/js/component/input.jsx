import React from 'react';


class Input extends React.Component {
    state = { 
        data: {}
    }
    
    handleChange = (e) => {
		let { data } = this.state;
		data[e.currentTarget.name] = e.currentTarget.value;
		this.setState({ data });
	};

	renderInput(name, label, type = 'text') {
		if (this.store !== null && this.actions !== null) {
			return (
				<Input name={name} label={label} value={this.state[name]} onChange={this.handleChange} type={type} />
			);
		}
	}
    
    renderButton(label) {
        return(<button className="large-btn" type="submit">
        {label}
    </button>)
    }
    
    render() { 
        const { name, label, value, type = "text", onChange, min=4, max=20, placeholder="" } = this.props;
        
        return (<>
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                id={name}
                min={min}
                max={max}
                name={name}
                type={type}
                placeholder={placeholder}
                
                required
            />
            </>  );
    }
}
 
export default Input;






