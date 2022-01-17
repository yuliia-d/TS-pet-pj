export type Listeners<T> = (projects: T[]) => void;

class State<T> {
  protected listeners: Listeners<T>[] = [];

  addListener(listenerFn: Listeners<T>) {
    this.listeners.push(listenerFn);
  }
}

export default State;
