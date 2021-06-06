const deletePost = async (event) => {

    const label = event.target.getAttribute('data-id')

    const response = await fetch(`/api/posts/${label}`, {
        method: 'DELETE',
        // body: JSON.stringify({}),
        // headers: { 'Content-Type': 'application/json'}
    })

    if (response.ok) {
        document.location.replace('/profile')
    } else {
        alert(response.statusText)
    }


    
}

const home_route = async () => {

    // Fetch profile page
    const reponse = await fetch('/homeRoutes/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })

    document.location.replace('/')

} 

const updatePost = async (event) => {

    const label = event.target.getAttribute('post-id')
    const body = $('#updateText').val()

    // Get PUT for post
    const response = await fetch(`/api/posts/${label}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: label,
            body: body
        }),
        headers: { 'Content-Type': 'application/json'}
    })

    document.location.replace('/profile')
}

$(".delete-button").on('click', deletePost)
$("#home-nav").on('click', home_route)
$('#updateBtn').on('click', updatePost)