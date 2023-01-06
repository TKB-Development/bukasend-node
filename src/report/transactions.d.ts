import { BukasendOptions } from "../bukasend_opts";

export = class Transactions {
    constructor({});
    static _constructorWithOpts: (opts: BukasendOptions) => typeof Transactions;
    getReports (): Promise<object>;
}