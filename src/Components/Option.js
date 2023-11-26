import { Component } from 'react';

class Options extends Component {
    render() {
        const { options, selectedOption, onOptionChange } = this.props;

        console.log();

        return (
            <div className='options'>
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                        <input
                            type="radio"
                            name="option"
                            value={option.key}
                            checked={""+selectedOption === ""+option.key}
                            onChange={onOptionChange}
                            className="form-check-input"
                        />
                        <label className="form-check-label">{option.key}</label>
                    </div>
                ))}
            </div>
        );
    }
}

export default Options;