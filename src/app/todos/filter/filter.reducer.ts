import { createReducer, on, Action } from '@ngrx/store'
import { setFilter, ValidFilters } from './filter.actions'

export const initialState: ValidFilters = 'ALL'

export const filterReducer = createReducer<ValidFilters, Action>(
  initialState,

  on(setFilter, (state, { filter }) => filter)
)
