const input = document.getElementById('post_id');
const postButton = document.getElementById('post_button');
const postBody = document.getElementById('post_body');
const commentsContainer = document.getElementById('comments_container');

postButton.addEventListener('click', () => {
    const postId = parseInt(input.value);
    if (post_id < 1 || post_id > 100) {
      alert('Айді поста має бути в межах від 1 до 100 включно!');
      return;
    }
    
    
    fetch ('https://jsonplaceholder.typicode.com/posts/${post_id}')
    .then((response) => {
        return response.json
    })
    .then((data) => {
        console.log(data)
    });

});


