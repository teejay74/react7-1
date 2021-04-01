import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

export default function DateTimePretty(Component) {
  function NewDateTime(props) {
    const date = moment(props.date, 'YYYYMMDDhhmm').fromNow()
    return <Component date={date} />
  }
  return NewDateTime;
}