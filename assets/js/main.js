import comments from "./Comments.js";

const renderComments = (comments) => {
  let output = "";
  for (const comment of comments) {
    let name = `<h4>${comment.name}</h4>`;
    let text = `<p>${comment.text}</p>`;

    let children = "";
    if (Array.isArray(comment.children) && comment.children.length > 0) {
      children = renderComments(comment.children);
    }
    output += `<li>${name}${text}${children}</li>`;
  }

  return `<ul> ${output} </ul>`;
};

document.querySelector(".comments-container").innerHTML =
  renderComments(comments);
