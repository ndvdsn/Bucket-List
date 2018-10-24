use bucket;
db.dropDatabase();

db.bucket.insertMany([
  {
    listItem: "colour in Guernica with crayon in pastel shades"
  },
  {
    listItem: "get a haircut by someone who knows what they're doing"
  },
  {
    listItem: "re-learn to tie shoes with one hand"
  }
]);
