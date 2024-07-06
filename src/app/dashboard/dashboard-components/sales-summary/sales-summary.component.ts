import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid
} from 'ng-apexcharts';
import { WeeklyDataEntry } from 'src/app/WeeklyDataEntry/weekly-data-entry';
import { Get7DaysDataService } from 'src/app/get7DaysData/get7-days-data.service';

export type salesChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html'
})
export class SalesSummaryComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;
  constructor(private service:Get7DaysDataService) {
    this.salesChartOptions = {
      series: [],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        height: 250,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: '1',
      },
      grid: {
        strokeDashArray: 3,
      },
      xaxis: {
        categories: [],
      },
      tooltip: {
        theme: 'dark'
      }
    };
  }

  ngOnInit(): void {
    this.service.getData().subscribe((data: WeeklyDataEntry[]) => {
      this.updateChartData(data);
    });
  }

  updateChartData(data: WeeklyDataEntry[]): void {
    console.log("WeeklyData: ",data);
    const categories = data.map((item: any) => item.date);
    console.log("Categories: ",categories);
    const limitSvcData = data.map((item: any) => item.limitSvc);
    const balanceCoreData = data.map((item: any) => item.balanceCore);
    const liquidityPaymentIntegrationData = data.map((item: any) => item.liquidityPaymentIntegration);
    const liquidityCheckData = data.map((item: any) => item.liquidityCheck);

    this.salesChartOptions = {
      ...this.salesChartOptions,
      series: [
        { name: "Limit Svc", data: limitSvcData },
        { name: "Balance Core", data: balanceCoreData },
        { name: "Liquidity Payment Integration", data: liquidityPaymentIntegrationData },
        { name: "Liquidity Check", data: liquidityCheckData }
      ],
      xaxis: {
        categories: categories,
      }
    };
  }
}