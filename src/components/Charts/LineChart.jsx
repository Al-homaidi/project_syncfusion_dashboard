import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

// eslint-disable-next-line padded-blocks, arrow-body-style
const LineChart = () => (
  <ChartComponent
    id="line-chart"
    height="420px"
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
    background="transparent"
    legendSettings={{ background: 'transparent', textStyle: { color: 'white' } }}
  >
    <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
    <SeriesCollectionDirective>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
    </SeriesCollectionDirective>
  </ChartComponent>
);

export default LineChart;
