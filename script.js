const url = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
  try {
    let response = await fetch(url);
    console.log(response);
    const data = await response.json();
    document.write("<ul>");
    data.forEach((post) => {
      console.log(post);
      document.write(`<li><strong>${post.title}</strong></li>`);
      document.write(`<p>${post.body}</p>`);
    });
    document.write("<ul>");
    console.log(data);
  } catch (error) {
    console.log("Error");
    console.error(error);
  }
};
