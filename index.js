function shout(string) {
  return string.toUpperCase();
}

shout("hello!");

function whisper(string) {
  return string.toLowerCase();
}

whisper("HELLO");

function logShout(string) {
  console.log(shout(string));
}

logShout("hello");

function logWhisper(string) {
  console.log(whisper(string));
}

logWhisper("hello");

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

sayHiToHeadphonedRoommate("HELLO");
