import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectTransferComponent } from './connect-transfer.component';

describe('ConnectTransferComponent', () => {
  let component: ConnectTransferComponent;
  let fixture: ComponentFixture<ConnectTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
