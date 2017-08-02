import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data01: any;
  options01: any;
  data02: any;
  options02: any;
  data03: any;
  options03: any;

    constructor() {
        this.data01 = {
            labels: ['Non-Compliant','Compliant'],
            datasets: [
                {
                    data: [50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
        this.options01 = {
            title: {
                display: true,
                text: 'Compliance Rate For SSRA',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };

        this.data03 = {
            labels: ['Non-Compliant','Compliant'],
            datasets: [
                {
                    data: [20, 170],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
        this.options03 = {
            title: {
                display: true,
                text: 'Compliance Rate For Cooling Tower Audit',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };

        this.data02 = {
            labels: ['SSRA', 'Cooling Tower Audit', 'Safety Audit', 'Electrical Audit', 'Fire & Essential Services Audit', 'Facade Inspection', 'Indoor Air Quality Audit'],
            datasets: [
                /*
                {
                    label: '2016',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                */
                {
                    label: '2017',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.options02 = {
            title: {
                display: true,
                text: 'Audits Done by Audit Type ',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        }
    }

  ngOnInit() {
  }

}
