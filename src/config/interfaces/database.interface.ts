import { DatabaseType } from "typeorm";

export interface DataBaseInterfaceConfig {
  host?: string
  type?: DatabaseType
  database?: string
  username?: string
  password?: string
  synchronize?: boolean
}