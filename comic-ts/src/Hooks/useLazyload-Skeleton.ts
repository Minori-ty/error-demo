export function useLazyload() {
    // console.log(document.querySelectorAll('img'))
    var timer: any = null
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // console.log(entry.target.getAttribute('data-src'))
                clearInterval(timer)
                // console.log(entry.target.previousElementSibling)
                timer = setInterval(() => {
                    entry.target.setAttribute('src', entry.target.getAttribute('data-src') as string)
                    entry.target.previousElementSibling!.removeAttribute('class')
                    clearInterval(timer)
                }, 0)
                observer.unobserve(entry.target)
            }
        })
    })
    document.querySelectorAll('img').forEach((img) => {
        // console.log(img)
        observer.observe(img)
    })
}
