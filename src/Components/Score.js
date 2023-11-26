import { Component } from 'react';
import '../App.css'

class Score extends Component {
    render() {
        const { score } = this.props;

        const winner = Object.keys(score).reduce((prev, current) => {
            return score[prev] > score[current] ? prev : current
        });

        console.log(winner);

        return (
            <div>
                <h2>Result</h2>
                {Object.keys(score).map((key, index) => (
                    <div key={index} style={{color: winner === key ? 'green' : 'white'}} >Type {key}: {score[key]}</div>
                ))}
            </div>
        );
    }
}

export default Score;