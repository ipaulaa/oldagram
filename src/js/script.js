import { POSTS } from "./data.js";

function getPostHTML(post) {
  const {
    name,
    username,
    location,
    avatar,
    post: postImg,
    comment,
    likes
  } = post;
  return `
  <section>
    <div class="post-info">
      <img
        class="avatar"
        src="${avatar}"
        alt="${name}'s Avatar" />
      <div>
        <p class="user">${name}</p>
        <p class="location">${location}</p>
      </div>
    </div>
    <img
      class="post"
      src="${postImg}"
      alt="${name}'s Self Portrait" />

    <div class="post-footer">
      <div class="reactions">
        <ion-icon class="like-btn" name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <p class="likes"><span>${likes}</span> likes</p>
      <p class="comment">
        <span class="user-comment">${username}</span> ${comment}
      </p>
    </div>
  </section>`;
}

const main = document.getElementById("main");
main.innerHTML = POSTS.reduce((acc, post) => acc + getPostHTML(post), "");

const likeBtns = document.querySelectorAll(".like-btn");
likeBtns.forEach(likeBtn => {
  likeBtn.addEventListener("click", () => {
    const likesEl = likeBtn.parentNode.parentNode.querySelector(".likes span");
    const likesAmount = Number(likesEl.textContent);
    likesEl.textContent = `${likesAmount + 1}`;
  });
});
