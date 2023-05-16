let myToDos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeetings: function (meetings) {
        this.meetings = this.meetings + meetings;
    },

    mySummary: function () {
        return `I have ${this.meetings} meetings left today`
    }
}


myToDos.addMeetings(5);
console.log(myToDos.mySummary())