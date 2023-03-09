export interface rating{
    count:number,
    rate:number,
  }
export interface product{
    id:Number,
    title:string,
    category:string,
    description:string,
    image:string,
    price:number,
    rating:rating
}