const input = document.getElementById("post_id");
const postButton = document.getElementById("post_button");
const postBody = document.getElementById("post_body");
const commentsContainer = document.getElementById("comments_container");


postButton.addEventListener("click", async () => {
  const postId = parseInt(input.value);
  if (postId < 1 || postId > 100) {
    alert("Айді поста має бути в межах від 1 до 100 включно!");
    return;
  }

  commentsContainer.innerHTML = "";

  try {
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await postResponse.json();

    const postHtml = `
      <div>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;
    postBody.innerHTML = postHtml;

    const commentsButton = document.createElement("button");
    commentsButton.textContent = "Показати коментарі";
    commentsButton.addEventListener("click", async () => {
      try {

        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        const comments = await commentsResponse.json();

        const commentsHtml = comments
          .map(
            (comment) => `
          <div>
            <h3>${comment.name}</h3>
            <p>${comment.body}</p>
          </div>
        `
          )
          .join("");
        commentsContainer.innerHTML = commentsHtml;
      } catch (error) {
        alert(`Помилка: ${error.message}`);
      }
    });
    postBody.appendChild(commentsButton);
  } catch (error) {
    alert(`Помилка: ${error.message}`);
  }
});
