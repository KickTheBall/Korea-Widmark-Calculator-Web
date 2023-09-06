function clickCheck(target){
    document.querySelectorAll('input[type=checkbox').forEach(el => el.checked = false);

    target.checked = true;
}

function calculateResult(){
    let Degree = document.getElementById('Degree').value / 100;
    let Amount = document.getElementById('Amount').value;
    let Time = document.getElementById('Time').value; if (Time <= 1.25) { Time = 0; }
    let Weight = document.getElementById('Weight').value;
    let GC;

    if (document.getElementById('Man').checked || document.getElementById('Woman').checked){
        if (document.getElementById('Man').checked) {
            GC = 0.86;
        } else {
            GC = 0.64;
        }
    }

    let Result = ((Amount * Degree * 0.7894) * 0.7 / (Weight * GC) / 10 - (Time * 0.015)) 

    document.getElementById('Result').innerText = Math.ceil(Result * 1000) / 1000;
    
    if (Result < 0.03) {
        document.getElementById('Punishment').innerText = 'No punishment';
    } else if (Result >= 0.03 && Result < 0.08) {
        document.getElementById('Punishment').innerText = 'Imprisonment of not more than one year or a fine of not more than 5 million won';
    } else if (Result >= 0.08 && Result < 0.2) {
        document.getElementById('Punishment').innerText = 'Imprisonment for not less than 1 year but not more than 2 years or a fine of not less than 5 million won but not more than 10 million won';
    } else if (Result >= 0.2) {
        document.getElementById('Punishment').innerText = 'Imprisonment for not less than 2 years but not more than 5 years or a fine of not less than 10 million won but not more than 20 million won';
    } else {
        document.getElementById('Punishment').innerText = '';
    }
}
