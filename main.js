const commentsContainer = document.querySelector('.comments-container')
    const commentForm = document.querySelector('.comment-form')
    const usernameInput = document.querySelector('.username')
    const commentTextInput = document.querySelector('.comment-text')

    function displayComments() {
        commentsContainer.innerHTML = ''
        const comments = JSON.parse(localStorage.getItem('comments')) || []
        comments.forEach(comment => {
            const commentDiv = document.createElement('div')
            commentDiv.classList.add('comment')
            commentDiv.innerHTML = 
                `<div class="comment-header">${comment.username} - ${new Date(comment.date).toLocaleString()}</div>
                <div>${comment.text}</div>`
            ;
            commentsContainer.appendChild(commentDiv)
        });
    }

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault()
        
        const username = usernameInput.value
        const text = commentTextInput.value
        const date = new Date().toISOString()

        const comments = JSON.parse(localStorage.getItem('comments')) || []
        comments.push({ username, text, date })
        localStorage.setItem('comments', JSON.stringify(comments))

        usernameInput.value = ''
        commentTextInput.value = ''

        displayComments()
    })

    displayComments()