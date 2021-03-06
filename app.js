const textBoxDiv = document.getElementById('text-box')
const typingArea = document.getElementById('typing-area')
const feedbackDiv = document.getElementById('feedback')
const timerBoxDiv = document.getElementById('timer')

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nibh ut velit facilisis accumsan. Vestibulum tempor, massa at malesuada gravida, nunc mi pulvinar libero, consequat convallis neque nulla sit amet urna. Proin magna orci, sagittis hendrerit turpis vitae, venenatis pulvinar neque. Mauris gravida, mauris non dictum dignissim, dui est faucibus arcu, quis congue arcu velit vitae dui. In id mauris lectus. Sed sagittis dignissim lorem, sed scelerisque sapien auctor vitae. Quisque at mollis nibh, sit amet scelerisque nulla. Fusce porta pretium odio eget sollicitudin. Vestibulum justo leo, ultrices eget commodo ut, consectetur ac arcu. Maecenas eget ex ut risus mattis porta at vel mi. Mauris vestibulum mi quis diam lacinia, in interdum nunc interdum. Pellentesque faucibus vehicula nisl ut molestie. Nunc porttitor ex a erat consectetur ullamcorper in sed metus. Sed ac magna dignissim, suscipit turpis nec, laoreet eros. Etiam egestas in quam a gravida.'
let wordsArray = text.split(' ')
textBoxDiv.innerText = text
let wordCount = 0
highlight()

let errorCount = 0
feedbackDiv.innerText = errorCount


let timer = 0


setInterval(() => {
    timer++
    minutes = parseInt(timer / 60)
    seconds = (timer % 60).toString().padStart(2, '0')
    timerBoxDiv.innerText = minutes + ':' + seconds
}, 1000);


typingArea.focus()
typingArea.addEventListener('keydown', event => {
    console.log(event.keyCode)

    if ( event.keyCode == 32 ) {
        if ( text.split(' ')[wordCount] != typingArea.value.split(' ')[wordCount] ) {
            wordsArray[wordCount] = '<span class="incorrect">' + wordsArray[wordCount] + '</span>'
            errorCount++
            feedbackDiv.innerText = errorCount
        } else {
            wordsArray[wordCount] = '<span class="correct">' + wordsArray[wordCount] + '</span>'
        }
        wordCount++
        highlight()
    }

})

function highlight () {
    let highlightedArray = Array.from(wordsArray)
    highlightedArray[wordCount] = '<span class="highlight">' + highlightedArray[wordCount] + '</span>'
    textBoxDiv.innerHTML = highlightedArray.join(' ')
}