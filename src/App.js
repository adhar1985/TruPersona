import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import Result from "./Components/Result";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            level2Options: [],
            score: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0
            },
            quizEnd: false,
            result: {}
        };
    }

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
    };

    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption } = this.state;
        const questionObj = questionBank[currentQuestion];

        if (selectedOption !== '') {
            if (selectedOption.indexOf('_') !== -1) {
                this.checkLevel2Answer();

            } else {
                const optionObj = questionObj.options.find((o) => ""+o.key === ""+selectedOption);

                if (optionObj.level2Options) {
                    this.setState((prevState) => ({
                        selectedOption: "",
                        level2Options: optionObj.level2Options
                    }));
                } else {
                    this.setState((prevState) => {
                        prevState.result["Q"+questionObj.id] = selectedOption;
                        return {result: prevState.result};
                    });

                    this.setState((prevState) => {
                        if (!questionBank[currentQuestion].done) {
                            optionObj.typeScore.forEach((value, index) => {
                                prevState.score[index+1] = prevState.score[index+1] + value;
                            });
                            questionBank[currentQuestion].done = true;
                        }
                        return {score: prevState.score};
                    });

                    this.handleNextQuestion();
                }
            }
        }
    };

    checkLevel2Answer = () => {
        const { questionBank, currentQuestion, selectedOption } = this.state;
        const questionObj = questionBank[currentQuestion];

        this.setState((prevState) => {
            prevState.result["Q"+questionObj.id] = selectedOption;
            return {result: prevState.result};
        });

        this.setState((prevState) => {
            if (!questionBank[currentQuestion].done) {
                const optionObj = questionBank[currentQuestion].options.find((o) => ""+o.key === ""+selectedOption.split("_")[0]);
                optionObj.level2Options.find((o) => ""+o.key === ""+selectedOption).typeScore.forEach((value, index) => {
                    prevState.score[index+1] = prevState.score[index+1] + value;
                });
                questionBank[currentQuestion].done = true;
            }
            return {score: prevState.score};
        });

        this.handleNextQuestion();
    }

    handleNextQuestion = () => {
        const { questionBank, currentQuestion } = this.state;
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
                level2Options: []
            }));
        } else {

            // All done send the result to Firebase
            console.log({
                qa: this.state.result,
                score: this.state.score
            });

            this.setState({
                quizEnd: true,
            });
        }
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, level2Options, score, quizEnd } =
            this.state;
        return (
            <div className="App d-flex flex-column align-items-left justify-content-center">
                <h1 className="app-title">Enneagram Personality Test</h1>
                {!quizEnd
                    ?(<div className="flex-container">
                        <Question
                            question={questionBank[currentQuestion]}
                            selectedOption={selectedOption}
                            level2Options={level2Options}
                            onOptionChange={this.handleOptionChange}
                            onSubmit={this.handleFormSubmit}
                        />
                        <Score score={score}/>
                    </div>)
                    :(<Result score={score}/>)
                }
            </div>
        );
    }
}

export default App;