import { Component, OnInit } from '@angular/core';
import { LaptopRepairService } from '../../Services/laptop-repair.service';

@Component({
  selector: 'app-laptop-repair',
  templateUrl: './laptop-repair.component.html',
  styleUrls: ['./laptop-repair.component.css']
})
export class LaptopRepairComponent implements OnInit {

  brands = [];


  constructor(private laptopRepairService: LaptopRepairService) { }

  ngOnInit(): void {



    this.laptopRepairService.GetBrandsByProductTypeID2().subscribe((data: any[])=>{
      console.log(data);
      this.brands = data;
    })  


  }

}
