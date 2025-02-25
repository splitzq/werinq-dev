window.onload = async function() {
    const errorPages = document.getElementsByClassName('errorPage')

    if (errorPages.length > 0) {
        const errorPage = errorPages[0]
        errorPage.classList.add("fade-in")
    }
}

document.getElementById("goHome").addEventListener("click", function() {
    window.location.href = "https://werinq.xyz/"
})