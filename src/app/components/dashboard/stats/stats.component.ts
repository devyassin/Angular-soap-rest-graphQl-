import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, NgxChartsModule, FormsModule],
  template: `
    <div class="min-h-screen bg-gray-50 p-6">
      <!-- Header Section -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">ID Card Analytics Dashboard</h1>
        <p class="text-gray-600 mt-2">Comprehensive overview of ID card statistics and trends</p>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-gray-500 text-sm">Total ID Cards</h3>
          <p class="text-2xl font-bold text-gray-800">{{ totalCards }}</p>
          <span class="text-green-500 text-sm">↑ 12% from last month</span>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-gray-500 text-sm">Pending Validation</h3>
          <p class="text-2xl font-bold text-gray-800">{{ pendingValidation }}</p>
          <span class="text-yellow-500 text-sm">● Requires attention</span>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-gray-500 text-sm">Expiring Soon</h3>
          <p class="text-2xl font-bold text-gray-800">{{ expiringSoon }}</p>
          <span class="text-red-500 text-sm">! Within 30 days</span>
        </div>
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-gray-500 text-sm">Validation Rate</h3>
          <p class="text-2xl font-bold text-gray-800">{{ validationRate }}%</p>
          <span class="text-blue-500 text-sm">○ Average time: 2.3 days</span>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div class="flex flex-wrap gap-4 items-center">
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700">Date Range</label>
            <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Custom</option>
            </select>
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700">Location</label>
            <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>All Locations</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700">Status</label>
            <select class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option>All Status</option>
              <option>Validated</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Charts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- ID Cards by Place of Birth -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-800">Distribution by Location</h2>
            <button class="text-gray-500 hover:text-gray-700">
              <span class="sr-only">More options</span>
              ⋮
            </button>
          </div>
          <div class="h-[400px]">
            <ngx-charts-pie-chart
              [results]="placeOfBirthData"
              [legend]="true"
              [labels]="true"
              [doughnut]="false"
              [gradient]="true"
              scheme="cool"
              [animations]="true">
            </ngx-charts-pie-chart>
          </div>
        </div>

        <!-- ID Cards by Age Group -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-800">Age Distribution</h2>
            <button class="text-gray-500 hover:text-gray-700">
              <span class="sr-only">More options</span>
              ⋮
            </button>
          </div>
          <div class="h-[400px]">
            <ngx-charts-bar-vertical
              [results]="ageGroupData"
              [gradient]="true"
              [xAxis]="true"
              [yAxis]="true"
              [showXAxisLabel]="true"
              [showYAxisLabel]="true"
              xAxisLabel="Age Group"
              yAxisLabel="Number of Cards"
              scheme="cool">
            </ngx-charts-bar-vertical>
          </div>
        </div>

        <!-- Monthly ID Card Issuance -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-800">Monthly Trends</h2>
            <button class="text-gray-500 hover:text-gray-700">
              <span class="sr-only">More options</span>
              ⋮
            </button>
          </div>
          <div class="h-[400px]">
            <ngx-charts-line-chart
              [results]="monthlyIssuanceData"
              [gradient]="true"
              [xAxis]="true"
              [yAxis]="true"
              [showXAxisLabel]="true"
              [showYAxisLabel]="true"
              xAxisLabel="Month"
              yAxisLabel="Cards Issued"
              scheme="cool"
              [animations]="true">
            </ngx-charts-line-chart>
          </div>
        </div>

        <!-- Validation Status -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-gray-800">Validation Overview</h2>
            <button class="text-gray-500 hover:text-gray-700">
              <span class="sr-only">More options</span>
              ⋮
            </button>
          </div>
          <div class="h-[400px]">
            <ngx-charts-advanced-pie-chart
              [results]="validationStatusData"
              [gradient]="true"
              scheme="cool"
              [animations]="true">
            </ngx-charts-advanced-pie-chart>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class StatsComponent implements OnInit {
  // Summary metrics
  totalCards: number = 1247;
  pendingValidation: number = 45;
  expiringSoon: number = 23;
  validationRate: number = 92;

  // Enhanced mock data with more realistic values
  placeOfBirthData = [
    { name: 'New York', value: 428 },
    { name: 'Los Angeles', value: 345 },
    { name: 'Chicago', value: 256 },
    { name: 'Houston', value: 189 },
    { name: 'Other', value: 129 }
  ];

  ageGroupData = [
    { name: '18-25', value: 312 },
    { name: '26-35', value: 487 },
    { name: '36-45', value: 275 },
    { name: '46-55', value: 184 },
    { name: '56+', value: 89 }
  ];

  monthlyIssuanceData = [
    {
      name: 'New Cards',
      series: [
        { name: 'Jan', value: 125 },
        { name: 'Feb', value: 167 },
        { name: 'Mar', value: 189 },
        { name: 'Apr', value: 204 },
        { name: 'May', value: 178 },
        { name: 'Jun', value: 194 }
      ]
    },
    {
      name: 'Renewals',
      series: [
        { name: 'Jan', value: 45 },
        { name: 'Feb', value: 52 },
        { name: 'Mar', value: 58 },
        { name: 'Apr', value: 63 },
        { name: 'May', value: 51 },
        { name: 'Jun', value: 59 }
      ]
    }
  ];

  validationStatusData = [
    { name: 'Validated', value: 892 },
    { name: 'Pending', value: 245 },
    { name: 'Rejected', value: 110 }
  ];

  ngOnInit() {
    this.processData();
  }

  private processData() {
    // In a real application, this would process actual data
  }
}