import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import '../shared/css/styles.css'; 
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[SidebarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['../shared/css/styles.css']
})

export class HomeComponent {

  // ngOnInit(): void {
  //   this.loadGoogleCharts().then(() => {
  //     this.drawChart();
  //   });
  // }

  // loadGoogleCharts(): Promise<void> {
  //   return new Promise((resolve, reject) => {
  //     if (typeof google !== 'undefined' && google.charts) {
  //       resolve();
  //     } else {
  //       const script = document.createElement('script');
  //       script.src = 'https://www.gstatic.com/charts/loader.js';
  //       script.onload = () => {
  //         google.charts.load('current', { packages: ['corechart'] });
  //         google.charts.setOnLoadCallback(resolve);
  //       };
  //       script.onerror = reject;
  //       document.head.appendChild(script);
  //     }
  //   });
  // }

  // drawChart(): void {
  //   const data = google.visualization.arrayToDataTable([
  //     ['Genre', 'Nombre'],
  //     ['Homme', 70000],
  //     ['Femme', 58100]
  //   ]);

  //   const options = {
  //     title: 'Élève par genre',
  //     pieHole: 0.4,
  //   };

  //   const chartContainer = document.getElementById('piechart');
  //   if (chartContainer) {
  //     const chart = new google.visualization.PieChart(chartContainer);
  //     chart.draw(data, options);
  //   }
  // }
}