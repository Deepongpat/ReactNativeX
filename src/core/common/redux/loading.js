const initialState = {
    isLoading: false
  }
  
  export default (state = initialState, action) => {
  
    switch (action.type) {
      case 'OPEN_LOADING':
      console.log("Open Loading");
        return {
          isLoading: true
        };
      case 'CLOSE_LOADING':
      console.log("Close Loading");
        return {
          isLoading: false
        };
      default:
        return state;
    }
  }
  
  