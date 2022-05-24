/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const chart = css`
  width: 100%;
  min-height: 200px;
`

function Chart({setSum}) {
    let date = new Date
    let day = date.getDay()

    let data = [{
        "week": "Mon",
        "amount": 17.45,
        "id": 1,
    }, {
        "week": "Tue",
        "amount": 34.91,
        "id": 2,
    }, {
        "week": "Wed",
        "amount": 52.36,
        "id": 3,
    }, {
        "week": "Thu",
        "amount": 31.07,
        "id": 4,
    }, {
        "week": "Fri",
        "amount": 23.39,
        "id": 5,
    }, {
        "week": "Sat",
        "amount": 43.28,
        "id": 6,
    }, {
        "week": "Sun",
        "amount": 25.48,
        "id": 0,
    }];

    let sum = 0
    for (let x in data) {
        sum += data[x].amount

    }
    setSum(sum)
    am4core.ready(function () {

// Themes begin
        am4core.addLicense("ch-custom-attribution");
        am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
        let chart = am4core.create("myChart", am4charts.XYChart);

// Add data
        chart.data = data
// Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "week";
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.horizontalCenter = "middle";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 0;
        categoryAxis.renderer.minHeight = 10;
        categoryAxis.tooltip.disabled = true;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 0;
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.renderer.grid.template.disabled = true;

// Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "amount";
        series.dataFields.categoryX = "week";
        series.dataFields.categoryZ = "id";
        series.tooltipText = "$[{categoryX}: bold]{valueY}[/]";
        series.tooltip.pointerOrientation = "vertical";
        series.columns.template.strokeWidth = 0;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 1;
        series.columns.template.fill = am4core.color("#EA755D");
        series.columns.template.column.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        series.tooltip.pointerOrientation = "down";
        series.columns.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.categoryZ === day) {
                return am4core.color("#47b4a8");
            }
                // if (target.dataItem.categoryZ === day) {
                //     target.dataItem.showTooltipOn = "always";
            // }
            else {
                return fill;
            }
        });
// on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.fillOpacity = .8;
//Gradient
        // series.columns.template.adapter.add("fill", function (fill, target) {
        //     return chart.colors.getIndex(target.dataItem.index);
        // });

// Cursor
        chart.cursor = new am4charts.XYCursor();
    }); // end am4core.ready()

    return (

                <div css={chart} id="myChart"/>

    );
}

export default Chart;
