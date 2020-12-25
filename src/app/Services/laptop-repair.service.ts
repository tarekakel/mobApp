import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../Services/api.service';


@Injectable({
  providedIn: 'root'
})
export class LaptopRepairService {

  constructor(private httpClient: HttpClient, private apiService: APIService) { }

  // "Laptop Repair" - show brands of the products available
  public GetBrandsByProductTypeID2(){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetBrandsByProductTypeID/2');
  }

  // "Laptop Repair" - show items of the choosed brand
  public GetItemsByProductTypeIdandBrandsID2(BrandId){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetItemsByProductTypeIdandBrandsID/2/' + BrandId);
  }

  // "Laptop Repair" - show Products of the choosed item
  public GetProductsByProductTypeIdandItemID2(ItemId){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetProductsByProductTypeIdandItemID/2/' + ItemId);
  }

  // "Laptop Repair" - show Item details of the choosed item
  public GetItemsByItemID(ItemId){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetItemsByItemID/' + ItemId);
  }
  

}