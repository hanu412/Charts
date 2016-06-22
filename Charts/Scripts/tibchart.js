/// <reference path="typings/c3/c3.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChartData = (function () {
    function ChartData(dataTitle, data, dataCategories) {
        this.DataTitle = dataTitle;
        this.Categories = dataCategories;
        this.Data = data;
    }
    return ChartData;
}());
var TIBChart = (function () {
    function TIBChart(elementId, title, data) {
        this.Columns = [];
        this.Title = title;
        this.Data = data.Data;
        this.Categories = data.Categories;
        this.DomElement = document.getElementById(elementId);
        this.Columns.push(data.DataTitle);
        for (var x in data.Data) {
            this.Columns.push(data.Data[x]);
        }
    }
    TIBChart.prototype.DrawChart = function (configuration) {
        c3.generate(configuration);
    };
    return TIBChart;
}());
var BarChart = (function (_super) {
    __extends(BarChart, _super);
    function BarChart(elementId, title, data) {
        _super.call(this, elementId, title, data);
    }
    BarChart.prototype.ConfigureChart = function (height, width, barwidth) {
        this.Type = 'bar';
        this.BarWidth = barwidth;
        this.Configuration = {
            bindto: this.DomElement,
            size: {
                width: width,
                height: height
            },
            data: {
                columns: [this.Columns],
                type: this.Type
            },
            color: {
                pattern: ['rgb(127,171,60)', 'rgb(0,172,230)', 'rgb(153, 204, 0)', 'red', 'grey']
            },
            bar: {
                width: {
                    ratio: this.BarWidth
                }
            },
            axis: {
                x: {
                    type: 'category',
                    categories: this.Categories
                }
            }
        };
    };
    BarChart.prototype.Draw = function () {
        ///<summary>This Function will draw the svg bar chart and bind it to the DOM element specified </summary>
        this.DrawChart(this.Configuration);
    };
    return BarChart;
}(TIBChart));
var DonutChart = (function (_super) {
    __extends(DonutChart, _super);
    function DonutChart(elementId, title, cdata) {
        console.log(cdata);
        _super.call(this, elementId, title, cdata);
    }
    DonutChart.prototype.ConfigureChart = function (donutwidth, width, height) {
        this.Columns = [];
        for (var index in this.Categories) {
            var graphdata = [];
            graphdata.push(this.Categories[index]);
            graphdata.push(this.Data[index]);
            this.Columns.push(graphdata);
        }
        this.Configuration = {
            bindto: this.DomElement,
            size: {
                width: width,
                height: height
            },
            data: {
                columns: this.Columns,
                type: 'donut'
            },
            color: {
                pattern: ['black', 'rgb(0,172,230)', 'rgb(153, 204, 0)', 'red', 'grey', 'yellow', 'blue']
            },
            donut: {
                title: this.Title,
                width: donutwidth ? donutwidth : 50,
                expand: true,
                label: {
                    show: true,
                    threshold: 0.2
                }
            },
            legend: {
                position: 'right'
            }
        };
    };
    DonutChart.prototype.Draw = function () {
        ///<summary>This Function will draw the svg donut chart and bind it to the DOM element specified </summary>
        this.DrawChart(this.Configuration);
    };
    return DonutChart;
}(TIBChart));
//# sourceMappingURL=tibchart.js.map