import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Switch, Route } from "react-router-dom";
import Ribbon from './Window/Ribbon';
import Window from './Window';
import Styles from './terminal.module.css';

function Terminal(props) {

    const mainComponent = (
        <React.Fragment>
            <div className={Styles.terminal}>
                <Container fluid>
                    <Row>
                        <Ribbon />
                        <Window />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );

    return (
        <Switch>

            { /* Main Page Layout */ }
            <Route path='/' exact>
                {mainComponent}
            </Route>

            <Route path='/cli'>
                {mainComponent}
            </Route>

        </Switch>
    );
}

export default Terminal;