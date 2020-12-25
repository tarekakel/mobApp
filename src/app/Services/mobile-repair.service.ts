import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../Services/api.service';


@Injectable({
  providedIn: 'root'
})
export class MobileRepairService {

  constructor(private httpClient: HttpClient, private apiService: APIService) { }

  // "Mobile Repair" - show brands of the products available
  public GetBrandsByProductTypeID1(){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetBrandsByProductTypeID/1');
  }

  // "Mobile Repair" - show items of the choosed brand
  public GetItemsByProductTypeIdandBrandsID1(BrandId){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetItemsByProductTypeIdandBrandsID/1/' + BrandId);
  }

  // "Mobile Repair" - show Products of the choosed item
  public GetProductsByProductTypeIdandItemID1(ItemId){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetProductsByProductTypeIdandItemID/1/' + ItemId);
  }

  // "Mobile Repair" - show Item details of the choosed item
  public GetItemsByItemID(ItemId){
    return this.httpClient.get(this.apiService.GetApiURL() + 'Products/GetItemsByItemID/' + ItemId);
  }
  

}