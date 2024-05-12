import { FormData } from "../components/form-cadastro/FormCadastro";

const initialState = window.localStorage.getItem("cadastros");

let state: FormData[] = initialState ? JSON.parse(initialState) : [];
let listeners = new Set<() => void>();

export function getCadastroState() {
  return state;
}

export function setCadastroState(newState: FormData[]) {
  state = newState;
  listeners.forEach((listener) => listener());
  window.localStorage.setItem("cadastros", JSON.stringify(state));
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
