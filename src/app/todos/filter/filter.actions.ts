import { createAction, props } from '@ngrx/store'

// export enum ValidFilters {
//   ALL = 'All',
//   ACTIVE = 'Active',
//   COMPLETED = 'Completed'
// }

export type ValidFilters = 'ALL' | 'ACTIVE' | 'COMPLETED'

export const setFilter = createAction(
  '[FILTER] set Filter',
  props<{ filter: ValidFilters }>()
)
