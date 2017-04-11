import {SearchQuery} from "./SearchQuery";

export interface OrderItem {
  paymentid:string,
  useremail:string,
  cartItems:SearchQuery[]
}
