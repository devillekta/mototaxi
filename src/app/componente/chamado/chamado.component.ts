import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.scss'],
})
export class ChamadoComponent implements OnInit {

  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;

  @Input() status: string;
  @Input() updatedAt: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}

}
