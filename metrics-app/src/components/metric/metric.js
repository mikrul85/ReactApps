import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class Metric extends Component {

  getDataMetics = (data) => {
    const arrADSFIVEWATCHED = [],
          arrADSVIDEOADWATCHED = [],
          arrAddFriendRequest = [],
          arrClickGifts = [],
          arrClickMessages = []
    for(let i = 0; i < data.length; i++) {
        arrADSFIVEWATCHED.push(data[i].ADS_FIVE_WATCHED)
        arrADSVIDEOADWATCHED.push(data[i].ADS_VIDEOAD_WATCHED)
        arrAddFriendRequest.push(data[i].Add_Friend_Request)
        arrClickGifts.push(data[i].Click_Gifts)
        arrClickMessages.push(data[i].Click_Messages)
    }

    return {
      options: {
          title: {
            text: 'My chart'
          },
          series: [{
            name: 'Value-1',
            type: 'line',
            data: arrADSFIVEWATCHED
          },
          {   
            name: 'Value-2',
            type: 'line',
            data: arrADSVIDEOADWATCHED
          },
          {   
            name: 'Value-3',
            type: 'line',
            data: arrAddFriendRequest
          },
          {   
            name: 'Value-4',
            type: 'line',
            data: arrClickGifts
          },
          {   
            name: 'Value-5',
            type: 'line',
            data: arrClickMessages
          }
          ]
        }
    }
  }
  
  render() {
    const dataMetrics = this.getDataMetics(this.props.data)
    return (
      <div className="mx-5 mt-3">
        <HighchartsReact
            highcharts={Highcharts}
            options={dataMetrics.options}
            constructorType = { 'chart' }
        />
      </div>
    );
  }
}

export default Metric;