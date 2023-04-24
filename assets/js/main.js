import comments from "./Comments.js";

const renderComments = (comments) => {
  // HTML output to be added to the page
  let output = "";
  for (const comment of comments) {
    // create p , h3 elemant for each name and txt
    let name = `<h4>${comment.name}</h4>`;
    let text = `<p>${comment.text}</p>`;

    let children = "";
    // use Recursive function for show childern comments
    if (Array.isArray(comment.children) && comment.children.length > 0) {
      children = renderComments(comment.children);
    }
    output += `<li>${name}${text}${children}</li>`;
  }

  return `<ul> ${output} </ul>`;
};

document.querySelector(".comments-container").innerHTML =
  renderComments(comments);
