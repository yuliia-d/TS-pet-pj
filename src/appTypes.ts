export enum inputFields {
  TITLE = "title",
  DESCRIPTION = "description",
  PEOPLE = "people"
}

export type UsersInputTypes = {
  [inputFields.TITLE]: string;
  [inputFields.DESCRIPTION]: string;
  [inputFields.PEOPLE]: number;
};

export enum ProjectStatus {
  ACTIVE = "active",
  FINISHED = "finished"
}
