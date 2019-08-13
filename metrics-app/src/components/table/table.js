import React, { Component } from 'react';
import './table.css'

class Table extends Component {

  state = {
    data: [{
      Channel: null,
      Date: '',
      ['Media Source']: null,
      ADS_FIVE_WATCHED: null,
      ADS_VIDEOAD_WATCHED: null,
      Add_Friend_Request: null}],
      sortValue: "ASC",
      sortField: ""
  }

  componentDidMount() {
      this.setState((state) => {
        return {
          data: this.props.data
        }
      })
  }

  componentDidUpdate(previousProps) {
    if (previousProps.data !== this.props.data) {
      this.setState((state) => {
        return {
          data: this.props.data
        }
      })
    }
  }

  
  onSort = (sortField) => {
    let {data, sortValue} = this.state
    let sortData = {}
    if (sortField === "Date") {
      if (sortValue === "ASC") {
        sortData = data.sort((a, b) => new Date(b.Date) - new Date(a.Date))
        sortValue = "DESC"
      } else {
        sortData = data.sort((a, b) => new Date(a.Date) - new Date(b.Date))
        sortValue = "ASC"
      }
    }
    if (sortField === "Media Source") {
      if (sortValue === "ASC") {
        sortData = data.sort((b, a) => {
          const strA = a['Media Source'].toUpperCase();
          const strB = b['Media Source'].toUpperCase();
        
          let comparison = 0;
          if (strA > strB) {
            comparison = 1;
          } else if (strA < strB) {
            comparison = -1;
          }
          return comparison;
          }        
        )
        sortValue = "DESC"
      } else {
        sortData = data.sort((a, b) => {
          const strA = a['Media Source'].toUpperCase();
          const strB = b['Media Source'].toUpperCase();
        
          let comparison = 0;
          if (strA > strB) {
            comparison = 1;
          } else if (strA < strB) {
            comparison = -1;
          }
          return comparison;
          }        
        )
        sortValue = "ASC"
      }
    }
    this.setState((state) => {
      return {
        data: sortData,
        sortValue: sortValue,
        sortField: sortField
      }
    });
  }

  render() {
    const dataTable = this.state.data
    return (
      <div className="mx-5 mt-3 mb-5 div-table">
            <table className="table table-striped table-bordered table-hover">
                <tbody>
                <tr className="text-center">
                  <th scope="col">CHANNEL</th>
                  <th scope="col" onClick={this.onSort.bind(null, "Date")} >
                    DATE {this.state.sortField === "Date" ? (this.state.sortValue === "ASC" ? '\u21C5' : '\u21F5') : null}
                  </th>
                  <th scope="col" onClick={this.onSort.bind(null, "Media Source")} >
                    MEDIA SOURCE {this.state.sortField === "Media Source" ? (this.state.sortValue === "ASC" ? '\u21C5' : '\u21F5') : null}
                  </th>
                  <th scope="col">ADS_FIVE_WATCHED</th>
                  <th scope="col">ADS_VIDEOAD_WATCHED</th>
                  <th scope="col">ADD_FRIEND_REQUEST</th>
                  </tr>
                  { dataTable.map((item, i) => {
                      return (<tr key={i}>
                        <td className="text-left">{dataTable[i].Channel}</td>
                        <td className="text-center">{dataTable[i].Date.substr(0, 10)}</td>
                        <td className="text-center">{dataTable[i]['Media Source']}</td>
                        <td className="text-right">{dataTable[i].ADS_FIVE_WATCHED}</td>
                        <td className="text-right">{dataTable[i].ADS_VIDEOAD_WATCHED}</td>
                        <td className="text-right">{dataTable[i].Add_Friend_Request}</td>
                      </tr>)})
                  }
                  </tbody>
            </table>
      </div>
    );
  }
}

export default Table;