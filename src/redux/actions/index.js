export const addToFavoriteAction = (companyToAdd) => ({
  type: 'ADD_ITEM_TO_FAVORITE',
  payload: companyToAdd,
})

export const removeFromFavoriteAction = (index) => ({
  type: 'REMOVE_ITEM_FROM_FAVORITE',
  payload: index,
})

