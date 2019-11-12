import React from 'react';
import { formatDate, getCurrentDate, getMaxDate } from '../constants/utils';

class Input extends React.Component {
    state = { 
        data: {},
        errors: {}
    }
    
    handleChange = (e) => {
        let { data, errors } = this.state;
        let name = e.target.name;
        let value = e.target.value;
        value = name === 'category' ? parseInt(value) : value;
		value = name === 'date' ? formatDate(value) : value;
        data[name] = value;

        if (errors[name] !== '' ) {
            delete errors[name];
            return this.setState({errors});
        }
        
        this.setState({ data });
    };

    
    validation = e => {
        let input = e.target.value;
        let name = e.target.name;
        let errors = {...this.state.errors};

        if (input === "") {
            errors[name] = 'No puedes dejar este campo vacío';
            this.setState({errors});
        }
           
        
        if (name === 'title') {
            if (input.length > 0 && input.length <= 4) {
                errors[name] = 'El título es demasiado corto, describe un poco más tu tarea';
                return this.setState({errors});
            } 
             

            if (input.length > 50) {
                errors[name] = 'El título es demasiado largo. Intenta acortarlo un poco';
                return this.setState({errors});
            } 
             
            
        } 


        if (name === 'date') {
            let today = getCurrentDate();
            let maxDate = getMaxDate();

            if (input < today) {
                errors[name] = 'No puedes elegir una fecha pasada';
                this.setState({errors});
            } 

            if (input > maxDate) {
                errors[name] = 'No puedes ingresar una fecha tan lejana';
                this.setState({errors});
            }
            this.setState({errors});   
        }


        if (name === 'payment') {
            input = input.replace(/\./, '');
        
            if (input < 5000) {
                errors[name] = 'El pago mínimo que puedes ofrecer es $5.000';
                this.setState({errors});
            } 

            
            this.setState({errors});   
        }


        
        
    }

	renderInput(name, label, type = 'text', placeholder='', min=4, max=20) {
		if (this.store !== null && this.actions !== null) {
			return (
				<Input name={name} label={label} value={this.state[name]} onChange={this.handleChange} onBlur={this.validation} type={type} placeholder={placeholder} min={min} max={max} />
			);
		}
	}
    
    renderButton(label) {
        return(<button className="large-btn" type="submit">
        {label}
    </button>)
    }
    
    renderSubmitButton() {
        return (<button className="large-btn" type="submit">
        Enviar
    </button>)
    }


    renderDisabledButton() {
        return (<button className="large-btn disabled" type="submit" disabled>
        Enviar
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
                
            />
            </>  );
    }
}
 
export default Input;






