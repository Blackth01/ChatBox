import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalaListComponent } from './sala-list.component';

describe('SalaListComponent', () => {
  let component: SalaListComponent;
  let fixture: ComponentFixture<SalaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
