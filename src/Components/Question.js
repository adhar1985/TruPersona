import {Component} from "react";
import Options from "./Option";

class Question extends Component{
    render() {
        const {question, selectedOption, level2Options, onOptionChange, onSubmit} = this.props;

        const options = level2Options && level2Options.length ? level2Options : question.options;

        return(
            <div className="questions">
                <h3>Question {question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form onSubmit={onSubmit} className="mt-2 mb-2">
                    <Options
                        options={options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <button type="submit" className="btn btn-primary mt-2">
                        Next
                    </button>
                </form>
            </div>
        )
    }
}

export default Question;