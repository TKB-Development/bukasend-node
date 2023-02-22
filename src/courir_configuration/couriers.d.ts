import { BukasendOptions } from "../bukasend_opts";

export = class Couriers {
    constructor({});
    static _constructorWithOpts: (opts: BukasendOptions) => typeof Couriers;
    getCouriers(data: {
        from_city: string,
        from_district: string,
        from_postalcode: string,
        from_latitude?: number,
        from_longitude?: number,
        to_city: string,
        to_district: string,
        to_postalcode: string,
        to_latitude?: number,
        to_longitude?: number,
        show_all?: boolean,
        weight: number,
        order_price?: number,
        service_name: string,
        service_type: string,
    }): Promise<object>;
    getSettings(data: { id: string }): Promise<object>;
}