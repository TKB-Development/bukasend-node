import { BukasendOptions } from "../bukasend_opts";

export = class InfoAddresses {
    constructor({});
    static _constructorWithOpts: (opts: BukasendOptions) => typeof InfoAddresses;
    getAddresses(): Promise<object>;
    getPostCode(data: { province: string; city: string; district: string }): Promise<object>;
    getSubdistricts(data: { province: string; city: string; district: string }): Promise<object>;
}