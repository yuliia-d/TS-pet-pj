import { autobind } from "../utils";
import { validateFormFields } from "../validation/index";
import { UsersInputTypes } from "../appTypes";
import { validationRules } from "../consts";
import { projectState } from "./projectState";
import Component, { PositionElement } from "./component";

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", PositionElement.AFTERBEGIN);

    this.titleInputElement = this.element.querySelector(
      "#title"
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    )! as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.hostElement.addEventListener("submit", this.handleSubmit);
  }

  renderContent() {}

  private gatherUserInput(): UsersInputTypes | void {
    const enteredFields: UsersInputTypes = {
      title: this.titleInputElement.value.trim(),
      description: this.descriptionInputElement.value.trim(),
      people: +this.peopleInputElement.value.trim()
    };

    const checkValidFields = validateFormFields(validationRules, enteredFields);
    const fieldWithError = checkValidFields.find((field) => !field.isValid);

    if (fieldWithError) {
      alert(fieldWithError.message);
      return;
    }

    return enteredFields;
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autobind
  private handleSubmit(event: Event) {
    event.preventDefault();

    const userInput = this.gatherUserInput();
    if (userInput) {
      const { title, description, people } = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }
}

export default ProjectInput;
