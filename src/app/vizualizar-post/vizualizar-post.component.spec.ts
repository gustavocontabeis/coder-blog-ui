import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizarPostComponent } from './vizualizar-post.component';

describe('VizualizarPostComponent', () => {
  let component: VizualizarPostComponent;
  let fixture: ComponentFixture<VizualizarPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizualizarPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
