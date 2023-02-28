var count = 0
const countAddBtn = document.getElementById("add")
const countHeader = document.getElementById('count')
const countSubstractBtn = document.getElementById('substract')

countAddBtn.addEventListener("click", () => {
    count++
    countHeader.innerText = count
console.log(count)

})
console.log(count)
countSubstractBtn.addEventListener("click", () => {
console.log(count)
    count--
    countHeader.innerText = count
})