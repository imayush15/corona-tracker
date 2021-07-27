/* eslint-disable react-hooks/exhaustive-deps */
import { useTheme } from '@material-ui/core';
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

function Chart() {
  const theme = useTheme();

  const chartState = useSelector((state) => state.data);

  const options = {
    chart: {
      type: 'column',
      backgroundColor: theme.palette.primaryColor.black,
      borderColor: 'none',
      showAxes: true,
      alignTicks: false,
      reflow: true,
      height: 500,
    },
    title: {
      text: 'COVID-19 Daily Active Cases India',
      style: {
        color: theme.palette.primaryColor.red,
        fontSize: theme.typography.pxToVw(18),
      },
    },
    subtitle: {
      text: 'By Ayush Vishwakarma',
      style: {
        color: theme.palette.primaryColor.gray,
        fontSize: theme.typography.pxToVw(10),
      },
    },
    xAxis: {
      lineWidth: 2,
      minorGridLineWidth: 0,
      lineColor: 'white',
      // labels: {
      //   enabled: false,
      // },
      minorTickLength: 0,
      tickLength: 0,
      title: {
        text: 'Days',
        style: {
          color: theme.palette.primaryColor.white,
          fontSize: theme.typography.pxToVw(10),
        },
      },
    },
    yAxis: {
      gridLineWidth: 87,
      gridLineHeight: 22,
      visible: true,
      width: 2,
      min: 0,
      title: {
        text: 'Active Case Count',
        style: {
          color: theme.palette.primaryColor.white,
          fontSize: theme.typography.pxToVw(10),
        },
      },
    },
    tooltip: {
      backgroundColor: theme.palette.primaryColor.red,
      borderColor: theme.palette.primaryColor.black,
      borderRadius: 3,
      style: {
        color: theme.palette.primaryColor.white,
        fontSize: theme.typography.pxToRem(15),
      },
    },
    plotOptions: {
      series: {
        animation: {
          duration: 1500,
        },
      },
      column: {
        pointPadding: 0.15,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Number of Active Cases in India',
        data: chartState?.chartData,
        type: 'column',
        color: theme.palette.primaryColor.red,
      },
    ],
  };

  return (
    <div style={{ border: `1px solid ${theme.palette.primaryColor.gray}` }}>
      <div style={{ minHeight: '60vh' }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}

export default Chart;
