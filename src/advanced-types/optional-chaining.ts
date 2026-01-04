type Archive = {
  title: string;
  text: string;
  date?: Date;
};

const archive: Archive = {
  title: "That's the title",
  text: "And here comes the text",
  date: new Date(),
};

const date = archive.date?.toDateString(); // short circuits and evaluates to "undefined" if date's type is undefined or null
if (date) console.log(date);
