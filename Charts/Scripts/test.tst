/// <reference path="typings/c3/c3.d.ts" />

class ChartData {
    Data: Array<number>;
    Categories: string[];
    DataTitle: string;

    constructor(dataTitle: string, data: Array<number>, dataCategories: Array<string>) {
        this.DataTitle = dataTitle;
        this.Categories = dataCategories;
        this.Data = data;
    }
}

class BarChart {

    Type: string = 'bar';
    DomElement: HTMLElement;
    ElementId: string;
    Data: Array<string | number | boolean | Array<number>>;
    BarWidth: number = 0.5;
    Title: string;
    Configuration: c3.ChartConfiguration;
    Categories: Array<string>;
    Columns: Array<any> = [];

    constructor(elementId: string, title: string, data: ChartData) {

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

    protected ConfigureChart(height: number, width: number, barwidth: number): void {
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
        }
    }
    protected Draw(): void {
        ///<summary>This Function will draw the svg bar chart and bind it to the DOM element specified </summary>



        this.DrawChart(this.Configuration);


    }

    DrawChart(configuration: c3.ChartConfiguration): void {
        c3.generate(configuration);
    }


}


class DonutChart extends BarChart {
    constructor(elementId: string, title: string, data: ChartData) {

        super(elementId, title, data);
    }

    protected ConfigureChart(donutwidth: number, width: number, height: number): void {
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

    }
    protected Draw(): void {
        ///<summary>This Function will draw the svg donut chart and bind it to the DOM element specified </summary>

        this.DrawChart(this.Configuration);
    }
}