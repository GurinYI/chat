export class EventBus {
  private readonly listeners: Record<string, Array<() => void>> = {};

  on(event : string, callback:()=>void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off(event :string) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

  }

  emit(event :string) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }
  }
}
