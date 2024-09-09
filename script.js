const display = document.getElementById( 'display' );
let displayValue = '0';

document.querySelectorAll( 'button' ).forEach( button => {

    button.addEventListener( 'click', () => {

        const value = button.textContent;
        
        switch( value ){

            case '=':

                try{

                    displayValue = eval( displayValue );

                }catch{

                    displayValue = 'Error';

                }

                break;

            case 'C':

                displayValue = '0';

                break;

            case '←':

                displayValue = displayValue.slice( 0, -1 ) || '0';

                break;

            default:

                displayValue = displayValue === '0' ? value : displayValue + value;

        }
        
        display.textContent = displayValue;

    });

});