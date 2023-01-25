const comments = [
  {
    name: "Ashton",
    text: "He made a brief comment. She gave positive comments about the dinner.Jane responded poorly to the negative comment.A teacher can help students by providing a lot of helpful comments",
    children: [
      {
        name: "Robert",
        text: "It was this that saved her from some snide comment about her less-than-fashionable clothes.",
        children: [
          {
            name: "Ayden",
            text: "To comment or make suggestions on these or other ISO standards on polymer melt rheology please contact Martin Rides.",
            chlidren: [],
          },
        ],
      },
      {
        name: "Hayden",
        text: "It was also used by a class of bards or itinerant soothsayers known by the name of vates, of whom the most famous was one Marcius, and in the verses, as sung at harvest-homes and weddings, which gave expression to the coarse gaiety of the people and to their strong tendency to personal raillery and satiric comment.",
        chlidren: [],
      },
    ],
  },
  {
    name: "Alis",
    text: "He frantically thought about how to explain his comment.",
    children: [],
  },
];

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
