
const logout = async () => {
    
    // Fetch to logout
    const response = await fetch ('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json '}
    })

    if (response.ok) {
        document.location.replace('/login')
    } else {
        alert(response.statusText)
    }
}

const profile_route = async () => {

    // Fetch profile page
    const reponse = await fetch('/homeRoutes/profile', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })

    document.location.replace('/profile')

}

const comment = async (event) => {

    
    const post_id = event.target.getAttribute('id').split("")[0]
    const comment = $(`#${post_id}Comment`).val()

    // Fetch add comment
    const response = await fetch ('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({
            body: comment,
            post_id: post_id
        }),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}

const newPost = async () => {
    
    const title = $("#newPostTitle").val()
    const body = $("#newPostText").val()

    const response = await fetch ('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({
            body: body,
            title: title
        }),
        headers: {'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/')
    } else {
        alert(response.statusText)
    }
}

document.querySelector("#logout-nav").addEventListener('click', logout)
document.querySelector('#profile-nav').addEventListener('click', profile_route)
$(".comment-btn").on('click', comment)
$("#newPostBtn").on('click', newPost)