import React from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Styles from './window.module.css';
import Prompt from './Prompt';

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            input: '',
        };

        //Reference to Input
        this.inputRef = React.createRef();

        //Timer
        this.timer = null;

        //Method Bindings
        this._handleInput = this._handleInput.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleRef = this._handleRef.bind(this);
        this.insertNewResponse = this.insertNewResponse.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState() {
        this.setState({
            history: [],
            input: ''
        });
    }

    componentDidMount() {
        this.setState({
            history: [
                <Prompt key={0} code='default' />
            ],
        });
    }

    _handleInput(e) {
        this.setState({
            input: e.target.value.toLowerCase(),
        });
    }

    insertNewResponse(code, command) {
        let newState = this.state.history;

        if(code === 'contact') {
            newState.push(
                <Prompt key={newState.length} code='contact'>
                    {command}
                </Prompt>
            );
        }
        else if (code === 'error') {
            newState.push(
                <Prompt key={newState.length}>
                    {command}
                </Prompt>
            );
        }

        this.setState({
            history: newState,
            input: ''
        });
    }

    _handleKeyPress(e) {
        const state = this.state;

        if (e.key === 'Enter') {
            switch (state.input) {
                case 'clear':
                    this.resetState();
                    break;

                case 'contact':
                    this.insertNewResponse('contact', state.input);
                    break;

                default:
                    this.insertNewResponse('error', state.input);
                    break;
            }
        }
    }

    _handleRef(ref) {
        //Set Ref
        this.inputRef = ref;
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }

    render() {
        return (
            <Col className={Styles.wrapper}>
                <Container fluid className={Styles.window}>

                    {/* Previous Commands */}
                    <Row>
                        {this.state.history}
                    </Row>

                    {/* Input Prompt */}
                    <Row className={Styles.command}>
                        <Col>
                            <InputGroup size='lg'>
                                <InputGroup.Prepend className={Styles.prompt}>
                                    <InputGroup.Text className={Styles.prompt_text}>Name@Ankit/Portfolio : ~$</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    className={Styles.input}
                                    onChange={this._handleInput}
                                    onKeyPress={this._handleKeyPress}
                                    ref={this._handleRef}
                                    value={this.state.input}
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                </Container>
            </Col>
        );
    }
}

export default Window;