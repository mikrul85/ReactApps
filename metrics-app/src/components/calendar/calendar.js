import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
 
class CalendarRangePicker extends Component {

  render() {
    const {minDateFilter, maxDateFilter, dataMinDate, dataMaxDate} = this.props
    const startDateFilter = (minDateFilter
      .toLocaleString("ru", { year: 'numeric', month: 'numeric', day: 'numeric' })
      .split('.')
      .reverse()
      .join('-'))
    const endDateFilter = (maxDateFilter
      .toLocaleString("ru", { year: 'numeric', month: 'numeric', day: 'numeric' })
      .split('.')
      .reverse()
      .join('-'))
    const minDate = dataMinDate.toLocaleString("en", { year: 'numeric', month: 'numeric', day: 'numeric' })
    const maxDate = dataMaxDate.toLocaleString("en", { year: 'numeric', month: 'numeric', day: 'numeric' })
    return ( 
      <div className="text-right mr-5 mt-3">
        <DateRangePicker 
          onApply={this.props.handleEvent} 
          startDate={minDate} 
          minDate={minDate} 
          maxDate={maxDate} 
          opens="left" 
        >
          <button className="btn btn-light">{startDateFilter} - {endDateFilter}</button>
        </DateRangePicker>
      </div>
    );
  }
}

export default CalendarRangePicker;