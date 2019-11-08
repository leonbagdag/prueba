import React from 'react';
import { formatDate } from '../constants/utils';


class Input extends React.Component {
    state = { 
        data: {}
    }
    
    handleChange = (e) => {
		let { data } = this.state;
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        value = name === 'category' ? parseInt(value) : value;
		value = name === 'date' ? formatDate(value) : value;
        data[name] = value;
		this.setState({ data });
	};

	renderInput(name, label, type = 'text', placeholder='', min=4, max=20) {
		if (this.store !== null && this.actions !== null) {
			return (
				<Input name={name} label={label} value={this.state[name]} onChange={this.handleChange} type={type} placeholder={placeholder} min={min} max={max}  />
			);
		}
	}
    
    renderButton(label) {
        return(<button className="large-btn" type="submit">
        {label}
    </button>)
    }
    
    render() { 
        const { name, label, ...rest} = this.props;
        
        return (<>
            <label htmlFor={name}>{label}</label>
            <input
               {...rest}
                id={name}
                name={name}
                required
            />
            </>  );
    }
}
 
export default Input;






