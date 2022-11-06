export const initialStateAuthenticationState = {
  isAuthenticated: false,
  user: null,
  error: false,
  message: null,
};

export const authenticationReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SIGN_IN": {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.id,
        error: false,
        message: action.payload.message,
      };
    }
    case "SIGN_IN_ERROR": {
      return {
        ...state,
        isAuthenticated: false,
        error: true,
        message: action.payload.message,
      };
    }
    case "SIGN_UP": {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.id,
        error: false,
        message: action.payload.message,
      };
    }
    case "SIGN_UP_ERROR": {
      return {
        ...state,
        isAuthenticated: false,
        error: true,
        message: action.payload.message,
      };
    }
    case "SIGN_OUT": {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        message: action.payload.message,
      };
    }
    case "SIGN_OUT_ERROR": {
      return {
        ...state,
        isAuthenticated: true,
        error: true,
        message: action.payload,
      };
    }
    case "IS_LOGGED": {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.id,
        error: false,
        message: "",
      };
    }
    default: {
      throw new Error();
    }
  }
};
