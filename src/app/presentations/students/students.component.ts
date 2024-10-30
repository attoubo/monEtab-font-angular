import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['../shared/css/styles.css']
})
export class StudentsComponent {

  popupVisible: boolean = false;

  showConfirmationPopup() {
    this.popupVisible = true;
    console.log("Pop-up affiché");
  }

  hideConfirmationPopup() {
    this.popupVisible = false;
    console.log("Pop-up caché");
  }


}
