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
var BarChart = (function () {
    function BarChart(elementId, title, data) {
        this.Type = 'bar';
        this.BarWidth = 0.5;
        this.Columns = [];
        this.Title = title;
        this.Data = data.Data;
        this.Categories = data.Categories;
        this.DomElement = document.getElementById(elementId);
        this.Columns.push(data.DataTitle);
        console.log(data.Data);
        for (var x in data.Data) {
            console.log(x);
            this.Columns.push(data.Data[x]);
        }
    }
    BarChart.prototype.ConfigureChart = function (height, width, barwidth) {
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
    BarChart.prototype.DrawChart = function (configuration) {
        c3.generate(configuration);
    };
    return BarChart;
}());
var DonutChart = (function (_super) {
    __extends(DonutChart, _super);
    function DonutChart(elementId, title, data) {
        _super.call(this, elementId, title, data);
    }
    DonutChart.prototype.ConfigureChart = function (donutwidth, width, height) {
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
                pattern: ['rgb(127,171,60)', 'rgb(0,172,230)', 'rgb(153, 204, 0)', 'red', 'grey']
            },
            donut: {
                title: this.Title,
                width: donutwidth | 50,
                expand: true,
                label: {
                    show: true,
                    threshold: 0.2
                }
            }
        };
    };
    DonutChart.prototype.Draw = function () {
        ///<summary>This Function will draw the svg donut chart and bind it to the DOM element specified </summary>
        this.DrawChart(this.Configuration);
    };
    return DonutChart;
}(BarChart));
//# sourceMappingURL=test.js.map