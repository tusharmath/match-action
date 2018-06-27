import {curry2} from 'ts-curry'
export type MatchActionSpec = {
  [key: string]: {(value: any): any}
}

export const match = curry2(
  (base: (t: any) => any, spec: MatchActionSpec) => (action: Action<any>) =>
    spec[action.type] ? spec[action.type](action.value) : base(action.value)
)
