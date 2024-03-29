import React, { Component } from "react";
import {Card} from "react-bootstrap";
import MCQs from "../MCQs/MCQs";
import coverPic1 from "../../images/Exam.jpg";
import coverPic2 from "../../images/test.png";

class ExamList extends Component {
  constructor() {
    super();
    this.state = {
      Exam_list: [
        { ExamName: "HTML", tests: 2 },
        { ExamName: "CSS", tests: 1 },
        { ExamName: "JAVASCRIPT", tests: 3 }
      ],
      Exam_info: [
        {
          ExamName: "HTML",
          tests: [
            {
              name: "Test 1",
              questions: 5,
              time: 60,
              Exam_questions: [
                {
                  Exam: "What is abbreviation of HTML?",
                  option1: "Hyper Type Multi Language",
                  option2: "Higher Text Multiple Language",
                  option3: "Hyper Text Markup Language",
                  option4: "Hollow Type Markup Language ",
                  answer: "3"
                },
                {
                  Exam: "How many types of markup in HTML?",
                  option1: "Both",
                  option2: "1 - opening and closing markup only",
                  option3: "1 - self closing markups only",
                  option4: "None of above",
                  answer: "1"
                },
                {
                  Exam: "<iframe> is HTML5 markup",
                  option1: "False",
                  option2: "True",
                  option3: "Neither true nor false",
                  option4: "Not Sure",
                  answer: "2"
                },
                {
                  Exam: "<div> and <span> are inline elements?",
                  option1: "True",
                  option2: "False",
                  option3: "Neither True nor false",
                  option4: "None of above",
                  answer: "3"
                },
                {
                  Exam: "HTML must need body markup. Why? Because:",
                  option1: "It did'nt needs to show the markups inside it.",
                  option2: "It needs to show the markups inside it.",
                  option3: "It needs <head> element",
                  option4: "None of above",
                  answer: "2"
                }
              ]
            },
            {
              name: "Test 2",
              questions: 10,
              time: 120,
              Exam_questions: [
                {
                  Exam:
                    "The external JavaScript file must contain the <script> tag.",
                  option1: "True",
                  option2: "False",
                  option3: "Neither true nor false",
                  option4: "None of above",
                  answer: "1"
                },
                {
                  Exam:
                    "Choose the correct HTML element for the largest heading:",
                  option1: "<h6>",
                  option2: "<heading>",
                  option3: "<h1>",
                  option4: "<head>",
                  answer: "3"
                },
                {
                  Exam:
                    "What is the correct HTML element for inserting a line break?",
                  option1: "<break>",
                  option2: "<br>",
                  option3: "<lnbr>",
                  option4: "none of above",
                  answer: "2"
                },
                {
                  Exam:
                    "What is the correct HTML for adding a background color?",
                  option1: "<background>yellow</background>",
                  option2: '<body style="bg-color:yellow;">',
                  option3: '<body bg="yellow">',
                  option4: '<body style="background-color:yellow;">',
                  answer: "4"
                },
                {
                  Exam:
                    "Choose the correct HTML element to define important text",
                  option1: "<strong>",
                  option2: "<b>",
                  option3: "<important>",
                  option4: "<i>",
                  answer: "1"
                },
                {
                  Exam:
                    "Choose the correct HTML element to define emphasized text",
                  option1: "<i>",
                  option2: "<emphasize>",
                  option3: "<italic>",
                  option4: "<em>",
                  answer: "4"
                },
                {
                  Exam: "What is the correct HTML for creating a hyperlink?",
                  option1: "<a>http://www.w3schools.com</a>",
                  option2: ' <a href="http://www.w3schools.com">W3Schools</a>',
                  option3:
                    '<a name="http://www.w3schools.com">W3Schools.com</a>',
                  option4:
                    '<a url="http://www.w3schools.com">W3Schools.com</a>',
                  answer: "2"
                },
                {
                  Exam: "Which character is used to indicate an end tag?",
                  option1: "<",
                  option2: "*",
                  option3: "/",
                  option4: "^",
                  answer: "3"
                },
                {
                  Exam: "How can you open a link in a new tab/browser window?",
                  option1: '<a href="url" new>',
                  option2: '<a href="url" target="_blank">',
                  option3: '<a href="url" target="new">',
                  option4: '<a href="url" target="new_blank">',
                  answer: "2"
                },
                {
                  Exam: "Which of these elements are all <table> elements?",
                  option1: "<table><head><tfoot>",
                  option2: "<table><tr><td>",
                  option3: "<table><tr><tt>",
                  option4: "<thead><body><tr>",
                  answer: "2"
                }
              ]
            }
          ]
        },
        {
          ExamName: "CSS",
          tests: [
            {
              name: "Test 1",
              questions: 10,
              time: 120,
              Exam_questions: [
                {
                  Exam: "What does CSS stand for?",
                  option1: "Colorful Style Sheets",
                  option2: "Creative Style Sheets",
                  option3: "Cascading Style Sheets",
                  option4: "Computer Style Sheets",
                  answer: "3"
                },
                {
                  Exam:
                    "Where in an HTML document is the correct place to refer to an external style sheet?",
                  option1: "In the <head> section",
                  option2: "At the end of the document",
                  option3: "In the <body> section",
                  option4: "None of above",
                  answer: "1"
                },
                {
                  Exam:
                    "Which HTML tag is used to define an internal style sheet?",
                  option1: "<script>",
                  option2: "<style>",
                  option3: "<css>",
                  option4: "<pre>",
                  answer: "2"
                },
                {
                  Exam: "Which is the correct CSS syntax?",
                  option1: "{body;color:black;}",
                  option2: "body:color=black;",
                  option3: "{body:color=black;}",
                  option4: "body {color: black;}",
                  answer: "4"
                },
                {
                  Exam: "How do you insert a comment in a CSS file?",
                  option1: "' this is a comment",
                  option2: "// this is a comment",
                  option3: "// this is a comment //",
                  option4: "/* this is a comment */",
                  answer: "4"
                },
                {
                  Exam:
                    "Which property is used to change the background color?",
                  option1: "color",
                  option2: "bgcolor",
                  option3: "background-color",
                  option4: "backgroundColor",
                  answer: "3"
                },
                {
                  Exam: "Which CSS property controls the text size?",
                  option1: "font-size",
                  option2: "text-style",
                  option3: "text-size",
                  option4: "font-style",
                  answer: "1"
                },
                {
                  Exam:
                    "What is the correct CSS syntax for making all the <p> elements bold?",
                  option1: '<p style="text-size:bold;">',
                  option2: "p {text-size:bold;}",
                  option3: '<p style="font-size:bold;">',
                  option4: "p {font-weight:bold;}",
                  answer: "4"
                },
                {
                  Exam: "How do you display hyperlinks without an underline?",
                  option1: "a {decoration:no-underline;}",
                  option2: "a {text-decoration:no-underline;}",
                  option3: "a {underline:none;}",
                  option4: "a {text-decoration:none;}",
                  answer: "4"
                },
                {
                  Exam:
                    "How do you make each word in a text start with a capital letter?",
                  option1: "transform:capitalize",
                  option2: "text-transform:capitalize",
                  option3: "You can't do that with CSS",
                  option4: "text-style:captialize",
                  answer: "2"
                }
              ]
            }
          ]
        },
        {
          ExamName: "JAVASCRIPT",
          tests: [
            {
              name: "Test 1",
              questions: 5,
              time: 60,
              Exam_questions: [
                {
                  Exam:
                    'What is the correct JavaScript syntax to change the content of this <p id="demo">This is a demonstration.</p> HTML element?',
                  option1:
                    'document.getElementByName("p").innerHTML = "Hello World!";',
                  option2:
                    'document.getElement("p").innerHTML = "Hello World!";',
                  option3:
                    'document.getElementById("demo").innerHTML = "Hello World!";',
                  option4: '#demo.innerHTML = "Hello World!";',
                  answer: "3"
                },
                {
                  Exam: "Where is the correct place to insert a JavaScript?",
                  option1:
                    "Both the <head> section and the <body> section are correct",
                  option2: "The <body> section",
                  option3: "The <head> section",
                  option4: "afer the <!DOCTYPE html> declaration",
                  answer: "1"
                },
                {
                  Exam: 'How do you write "Hello World" in an alert box?',
                  option1: 'alert("Hello World");',
                  option2: 'alertBox("Hello World");',
                  option3: 'msgBox("Hello World");',
                  option4: 'msg("Hello World");',
                  answer: "1"
                },
                {
                  Exam: "How do you create a function in JavaScript?",
                  option1: "function = myFunction()",
                  option2: "function myFunction()",
                  option3: "function : myFunction()",
                  option4: "function => myFunction()",
                  answer: "2"
                },
                {
                  Exam: "How to write an IF statement in JavaScript?",
                  option1: "if i = 5 then",
                  option2: "if i = 5",
                  option3: "if (i == 5)",
                  option4: "if i == 5 then",
                  answer: "3"
                }
              ]
            },
            {
              name: "Test 2",
              questions: 6,
              time: 120,
              Exam_questions: [
                {
                  Exam:
                    'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
                  option1: "if i <> 5",
                  option2: "if (i != 5)",
                  option3: "if (i <> 5)",
                  option4: "if i =! 5 then",
                  answer: "2"
                },
                {
                  Exam: "How does a WHILE loop start?",
                  option1: "while (i <= 10; i++)",
                  option2: "while i = 1 to 10",
                  option3: "while (i <= 10)",
                  option4: "none of above",
                  answer: "3"
                },
                {
                  Exam: "How does a FOR loop start?",
                  option1: "for (i = 0; i <= 5; i++)",
                  option2: "for i = 1 to 5",
                  option3: "for (i = 0; i <= 5)",
                  option4: "for (i <= 5; i++)",
                  answer: "1"
                },
                {
                  Exam: "How can you add a comment in a JavaScript?",
                  option1: "//This is a comment",
                  option2: "<!--This is a comment-->",
                  option3: "'This is a comment",
                  option4: "#This is a comment#",
                  answer: "1"
                },
                {
                  Exam: "What is the correct way to write a JavaScript array?",
                  option1: 'var colors = "red", "green", "blue"',
                  option2:
                    'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                  option3: 'var colors = (1:"red", 2:"green", 3:"blue")',
                  option4: 'var colors = ["red", "green", "blue"]',
                  answer: "4"
                },
                {
                  Exam:
                    "How do you round the number 7.25, to the nearest integer?",
                  option1: "Math.rnd(7.25)",
                  option2: "rnd(7.25)",
                  option3: "Math.round(7.25)",
                  option4: "round(7.25)",
                  answer: "3"
                }
              ]
            },
            {
              name: "Test 3",
              questions: 5,
              time: 60,
              Exam_questions: [
                {
                  Exam:
                    "How do you find the number with the highest value of x and y?",
                  option1: "Math.ceil(x, y)",
                  option2: "Math.max(x, y)",
                  option3: "top(x, y)",
                  option4: "ceil(x, y)",
                  answer: "1"
                },
                {
                  Exam:
                    'What is the correct JavaScript syntax for opening a new window called "w2" ?',
                  option1: 'w2 = window.new("http://www.w3schools.com");',
                  option2: 'w2 = window.open("http://www.w3schools.com");',
                  option3: 'w2 = window.create("http://www.w3schools.com");',
                  option4: "none of above",
                  answer: "2"
                },
                {
                  Exam: "JavaScript is the same as Java.",
                  option1: "True",
                  option2: "False",
                  option3: "Neither true nor false",
                  option4: "none of above",
                  answer: "2"
                },
                {
                  Exam:
                    "Which event occurs when the user clicks on an HTML element?",
                  option1: "onmouseclick",
                  option2: "onmouseover",
                  option3: "onchange",
                  option4: "onclick",
                  answer: "4"
                },
                {
                  Exam: "How do you declare a JavaScript variable?",
                  option1: "v carName;",
                  option2: "variable carName;",
                  option3: "var carName;",
                  option4: "variables carName;",
                  answer: "3"
                }
              ]
            }
          ]
        }
      ],
      saveSelectedExamObj: null,
      renderSelectedTestObj: false,
      renderMCQs: false,
      currentTestIndex: null
    };
    this.back = this.back.bind(this);
    this.backToDashboard = this.backToDashboard.bind(this);
  }

  // saving selected Exam to state
  updateExamInfoState(index) {
    const { Exam_info } = this.state;
    this.setState({
      saveSelectedExamObj: Exam_info[index],
      renderSelectedTestObj: true
    });
  }

  // back button function
  back() {
    this.setState({ renderSelectedTestObj: false });
  }

  backToDashboard(param) {
    this.setState({ renderMCQs: param });
  }

  renderExamInfo() {
    const { saveSelectedExamObj } = this.state;
    return (
      <div>
        <h2 className="text-center"><i class="fa fa-desktop" aria-hidden="true" />  {saveSelectedExamObj.ExamName} Exam</h2>

        <div className="row">
          {saveSelectedExamObj.tests.map((test, i) => {
            return (
              <div
                className="col-md-4"
                key={`${saveSelectedExamObj.ExamName}_${test.name}`}
              >
                <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={coverPic2}  alt="Card image cap" />
                      <Card.Body>
                        <Card.Title>{test.name}</Card.Title>
                        <Card.Text>
                          <p className="card-text">
                            Total Questions: {test.questions}
                          </p>
                          <p>Total Time: {test.time / 60} Minutes</p>
                        </Card.Text>
                      </Card.Body>
                      <Card.Body>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                              this.setState({
                              renderMCQs: true,
                              currentTestIndex: i,
                              renderSelectedTestObj: false
                            });
                          }}
                        >
                        Start Exam {i + 1} <i className=" fa fa-paper-plane" />
                        </button>
                      </Card.Body>
                </Card>
              </div>
              
            );
          })}
        </div>
        <br />
        <button className="btn btn-secondary" onClick={this.back}>
          Back <i className="fa fa-backward" />
        </button>
      </div>
    );
  }

  renderExamList() {
    const { Exam_list } = this.state;
    return (
      <div>
        <h1 className="text-center"><i className=" fa fa-desktop" />   Dashboard</h1>

        <div className="row">
          {Exam_list.map((qList, index) => {
            return (
              <div className="col-md-4" key={`${qList}_${index}`}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={coverPic1} alt="Card image cap"/>
                  <Card.Body>
                    <Card.Title>{qList.ExamName} Exam</Card.Title>
                    <Card.Text>
                      Test your skills of {qList.ExamName} by taking this small
                      Exam. It has {qList.tests} tests.
                    </Card.Text>
                    <button
                      className="btn btn-warning"
                      onClick={this.updateExamInfoState.bind(this, index)}
                    >
                      Go Ahead <i className=" fa fa-paper-plane" />
                    </button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    const {
      renderSelectedTestObj,
      renderMCQs,
      saveSelectedExamObj,
      currentTestIndex
    } = this.state;
    return (
      <div>
        {renderSelectedTestObj ? (
          this.renderExamInfo()
        ) : renderMCQs ? (
          <MCQs
            currentQuesObj={saveSelectedExamObj}
            currentTestIndex={currentTestIndex}
            backToDashboard={this.backToDashboard}
          />
        ) : (
          this.renderExamList()
        )}
        {console.log(currentTestIndex, saveSelectedExamObj, renderMCQs)}
      </div>
    );
  }
}

export default ExamList;
