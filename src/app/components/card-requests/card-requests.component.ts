import { CharactersService } from './../../services/characters.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-card-requests',
  templateUrl: './card-requests.component.html',
  styleUrls: ['./card-requests.component.scss']
})
export class CardRequestsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  searchForm : FormGroup;

  filterForm : FormGroup;

  displayedColumnsPeople: string[] = ['photo', 'name', 'status', 'species', 'type', 'gender', 'location'];
  characters = new MatTableDataSource();

  total = 0;
  page = 1;
  limit = 20;

  constructor(
    private _formBuilder : FormBuilder,
    private _characterService: CharactersService
    ) {

    this.searchForm = this._formBuilder.group({
      search: new FormControl('')
    });

    this.filterForm = this._formBuilder.group({
      name: new FormControl(''),
      type: new FormControl('')
    });

   }

  ngOnInit(): void {
    this.listCharacters(this.page);
  }

  listCharacters(page : number){
   this._characterService.listPeople(page, this.filterForm.value).subscribe( ( response : any ) => {
    this.characters = response.results;

    setTimeout(() => {
      this.total = response.info.count;
      this.paginator.pageSize = this.limit;
      this.paginator.length = this.total;
    }, 0);
   }) 
  }

  clearFilters(){
    this.filterForm.reset();
    this.listCharacters(this.page);
  }

  changePage(event : any){
    this.page = event.pageIndex + 1;
    this.listCharacters(this.page);
  }
}
