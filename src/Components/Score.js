import { Component } from 'react';
import '../App.css'

class Score extends Component {
    render() {
        const { score } = this.props;

        const highest = Math.max(...Object.values(score));

        return (
            <div className="score">
                <h4>Score</h4>
                {Object.keys(score).map((key, index) => (
                    <div key={index} style={{color: highest !== 0 && highest === score[key] ? 'green' : 'white'}} >Type {key}: {score[key]}</div>
                ))}
            </div>
        );
    }
}

export default Score;