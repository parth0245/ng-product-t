import { Observable } from 'rxjs';
export class GetProductsService {
    dataArray:any =[
          {
          prodId:"001",
          prodName:"Red T-Shirt",
          prodPrice:"299",
          prodDiscount:"10",
          prodImage:"https://cdna.4imprint.com/prod/700/391089.jpg",
          prodImages:[
            {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
            {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
            {src : "https://cdna.4imprint.com/prod/700/391089.jpg"}
          ],
          prodColor:"Black",
          prodSize:"XL",
          prodQR:"",
          prodDesign:"front",
          prodSleev:"Half",
          prodDescText:{},
          prodFabric:"Cotton",
          prodOf:"",
          prodBy:"",
          prodSold:"20",
          prodAvailable:"Y",
          prodAvailableDate:new Date(),
          prodOffer:"N",
          prodRating:"3.5"
        },
        {
            prodId:"001",
            prodName:"Red T-Shirt",
            prodPrice:"299",
            prodDiscount:"10",
            prodImage:"https://cdna.4imprint.com/prod/700/391089.jpg",
            prodImages:[
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"}
            ],
            prodColor:"Black",
            prodSize:"XL",
            prodQR:"",
            prodDesign:"front",
            prodSleev:"Half",
            prodDescText:{},
            prodFabric:"Cotton",
            prodOf:"",
            prodBy:"",
            prodSold:"20",
            prodAvailable:"Y",
            prodAvailableDate:new Date(),
            prodOffer:"N",
            prodRating:"3.5"
          },
          {
            prodId:"001",
            prodName:"Red T-Shirt",
            prodPrice:"299",
            prodDiscount:"10",
            prodImage:"https://cdna.4imprint.com/prod/700/391089.jpg",
            prodImages:[
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"}
            ],
            prodColor:"Black",
            prodSize:"XL",
            prodQR:"",
            prodDesign:"front",
            prodSleev:"Half",
            prodDescText:{},
            prodFabric:"Cotton",
            prodOf:"",
            prodBy:"",
            prodSold:"20",
            prodAvailable:"Y",
            prodAvailableDate:new Date(),
            prodOffer:"N",
            prodRating:"3.5"
          },
          {
            prodId:"001",
            prodName:"Red T-Shirt",
            prodPrice:"299",
            prodDiscount:"10",
            prodImage:"https://cdna.4imprint.com/prod/700/391089.jpg",
            prodImages:[
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"}
            ],
            prodColor:"Black",
            prodSize:"XL",
            prodQR:"",
            prodDesign:"front",
            prodSleev:"Half",
            prodDescText:{},
            prodFabric:"Cotton",
            prodOf:"",
            prodBy:"",
            prodSold:"20",
            prodAvailable:"Y",
            prodAvailableDate:new Date(),
            prodOffer:"N",
            prodRating:"3.5"
          },
          {
            prodId:"001",
            prodName:"Red T-Shirt",
            prodPrice:"299",
            prodDiscount:"10",
            prodImage:"https://cdna.4imprint.com/prod/700/391089.jpg",
            prodImages:[
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"}
            ],
            prodColor:"Black",
            prodSize:"XL",
            prodQR:"",
            prodDesign:"front",
            prodSleev:"Half",
            prodDescText:{},
            prodFabric:"Cotton",
            prodOf:"",
            prodBy:"",
            prodSold:"20",
            prodAvailable:"Y",
            prodAvailableDate:new Date(),
            prodOffer:"N",
            prodRating:"3.5"
          },
          {
            prodId:"001",
            prodName:"Red T-Shirt",
            prodPrice:"299",
            prodDiscount:"10",
            prodImage:"https://cdna.4imprint.com/prod/700/391089.jpg",
            prodImages:[
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"}
            ],
            prodColor:"Black",
            prodSize:"XL",
            prodQR:"",
            prodDesign:"front",
            prodSleev:"Half",
            prodDescText:{},
            prodFabric:"Cotton",
            prodOf:"",
            prodBy:"",
            prodSold:"20",
            prodAvailable:"Y",
            prodAvailableDate:new Date(),
            prodOffer:"N",
            prodRating:"3.5"
          },
          {
            prodId:"001",
            prodName:"Red T-Shirt",
            prodPrice:"299",
            prodDiscount:"10",
            prodImage:"https://cdna.4imprint.com/prod/700/391089.jpg",
            prodImages:[
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
              {src : "https://cdna.4imprint.com/prod/700/391089.jpg"}
            ],
            prodColor:"Black",
            prodSize:"XL",
            prodQR:"",
            prodDesign:"front",
            prodSleev:"Half",
            prodDescText:{},
            prodFabric:"Cotton",
            prodOf:"",
            prodBy:"",
            prodSold:"20",
            prodAvailable:"Y",
            prodAvailableDate:new Date(),
            prodOffer:"N",
            prodRating:"3.5"
          }
       
];

    getProducts(): Observable<any[]> {
        return Observable.of(this.dataArray);
    }
}

// {
//   productId:"",
//   imgPath:"https://cdna.4imprint.com/prod/700/391089.jpg",
//   imgArray:[
//     "https://cdna.4imprint.com/prod/700/391089.jpg",
//     "https://cdna.4imprint.com/prod/700/391089.jpg",
//     "https://cdna.4imprint.com/prod/700/391089.jpg",
//   ],
//   name:"Red T-shirt",
//   price:399,
//   anotherInfo:[]
// }