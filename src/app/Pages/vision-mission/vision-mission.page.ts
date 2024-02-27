import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.page.html',
  styleUrls: ['./vision-mission.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class VissionMissionPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
