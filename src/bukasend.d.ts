import Errors from './errors';
import { BukasendOptions } from "./bukasend_opts";
import { TokenService } from "./authorization";
import { InfoAddressesService } from "./coverage_area";
import { CouriersService } from "./courir_configuration";
import { TransactionsService } from "./transaction";

declare class Bukasend {
  constructor(opts: BukasendOptions);
  static Errors: typeof Errors;
  Token: typeof TokenService;
  InfoAddresses: typeof InfoAddressesService;
  Couriers: typeof CouriersService;
  Transactions: typeof TransactionsService;
}

export = Bukasend;
