import React, { createContext, useReducer, useContext } from "react";
import { GET_DATA_ARTICLES } from './type';
import { appReducer } from './reducer';


// Initial state
const initialState = {
	articlesData: {}
};
export const AppStoreContext = createContext(null);

function AppContext(props: any) {
	const [ state, dispatch ] = useReducer(appReducer, initialState);

	const globalValue = { state, dispatch };

	return <AppStoreContext.Provider value={globalValue} {...props} />;
}

function useAppContext() {
  	return useContext(AppStoreContext);
}

export { AppContext, useAppContext };