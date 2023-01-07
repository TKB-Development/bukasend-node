import { BukasendOptions } from "../bukasend_opts";

export = class Transactions {
  constructor({});
  static _constructorWithOpts: (opts: BukasendOptions) => typeof Transactions;
  createTransaction(data: {
    partner_transaction_id: string,
    order_name: string,
    order_total: string,
    order_price: string,
    weight: string,
    width?: string,
    height?: string,
    length?: string,
    notes?: string,
    from: {
      name: string,
      title?: string,
      phone: string,
      email?: string,
      address: string,
      area: string,
      city: string,
      province: string,
      post_code: string,
      latitude?: string,
      longitude?: string,
    },
    to: {
      name: string,
      title?: string,
      phone: string,
      email?: string,
      address: string,
      area: string,
      city: string,
      province: string,
      post_code: string,
      latitude?: string,
      longitude?: string,
    },
    original_sender?: {
      name: string,
      phone: string,
    },
    courier: string,
    courier_service_type: string,
    pickup_request_time?: string,
    delivery_insurance_type?: string,
    cod?: boolean,
    total_cod_price?: number,
    admin_fee_paid_by?: string,
  }): Promise<object>;
  createBookingCode(data: {id: number}): Promise<object>;
  cancelTransaction(data: {id: number}): Promise<object>;
  getTransactionById(data: {id: number}): Promise<object>;
  getTransactionByPartnerTransactionId(data: {id: number, is_partner_transaction_id: boolean}): Promise<object>;
  getTransactionShippingHistory(data: {id: number, booking_code: string}): Promise<object>;
  getReports(): Promise<object>;
}