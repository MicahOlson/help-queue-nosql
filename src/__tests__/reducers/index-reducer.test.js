import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  // Update to include firestore: firestoreReducer default?
  // test('Should return default state if no action type is recognized', () => {
  //   expect(rootReducer({}, { type: null })).toEqual({
  //     mainTicketList: {},
  //     formVisibleOnPage: false,
  //   });
  // });

  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});
