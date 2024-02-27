import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-director',
  templateUrl: './director.page.html',
  styleUrls: ['./director.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DirectorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
