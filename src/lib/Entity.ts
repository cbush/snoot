import { Location } from "vscode-languageserver";

export type Name = string;
export type EntityType =
  | "rst.role.ref"
  | "rst.target"
  | "rst.directive.include";

export interface Entity {
  type: EntityType;
  name: Name;
  location: Location;
}
