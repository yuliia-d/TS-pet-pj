import Component, { PositionElement } from "./component";
import Project from "./project";
import { Draggable } from "./draggable";
import { autobind } from "../utils";

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  private project: Project;

  get personsText() {
    return this.project.people === 1
      ? "1 person assign"
      : `${this.project.people} persons assign`;
  }

  constructor(hostId: string, project: Project) {
    super("single-project", hostId, PositionElement.BEFOREEND, project.id);

    this.project = project;

    this.configure();
    this.renderContent();
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @autobind
  dragEndHandler(event: DragEvent) {
    console.log("dragEnd", event);
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.personsText;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}

export default ProjectItem;
