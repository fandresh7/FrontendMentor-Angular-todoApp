import { createAction, props } from '@ngrx/store'

export const create = createAction(
  '[TODO] Create',
  props<{ text: string; isComplete?: boolean }>()
)

export const changeStatus = createAction(
  '[TODO] change Status',
  props<{ id: number }>()
)

export const update = createAction(
  '[TODO] Update',
  props<{ id: number; text: string }>()
)

export const remove = createAction('[TODO] Delete', props<{ id: number }>())

export const clearCompleted = createAction('[TODO] Toogle Completed')

export const order = createAction(
  '[TODO] Order',
  props<{ previousIndex: number; currentIndex: number }>()
)
