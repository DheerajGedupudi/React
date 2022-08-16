window.onload = function()
{
    let textBox = <HTMLInputElement>document.getElementById("text-box")!;
    logToConsoleOnChange();
}

function logToConsole()
{
    let textBox = <HTMLInputElement>document.getElementById("text-box")!;
    console.log(textBox.value);
};

function logToConsoleOnChange()
{
    let outputPlace = document.createElement("div");
    outputPlace.id = "text-output";
    document.body.appendChild(outputPlace);
    displayOutput();
}

function clearText()
{
    let textBox = <HTMLInputElement>document.getElementById("text-box")!;
    textBox.value = "";
    textBox.focus();
}

function displayOutput()
{
    let outputPlace = document.getElementById("text-output")!;
    if (outputPlace==null)
    {
        let outputPlace = document.createElement("div");
        outputPlace.id = "text-output";
        document.body.appendChild(outputPlace);
    }
    let textBox = <HTMLInputElement>document.getElementById("text-box")!;
    outputPlace.innerHTML += `
        <p class="the-output">${textBox.value}</p>
    `;
}

function clearOutput()
{
    let outputPlace = document.getElementById("text-output");
    outputPlace?.remove();
    let textBox = <HTMLInputElement>document.getElementById("text-box")!;
    textBox.focus();
}