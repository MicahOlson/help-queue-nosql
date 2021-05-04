import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  const { currentTicket } = props;
  let names = 'Pair Names';
  let location = 'Location';
  let issue = 'Describe your issue.';

  if (currentTicket) {
    names = currentTicket.names;
    location = currentTicket.location;
    issue = currentTicket.issue
  }

  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder={names}
        />
         <input
          type='text'
          name='location'
          placeholder={location}
        />
        <textarea
          name='issue'
          placeholder={issue}
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  currentTicket: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
