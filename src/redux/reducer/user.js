export function userDetail(state = {}, action) {
  switch (action.type) {
      case 'LOGGED_USER_DETAILS':
      //console.log(action.data);
          return action.data
      default:
          return state
  }
}