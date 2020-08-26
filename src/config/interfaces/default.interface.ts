import { ServerInterfaceConfig } from "./server.interface";
import { DataBaseInterfaceConfig } from "./database.interface";
import { JwtInterfaceConfig } from "./jwt.interface";

export interface DefaultInterfaceConfig {
  server: ServerInterfaceConfig
  db: DataBaseInterfaceConfig
  jwt: JwtInterfaceConfig
}