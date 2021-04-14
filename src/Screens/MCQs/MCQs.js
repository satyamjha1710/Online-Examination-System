import React, { Component } from "react";

class MCQs extends Component {
  static defaultProps = {
    currentQuesObj: {},
    currentTestIndex: 0
  };
  constructor(props) {
    super(props);
    const { currentQuesObj, currentTestIndex } = this.props;
    this.state = {
      question: currentQuesObj.tests[currentTestIndex].Exam_questions[0].Exam,
      opt1: currentQuesObj.tests[currentTestIndex].Exam_questions[0].option1,
      opt2: currentQuesObj.tests[currentTestIndex].Exam_questions[0].option2,
      opt3: currentQuesObj.tests[currentTestIndex].Exam_questions[0].option3,
      opt4: currentQuesObj.tests[currentTestIndex].Exam_questions[0].option4,
      i: 0,
      correct: 0,
      score: 0,
      min: null,
      sec: null
    };
    this.minute = Math.ceil(currentQuesObj.tests[currentTestIndex].time / 60);
    this.second = 1;
    this.timeStart = null;
    this.next = this.next.bind(this);
    this.timer = this.timer.bind(this);
  }

  next() {
    const { currentQuesObj, currentTestIndex } = this.props;
    var { i, correct, score } = this.state;

    var Exam_questions = currentQuesObj.tests[currentTestIndex].Exam_questions;

    var radioBtn = document.querySelector("input[name='option']:checked");
    if (radioBtn == null) {
      alert("select value");
    } else {
      if (Exam_questions[i].answer.match(radioBtn.value)) {
        console.log("Exam_questions[i].answer**", Exam_questions[i].answer);
        this.setState({ correct: ++correct });
      }

      if (Exam_questions.length - 1 === i) {
        document.getElementById("ExamContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        score = correct * (100 / Exam_questions.length).toFixed(2);
        console.log(Exam_questions.length);
        this.setState({ score });
      } else {
        i++;
        const question = Exam_questions[i].Exam;
        const option1 = Exam_questions[i].option1;
        const option2 = Exam_questions[i].option2;
        const option3 = Exam_questions[i].option3;
        const option4 = Exam_questions[i].option4;
        const answer = Exam_questions[i].answer;
        this.setState({
          question,
          opt1: option1,
          opt2: option2,
          opt3: option3,
          opt4: option4,
          i: i
        });
      }
    }
  }

  componentDidMount() {
    this.timer();
  }

  timer() {
    this.timeStart = setInterval(() => {
      this.setState({
        min: this.minute,
        sec: this.second
      });
      this.second--;
      if (this.second === 0) {
        this.second = 60;
        this.minute--;
        this.setState({
          sec: this.second,
          min: this.minute
        });
        if (this.minute < 0) {
          clearInterval(this.timeStart);
          const { currentQuesObj, currentTestIndex } = this.props;
          var Exam_questions =
            currentQuesObj.tests[currentTestIndex].Exam_questions;
          var { score, correct } = this.state;
          this.setState({
            min: 0,
            sec: 0
          });
          score = correct * (100 / Exam_questions.length).toFixed(2);
          this.setState({
            score
          });

        
          document.getElementById("resultContainer").style.display = "block";
        }
      }
    }, 1000);
  }

  render() {
    const { question, opt1, opt2, opt3, opt4, score, min, sec } = this.state;
    const { currentQuesObj, currentTestIndex } = this.props;
    return (
      <div>
        <div className="col-md-12">
          <div className="col" id="content">
            <div id="ExamContainer">
              <div className="modal-header">
                <h5>
                  <i className="fa fa-question-circle" />
                  <span> </span>
                  <span className="label label-warning">{question}</span>
                </h5>
                <h5>
                  {min} : {sec}
                </h5>
              </div>
              <div className="modal-body">
                <div className="Exam" id="Exam" data-toggle="buttons">
                  <label className="btn btn-lg btn-info btn-block">
                    <span className="btn-label">
                      <input type="radio" name="option" value="1" />
                      <br />
                      <i className="fa fa-arrow-right" />
                    </span>
                    <span>{opt1}</span>
                  </label>
                  <label className="btn btn-lg btn-info btn-block">
                    <span className="btn-label">
                      <input type="radio" name="option" value="2" />
                      <br />
                      <i className="fa fa-arrow-right" />
                    </span>
                    <span>{opt2}</span>
                  </label>
                  <label className="btn btn-lg btn-info btn-block">
                    <span className="btn-label">
                      <input type="radio" name="option" value="3" />
                      <br />
                      <i className="fa fa-arrow-right" />
                    </span>
                    <span>{opt3}</span>
                  </label>
                  <label className="btn btn-lg btn-info btn-block">
                    <span className="btn-label">
                      <input type="radio" name="option" value="4" />
                      <br />
                      <i className="fa fa-arrow-right" />
                    </span>
                    <span>{opt4}</span>
                  </label>
                  <button
                    className="btn btn-warning pull-right"
                    onClick={this.next.bind(this)}
                  >
                    Next Question <i className="fa fa-angle-double-right" />
                  </button>

                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div id="resultContainer" style={{ display: "none" }}>
              <div className="modal-header">
              <h2>{currentQuesObj.ExamName} Exam</h2>
                  <button
                    className="btn btn-success pull-right"
                    onClick={() => {
                      this.props.backToDashboard(false);
                    }}
                  >
                    Goto Dashboard <i className="fa fa-undo" />
                  </button>
                </div>
                <div className="modal-body">
                  <h3>{currentQuesObj.tests[currentTestIndex].name}</h3>
                  <p>
                    Time:
                    {currentQuesObj.tests[currentTestIndex].time / 60} Minute(s)
                  </p>
                  <p>Questions: {currentQuesObj.tests[currentTestIndex].questions}</p>
                  {score < 70 ? (
                    <h3>You are fail with grades {score}%</h3>
                  ) : (
                    <h3>You are pass with grades {score}%</h3>
                  )}
                  <hr />
                  <p className="badge badge-warning text-center">Good Luck! for next Exam. </p>
                  <br />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MCQs;
