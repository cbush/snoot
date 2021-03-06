import { Location } from "vscode-languageserver";

export type Name = string;
export type EntityType =
  | "rst.role.ref"
  | "rst.target"
  | "section"
  | "seealso"
  | "title";

export interface Entity {
  type: EntityType;
  name: Name;
  location: Location;
}

export type ReferenceEntity = Entity & {
  type: "rst.role.ref";
};

export type TargetEntity = Entity & {
  type: "rst.target";
};

export type TitleEntity = Entity & {
  type: "title";
};

export type SectionEntity = Entity & {
  type: "section";
  title?: TitleEntity;
  depth: number;
  preSectionTargets: TargetEntity[];
  inlineRefs: ReferenceEntity[];
  text: string;
  subsections: SectionEntity[];
  seeAlsos: SeeAlsoEntity[];
};

export type SeeAlsoEntity = Entity & {
  type: "seealso";
  refs: ReferenceEntity[];
};
