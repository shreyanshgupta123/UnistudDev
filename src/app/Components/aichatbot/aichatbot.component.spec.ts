import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIChatbotComponent } from './aichatbot.component';

describe('AIChatbotComponent', () => {
  let component: AIChatbotComponent;
  let fixture: ComponentFixture<AIChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AIChatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
