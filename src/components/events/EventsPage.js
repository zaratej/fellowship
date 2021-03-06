import React from 'react';
import './EventsPage.css';

const WhatsOnSection = (props) => {
  return (
    <div className="page">
      <h2>Sunday Meetings</h2>
      <p className="highlightText">Morning service at 10.00am</p>

      <h2>Midweek Meetings</h2>
      <table className="table">
        <tbody>
          <tr><td>Women's Meeting</td><td>Last Tuesday of each month at 8pm</td></tr>
          <tr><td>Bible study and care groups</td><td>Friday fortnightly 7:30pm</td></tr>
          <tr><td>IGNITE Young adults</td><td>Friday fortnightly 7:30pm</td></tr>
          <tr><td>EPIC Youth</td><td>First Thursday of each month at 7:00pm</td></tr>
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default WhatsOnSection;
