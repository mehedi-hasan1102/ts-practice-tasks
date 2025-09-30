টাস্ক ১: বেসিক টাইপস

একটা প্রোগ্রাম বানাও যা বইয়ের তথ্য সংরক্ষণ করবে।

প্রপার্টিজ:

title (string)

author (string)

pages (number)

published (boolean)

একটি ফাংশন ব্যবহার করে বইয়ের তথ্য প্রিন্ট করো।

সব ভেরিয়েবল এবং ফাংশনের প্যারামিটার টাইপ স্পষ্টভাবে দাও।

এক্সট্রা: [title, author] জন্য tuple ব্যবহার করো।



type Book = {
  title: string;
  author: string;
  pages: number;
  published: boolean;
  info?: [string, string]; // optional tuple: [title, author]
}

// index.ts
const myBook: Book = {
  title: "Anujaman",
  author: "Mehedi Hasan",
  pages: 5,
  published: true,
  info: ["Anujaman", "Mehedi Hasan"]
}

function printBook(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Pages: ${book.pages}`);
  console.log(`Published: ${book.published}`);
  if (book.info) {
    console.log(`Info Tuple: ${book.info[0]}, ${book.info[1]}`);
  }
}

printBook(myBook);