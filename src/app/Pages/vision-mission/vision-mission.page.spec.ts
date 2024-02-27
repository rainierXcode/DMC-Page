import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VissionMissionPage } from './vision-mission.page';

describe('VissionMissionPage', () => {
  let component: VissionMissionPage;
  let fixture: ComponentFixture<VissionMissionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VissionMissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
