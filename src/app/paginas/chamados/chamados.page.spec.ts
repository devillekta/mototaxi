import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ChamadosPage } from './chamados.page';

describe('ChamadosPage', () => {
  let component: ChamadosPage;
  let fixture: ComponentFixture<ChamadosPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadosPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChamadosPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to home on create new chamado', () => {
    component.newChamado();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
