import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from "styled-components";

am4core.useTheme(am4themes_animated);

function BarChart(props) {
  const chart = useRef(null);
  const [timeUnit, setTimeUnit] = "day";

  useLayoutEffect(() => {
    // chart instance
    let x = am4core.create("chartdiv", am4charts.XYChart);
    x.responsive.enabled = true;
    // Theme
    am4core.useTheme(am4themes_animated);

    // data
    let data = [
      { date: new Date(2018, 3, 20, 1), name: "name" + 0, value: 150000 },
      { date: new Date(2018, 3, 20, 2), name: "name" + 1, value: 152000 },
      { date: new Date(2018, 3, 20, 3), name: "name" + 2, value: 156000 },
      { date: new Date(2018, 3, 20, 4), name: "name" + 3, value: 157000 },
      { date: new Date(2018, 3, 20, 5), name: "name" + 4, value: 160000 },
      { date: new Date(2018, 3, 20, 6), name: "name" + 5, value: 154000 },
      { date: new Date(2018, 3, 20, 7), name: "name" + 6, value: 153000 },
    ];
    x.data = data;

    // x axis
    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: "hour",
      count: 1,
    };
    // setting axis label to center, color, font-size and format
    dateAxis.renderer.labels.template.location = 0.5;
    dateAxis.renderer.labels.template.fill = am4core.color("#A0CA92");
    dateAxis.renderer.labels.template.fontSize = 13;
    dateAxis.renderer.labels.template.rotation = 90;
    dateAxis.renderer.labels.template.verticalCenter = "middle";
    dateAxis.renderer.labels.template.horizontalCenter = "left";
    dateAxis.dateFormats.setKey("hour", "h a");
    // setting min grid distance
    dateAxis.renderer.minGridDistance = 3;
    // setting axis start and end locations
    dateAxis.startLocation = 0.05;
    dateAxis.endLocation = 0.95;

    /*
     ** Y-Axis
     */
    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    // setting grid lines colors
    valueAxis.renderer.grid.template.stroke = false;
    // setting axis label colors
    valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");
    /*
     ** End of Y-Axis
     */

    /*
     ** Series
     */
    let series = x.series.push(new am4charts.ColumnSeries());
    // series data fields
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    // border of series itens
    series.strokeWidth = 0;
    // color of different columns
    series.fill = am4core.color("#F4F5F9");
    // data shown on hover
    series.columns.template.tooltipText =
      "{dateX.formatDate('h a')}\n {valueY}";
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#222");
    series.tooltip.label.fill = am4core.color("#fff");

    // column color on hover
    let hoverState = series.columns.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#2884FF");
    hoverState.properties.fillOpacity = 0.8;
    /*
     ** End of Series
     */

    // cursor
    x.cursor = new am4charts.XYCursor();
    x.cursor.lineY.disabled = true;
    x.cursor.lineX.disabled = true;

    // Scrollbar
    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <Wrapper className="chart-wrapper">
      <h3>
        Miles <span>Statistics</span>
      </h3>
      <div className="subheading-container">
        <ul className="tab-container">
          <li className="tab tab-active">Day</li>
          <li className="tab">week</li>
          <li className="tab">month</li>
        </ul>

        <span className="milage">256 miles</span>
      </div>
      <div id="chartdiv"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2rem 1rem 0rem 2rem;
  @media screen and (min-width: 200px) {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 768px) {
    width: 95%;
  }
  @media screen and (min-width: 1170px) {
    width: 49%;
  }

  background: var(--white);
  border-radius: var(--borderRadius);
  .subheading-container {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    letter-spacing: normal;
    font-weight: 900;
  }
  span {
    font-weight: 400;
  }
  .milage {
    text-transform: capitalize;
    color: var(--clr-grey-5);
    font-weight: 600;
  }
  .tab-container {
    display: flex;
    column-gap: 10px;
  }
  .tab {
    background: white;
    padding: 0.25rem 1rem;
    border-radius: 20px;
    text-transform: capitalize;
  }

  .tab-active {
    background: var(--clr-secondary-1);
    color: white;
  }

  #chartdiv {
    width: 100%;
    height: 400px;
    background: var(--white);
    border-radius: var(--borderRadius);
  }

  @media (max-width: 592px) {
    .subheading-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 370px) {
    .tab-container {
      column-gap: 5px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .tab {
      width: 100%;
    }
  }
`;

export default BarChart;
