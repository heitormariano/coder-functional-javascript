// Using getter in an object literal

let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} join the meeting`);
    this.attendees.push(attendee);
    return this;
  },

  getLatest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

console.log(meeting.getLatest());

meeting.add('Mike Smith').add('Mary Brown');
console.log(meeting.getLatest());
