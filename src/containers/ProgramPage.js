import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DayListComponent from '../components/dayList/dayListComponent';

export default class ProgramPage extends Component {
    render() {
        return (
            <div>
                Hello World!
                <DayListComponent />
            </div>
        );
    }
}
