import ProjectInput from "./classes/projectInput";
import ProjectList from "./classes/projectList";
import { ProjectStatus } from "./appTypes";

const prjInpt = new ProjectInput();
const activeProjectList = new ProjectList(ProjectStatus.ACTIVE);
const finishedProjectList = new ProjectList(ProjectStatus.FINISHED);

// // ProjectInput Class
// class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
//   titleInputElement: HTMLInputElement;
//   descriptionInputElement: HTMLInputElement;
//   peopleInputElement: HTMLInputElement;

//   constructor() {
//     super('project-input', 'app', true, 'user-input');
//     this.titleInputElement = this.element.querySelector(
//       '#title'
//     ) as HTMLInputElement;
//     this.descriptionInputElement = this.element.querySelector(
//       '#description'
//     ) as HTMLInputElement;
//     this.peopleInputElement = this.element.querySelector(
//       '#people'
//     ) as HTMLInputElement;
//     this.configure();
//   }

//   configure() {
//     this.element.addEventListener('submit', this.submitHandler);
//   }

//   renderContent() {}

//   private gatherUserInput(): [string, string, number] | void {
//     const enteredTitle = this.titleInputElement.value;
//     const enteredDescription = this.descriptionInputElement.value;
//     const enteredPeople = this.peopleInputElement.value;

//     const titleValidatable: Validatable = {
//       value: enteredTitle,
//       required: true
//     };
//     const descriptionValidatable: Validatable = {
//       value: enteredDescription,
//       required: true,
//       minLength: 5
//     };
//     const peopleValidatable: Validatable = {
//       value: +enteredPeople,
//       required: true,
//       min: 1,
//       max: 5
//     };

//     if (
//       !validate(titleValidatable) ||
//       !validate(descriptionValidatable) ||
//       !validate(peopleValidatable)
//     ) {
//       alert('Invalid input, please try again!');
//       return;
//     } else {
//       return [enteredTitle, enteredDescription, +enteredPeople];
//     }
//   }

//   private clearInputs() {
//     this.titleInputElement.value = '';
//     this.descriptionInputElement.value = '';
//     this.peopleInputElement.value = '';
//   }

//   @autobind
//   private submitHandler(event: Event) {
//     event.preventDefault();
//     const userInput = this.gatherUserInput();
//     if (Array.isArray(userInput)) {
//       const [title, desc, people] = userInput;
//       projectState.addProject(title, desc, people);
//       this.clearInputs();
//     }
//   }
// }

// const prjInput = new ProjectInput();
// const activePrjList = new ProjectList('active');
// const finishedPrjList = new ProjectList('finished');
