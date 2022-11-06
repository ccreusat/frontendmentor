import { CardProps } from "../types/types";

type Actions =
  | {
      type: "FETCH";
      payload: CardProps[];
    }
  | { type: "FETCH_ERROR"; payload: { error: boolean } }
  | {
      type: "UPDATE_BOOKMARKED";
      payload: { id: string; isBookmarked: boolean };
    };

export const initialCollectionState: any = {
  collection: [],
  isLoading: true,
  error: false,
};

export const appReducer = (state: any, action: Actions) => {
  switch (action.type) {
    case "FETCH": {
      return {
        ...state,
        collection: [...action.payload],
        isLoading: false,
        error: false,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        collection: [],
        isLoading: false,
        error: action.payload.error,
      };
    }
    case "UPDATE_BOOKMARKED": {
      let { id, isBookmarked } = action.payload;
      return state.map((item: CardProps) => {
        if (item.id === id) {
          return {
            ...item,
            isBookmarked: isBookmarked,
          };
        } else {
          return item;
        }
      });
    }
    default: {
      throw new Error();
    }
  }
};
