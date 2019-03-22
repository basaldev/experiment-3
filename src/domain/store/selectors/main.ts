import { store } from 'domain/store/main';
import { State, Page } from 'domain/store/main';

export function state(): State {
  return store.deref();
}

export function currentPage(): Page {
  return state().currentPage;
}

export function getUser(): { id: string } {
  return state().user;
}

export function getSampleUsers(): Array<{ id: string; name: string; avatar: string; age: number }> {
  return state().sampleUsers;
}

export function getTrainings(): any[] {
  return state().trainings;
}