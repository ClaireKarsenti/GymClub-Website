import { Dispatch, SetStateAction } from 'react';

export default class StateController<S> {
  _state: S;
  _setState: Dispatch<SetStateAction<S>>;

  constructor({
    state,
    setState,
  }: {
    state: S;
    setState: Dispatch<SetStateAction<S>>;
  }) {
    this._state = state;
    this._setState = setState;
  }

  setState(fullState: S | ((prevState: S) => S)) {
    this._setState(fullState);
  }

  updateState(subState: Partial<S>) {
    this._setState((previous: S) => {
      return {
        ...previous,
        ...subState,
      };
    });
  }
  
  getState(): S {
    return this._state;
  }
}
