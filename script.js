const list = document.querySelector(".list");
const listItems = list.getElementsByTagName("li");

[...listItems].forEach(function (value, index, array) {
    const regex = /<a href="([^"]+)"/;
    const link = value.innerHTML.match(regex)[1];
    const technologies = value.innerHTML.split("[")[1].replace("]", "").split(", ");



    function alignText(text, length, array) {
        if (text.length >= length) {
            return `${text}[${array.join(', ')}]`;
        }

        const diff = length - text.length;
        const dashes = "-".repeat(diff);
        const alignedText = text + dashes;

        return `${alignedText}[${array.join(', ')}]`;
    }
     // value.textContent = alignText(link, 40, technologies)
    console.log(value.innerText)
    value.innerText =value.value =alignText(link, 40, technologies)

});

