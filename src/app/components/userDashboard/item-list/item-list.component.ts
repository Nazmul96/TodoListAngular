import { Component } from '@angular/core';
import {BackendService} from '../../../services/backend.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  constructor(private backend:BackendService){
   
  }

  public itemData:any=[];

  ngOnInit(): void{ 
     
    this.backend.getItemData().subscribe((allData)=>{
        this.getItemList(allData);
    });
  }

  
  getItemList(allData:any)
	{
	     this.itemData=allData.data; 
       //console.log(this.itemData[0]['category_name']);  
	}

}
