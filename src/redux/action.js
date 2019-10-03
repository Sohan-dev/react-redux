function userDetail(data) {
  console.log(data);
  return {
    type: "LOGGED_USER_DETAILS",
    data: data
  };
}

export function signIn(emailId, password) {
  console.log(emailId, password);
  return dispatch => {
    const erqValues = {
      method: "POST",
      body: JSON.stringify({
        emailId: emailId,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("https://getthegig.api.underscoretec.com/user/login", erqValues)
      .then(result => result.json())
      .then(result => {
        console.log(JSON.stringify(result));
        // if (result.message && result.message === "Log in Successfully!") {
          dispatch(userDetail(result.result));
        
      }).catch(err =>{
        console.log(err);
       // dispatch(userDetail(e)
      })
  };
}
