let array = [
    "Hello, my name is Ojo Moyosorejesu",
    "I study at SQI College of ICT",
    "I'm in the Software Engineering Programme",
    "My instructor is Mr Tzee",
    "I'm currently a Front-end Developer",
    "I'm also currently studying Computer Science at the University of Ibadan"
]
let i = 0;
let j = 0;
let sentence;
let dis;
dis = document.getElementById('display');
function autotype(params) {
    if (!array[i]) {
        i = 0;
        return autotype();
    }
    sentence = array[i];
    dis.innerHTML += sentence[j];
    timer = setTimeout(() => {
        if (sentence[j + 1]) {
            j += 1;
            autotype();
        }
        else {
            setTimeout(() => {
                remove();
            }, 1700);
        }
    }, 220);
}
function remove(params) {
    let sentence = dis.innerHTML;
    dis.innerHTML = sentence.slice(0, sentence.length - 1)
    antitimer = setTimeout(() => {
        if (dis.innerHTML != "") {
            remove();
        }
        else {
            i += 1;
            j = 0;
            autotype();
        }
    }, 220);
}
autotype();