import React, { Component } from 'react';
import Metric from '../metric/metric'
import './metricsComponent.css';
import Table from '../table/table';
import CalendarRangePicker from '../calendar/calendar';

class MetricsComponent extends Component {
  
  state = {
    data: {},
    filteredData: {},
    isLoading: true,
    minDateFilter: new Date(2019, 0, 1),
    maxDateFilter: new Date(2019, 11, 1),
    dataMinDate: {},
    dataMaxDate: {}
  }

 componentDidMount() {
        fetch('/files/data.json')
        .then(function(response) {
          return response.json();
         })
        .then((result) => {
            result.shift()
            this.setState((state) => {
                return {
                  data: result,
                  filteredData: result,
                  isLoading: false,
                  minDateFilter: new Date (result[0].Date),
                  maxDateFilter: new Date (result[result.length-1].Date),
                  dataMinDate: new Date (result[0].Date),
                  dataMaxDate: new Date (result[result.length-1].Date),
                }
              });
        })
        .catch( console.log );
  }

  handleEvent = (event, picker) => {
    const startDate = (new Date (picker.startDate)).toLocaleString("ru", { year: 'numeric', month: 'numeric', day: 'numeric' })
    const endDate = (new Date (picker.endDate)).toLocaleString("ru", { year: 'numeric', month: 'numeric', day: 'numeric' })
    const data = this.state.data.filter(function(item) {
      const itemDate = (new Date(item.Date)).toLocaleString("ru", { year: 'numeric', month: 'numeric', day: 'numeric' })
      return itemDate >= startDate && itemDate <= endDate;
    });
    this.setState((state) => {
      return {
        filteredData: data,
        minDateFilter: new Date (picker.startDate),
        maxDateFilter: new Date (picker.endDate)
      }
    });
  }


  render() {
    const {isLoading, filteredData, minDateFilter, maxDateFilter, dataMinDate, dataMaxDate} = this.state
    return (
      <div>
        { isLoading ? null : 
          <CalendarRangePicker 
            handleEvent={this.handleEvent} 
            minDateFilter={minDateFilter} 
            maxDateFilter={maxDateFilter}
            dataMinDate={dataMinDate}
            dataMaxDate={dataMaxDate}
          /> 
        }
        { isLoading ? null : <Metric data={filteredData} /> }
        { isLoading ? null : <Table data={filteredData} /> }
      </div>
    );
  }
}

export default MetricsComponent;