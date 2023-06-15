import React from "react";

export default function Month(props) {
  const { month, id } = props;
  return (
    <div className="card_b" id={month.name.toLowerCase()} key={id}>
      <div className={`month_b month${(id % 3) + 1}_b`}>{month.name}</div>
      <table className={`content-table_b month${(id % 3) + 1}-tr_b`}>
        <thead>
          <tr>
            <th className="date_b">Date</th>
            <th className="name_b">Name</th>
            <th className="username_b">Username</th>
            <th className="place_b">Place</th>
          </tr>
        </thead>
        <tbody id={`${month.name.toLowerCase()}-body`}>
          {month.members.map((member) => (
            <tr key={member.username}>
              <td>{member.date}</td>
              <td>{member.name}</td>
              <td>{member.username}</td>
              <td>{member.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
