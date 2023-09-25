let movie = {
    title: "Gone With The Wind",
    year: 1939,
    actressLead: "Vivien Leigh",
    actorLead: "Clark Gable",
    genre: "Epic",
    academyAwards: 8,
    leadingRole: function (actor) {
        return this[actor];
    },
    formatInfo: function () {
        return `${this.title} was released in ${this.year}. It tells the story of the civil war in the US.`;
    },
    quote: "Frankly My Dear, I don't give a damn"
};

console.log(movie);
console.log("Most famous quote from the movie: " + movie.quote);
let role = movie.leadingRole("actorLead");
console.log(role);
console.log("Leading role, " + movie.leadingRole("actressLead"));

let roleWithMostVotes = "actorLead";
console.log("Role with most votes is " + movie.leadingRole(roleWithMostVotes));

movie.profits = {
    yearOfRelease: 10,
    subsequentToDate: 40
};

console.log("Profits the year of release: " + movie.profits.yearOfRelease);
