let register = ''; // initiate the input value

const buttons = document.querySelectorAll('.number');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        register += btn.textContent;
        document.getElementById('row1').innerHTML = register;
        if (!Number(register)) {
            document.getElementById('row1').innerHTML = 'ERROR'
        } else {
            document.getElementById('row1').innerHTML = Number(register)
        }
        n_reg = Number(register);
    })
})



