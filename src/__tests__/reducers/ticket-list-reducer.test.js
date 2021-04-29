import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {
  let action;
  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully update ticket data on masterTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    let updateAction = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      id: id,
      issue: 'Redux is working now.'
    };

    const newTicket = ticketListReducer({}, action);    
    expect(ticketListReducer(newTicket, updateAction)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: 'Redux is working now.',
        id: id
      }
    });
  });
});
