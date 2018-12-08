import { IDispatchSimpleNetwork, ISimpleNetworkState } from "@misk/core"
export { dispatchSimpleNetwork } from "@misk/core"
import { LocationChangeAction, RouterState } from "connected-react-router"
import { History } from "history"
import { Reducer } from "redux"
import { IPaletteState } from "./palette"
export * from "./palette"
/**
 * Redux Store State
 */
export interface IState {
  palette: IPaletteState
  router: Reducer<RouterState, LocationChangeAction>
  simpleNetwork: ISimpleNetworkState
}
/**
 * Dispatcher
 */
export interface IDispatchProps extends IDispatchSimpleNetwork {}
export declare const rootDispatcher: IDispatchProps
/**
 * State Selectors
 */
export declare const rootSelectors: (
  state: IState
) => {
  palette: any
  simpleNetwork: any
}
/**
 * Reducers
 */
export declare const rootReducer: (
  history: History<any>
) => Reducer<
  {
    palette: any
    router: RouterState
    simpleNetwork: any
  },
  import("redux").AnyAction
>
/**
 * Sagas
 */
export declare function rootSaga(): IterableIterator<
  import("redux-saga/effects").AllEffect
>