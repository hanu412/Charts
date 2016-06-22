
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BarChart = (function () {
    function BarChart(elementId, title, data) {
        this.Type = 'bar';
        this.BarWidth = 0.5;
        this.Title = title;
        this.Data = data;
        this.DomElement = document.getElementById(elementId);
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
                json: this.Data,
                type: this.Type
            },
            bar: {
                width: {
                    ratio: this.BarWidth
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
                json: this.Data,
                type: 'donut'
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
//# sourceMappingURL=basechart.js.map