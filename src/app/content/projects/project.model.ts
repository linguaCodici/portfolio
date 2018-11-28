export class Project {
  name: String;
  link: String;
  images: String[];
  description: String[];

  constructor(name: String, link: String, images: String[], description: String[]) {
    this.name = name;
    this.link = link;
    this.images = images;
    this.description = description;
  }
}
