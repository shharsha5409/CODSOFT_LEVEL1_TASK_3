let string = "";
        let inputField = document.getElementById('inputField');
        let resetButton = document.getElementById('resetButton');
        let equalButton = document.getElementById('equalButton');
        
        function calculate() {
            string = eval(string);
            inputField.value = string;
        }

        let buttons = document.querySelectorAll('.button');
        Array.from(buttons).forEach((button) => {
            button.addEventListener('click', (e) => {
                if (e.target.innerHTML === '=') {
                    calculate();
                } else if (e.target.innerHTML === 'C') {
                    string = "";
                    inputField.value = string;
                } else if (e.target.innerHTML === 'X') {
                    string = string.slice(0, -1);
                    inputField.value = string;
                } else {
                    string = string + e.target.innerHTML;
                    inputField.value = string;
                }
            });
        });

        inputField.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                calculate();
            }
        });

        // Enable keyboard input for calculator buttons
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate();
            } else if (/[0-9%\/*\-+.]/.test(e.key)) {
                string += e.key;
                inputField.value = string;
            } else if (e.key === 'Backspace') {
                string = string.slice(0, -1);
                inputField.value = string;
            } else if (e.key === 'c' || e.key === 'C') {
                string = "";
                inputField.value = string;
            }
        });