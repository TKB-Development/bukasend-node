import Errors from './errors';
import { BukasendOptions } from "./bukasend_opts";
import { TokenService } from "./authorization";

declare class Bukasend {
  constructor(opts: BukasendOptions);
  static Errors: typeof Errors;
  Token: typeof TokenService;
}

export = Bukasend;
