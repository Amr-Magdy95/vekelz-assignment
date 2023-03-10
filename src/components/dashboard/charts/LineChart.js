import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from "styled-components";

am4core.useTheme(am4themes_animated);

function LineChart(props) {
  const chart = useRef(null);

  useLayoutEffect(() => {
    // chart instance
    let x = am4core.create("linediv", am4charts.XYChart);
    x.responsive.enabled = true;
    // Theme
    am4core.useTheme(am4themes_animated);

    // data
    let data = [
      { date: new Date(2018, 3, 20, 7), name: "name" + 0, value: 100 },
      { date: new Date(2018, 3, 20, 9), name: "name" + 1, value: 500 },
      { date: new Date(2018, 3, 20, 11), name: "name" + 2, value: 1000 },
      { date: new Date(2018, 3, 20, 13), name: "name" + 3, value: 400 },
      { date: new Date(2018, 3, 20, 15), name: "name" + 4, value: 50 },
      { date: new Date(2018, 3, 20, 17), name: "name" + 5, value: 400 },
      { date: new Date(2018, 3, 20, 19), name: "name" + 6, value: 1000 },
    ];
    x.data = data;

    // x axis
    let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: "hour",
      count: 2,
    };
    dateAxis.gridIntervals.setAll([
      { timeUnit: "second", count: 1 },
      { timeUnit: "hour", count: 2 }
    ]);
    // dateAxis.renderer.grid.template.location = 1;
    dateAxis.renderer.labels.template.location = 0;
    dateAxis.renderer.minGridDistance = 10;
    dateAxis.renderer.labels.template.fill = am4core.color("#A0CA92");
    dateAxis.renderer.labels.template.fontSize = 12;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;
    
    dateAxis.renderer.labels.template.rotation = 90;
    dateAxis.renderer.labels.template.verticalCenter = "middle";
    dateAxis.renderer.labels.template.horizontalCenter = "left";
    dateAxis.dateFormats.setKey("hour", "h a");
    
    // dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
    //y axis
    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.grid.template.stroke = false;
    valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");
    valueAxis.baseValue = -1000;

    // series
    let series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    series.fillOpacity = 0.1;
    series.stroke = am4core.color("#ff764c"); 
    series.fill = am4core.color("#ff764c"); 

    

    // series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";


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
      <h3>Car <span>Statistics</span></h3>
      <div className="subheading-container">
      <span className="milage">20 February 2022</span>
      <ul className="tab-container">
        <li className="tab tab-active">Day</li>
        <li className="tab">week</li>
        <li className="tab">month</li>

      </ul>


      </div>
      <div id="linediv"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
@media screen and (min-width: 200px){
  width: 80%;
  margin: 0 auto;
  margin-bottom: 2rem;
}
@media screen and (min-width: 768px){
  width: 95%;
  
}
@media screen and (min-width: 1170px){

  width: 49%;
}

background: var(--white);
border-radius: var(--borderRadius);
padding: 2rem 1rem 0rem 2rem;
.subheading-container{
  display: flex;
  justify-content: space-between;
}
h3{
  letter-spacing: normal;
  font-weight: 900;
  
  
}
span{
  font-weight: 400;
}
.milage{
  text-transform: capitalize;
  color: var(--clr-grey-5);
  font-weight: 600;

}
.tab-container{
  display: flex;
  column-gap: 10px;
  background: var(--clr-grey-1);
  border-radius: 20px;
}
.tab{
  background: var(--clr-grey-1);
  padding: 0.25rem 1rem;
  border-radius: 20px;
  text-transform: capitalize;
}

.tab-active{
  background: var(--clr-secondary-6);
  color: white;
}


  #linediv{
    width: 100%;
    height: 400px;
    background: var(--white);
    border-radius: var(--borderRadius);
    
  }

  @media (max-width: 592px){
    .subheading-container{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  @media (max-width: 370px){
    .tab-container{
      
      column-gap: 5px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .tab{
      width: 100%;
    }
  }
`;

export default LineChart;
