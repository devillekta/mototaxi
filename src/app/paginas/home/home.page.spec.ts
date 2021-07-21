import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go to andamento on chamados', () => { //se clicar botao chamados no home chamara pagina andamento
    component.goToAndamento();
    expect(router.navigate).toHaveBeenCalledWith(['andamento']);
  });

  it('should go to new chamados on create chamados', () => { //clicar no botao adicionar no home chamar pagina chamados
    component.newChamado();
    expect(router.navigate).toHaveBeenCalledWith(['chamados']);
  });

});
