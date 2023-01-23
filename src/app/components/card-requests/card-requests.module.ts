import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardRequestsComponent } from './card-requests.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRequestsRoutingModule } from './card-requests-routing.module';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [CardRequestsComponent],
  imports: [
    CommonModule,
    CardRequestsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule
  ]
})
export class CardRequestsModule { }
