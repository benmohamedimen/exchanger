import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const initialState = {
  rate: 1.1,
  fixedRate: 1.1,
  amount: 0,
  isEUR: true,
  isFixedRate: false,
  customRate: 0,
  isFixedRateDisabled: false,
  usedRealRate : true, 
  history: [],
};

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RATE':
      return { ...state, rate: action.payload };
    case 'SET_AMOUNT':
      return { ...state, amount: action.payload };
    case 'TOGGLE_CURRENCY':
      return { ...state, isEUR: !state.isEUR };
    case 'SET_CUSTOM_RATE':
      return { ...state, customRate: action.payload };
      case 'DISABLE_FIXED_RATE':
        return { ...state, isFixedRateDisabled: true };
    case 'ENABLE_FIXED_RATE':
        return { ...state, isFixedRateDisabled: false };  
    case 'SET_USED_REAL_RATE':
          return { ...state, usedRealRate: action.payload };
    case 'ADD_TO_HISTORY':
      const updatedHistory = [action.payload, ...state.history].slice(0, 5);
      return { ...state, history: updatedHistory };
    default:
      return state;
  }
};
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  exchange: exchangeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'], 
          ignoredPaths: ['exchange.register'], 
        },
      }),
  });

const persistor = persistStore(store);

export { store, persistor };
