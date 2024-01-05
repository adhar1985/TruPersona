import { Component } from 'react';
import '../App.css'

class Result extends Component {

	handleRestart = (e) => {
		e.preventDefault();
		window.location.reload();
	};

    render() {
        const { score } = this.props;

        const highest = Math.max(...Object.values(score));
		const result = Object.keys(score).filter((key) => highest === score[key]).map((key)=> `<span class="winner-type">${key}</span>`).join(' or ');

        return (
            <div className="result">
                <h3>Your personality type is</h3>
				<div dangerouslySetInnerHTML={{__html: result}}></div>
				<br></br>
				<br></br>
				<button
					type="button"
					className="btn btn-primary mt-2"
					onClick={this.handleRestart}
				>
					Restart
				</button>
            </div>
        );
    }
}

export default Result;