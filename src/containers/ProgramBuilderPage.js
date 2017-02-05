import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class ProgramBuilderPage extends Component {
    componentWillMount() {
        console.log("HI");
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}
