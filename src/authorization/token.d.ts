import { BukasendOptions } from "../bukasend_opts";

export = class Authorization {
    constructor({});
    static _constructorWithOpts: (opts: BukasendOptions) => typeof Authorization;
    getToken(): Promise<object>;
}