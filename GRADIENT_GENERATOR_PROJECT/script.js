  // STEP 1: First we need to take the reference, where we want to add actions: 
        let btn1 = document.querySelector('.btn1');
        let btn2 = document.querySelector('.btn2');

        let copy = document.querySelector('.copy');

     
        


        const CommonGradientFun = () => {
            let hexacode = '0123456789abcdef';

            let hex = '#';
            for (let i = 0; i < 6; i++) {
                const RandomCode = Math.floor(Math.random() * hexacode.length);
                hex = hex + hexacode[RandomCode];
            }
            // console.log(hex);
            return hex
        }

        const Gradient1 = () => {
            let hex1 = CommonGradientFun();   //Calling the Common Gradient, when ;btn1 is clicked

            // Now we want to add Color in the background: 
            btn1.textContent = hex1; // Updating the text to the hexcode
            btn1.style.backgroundColor = `${hex1}`;  //   Giving same color to a button also
            document.body.style.backgroundImage = `linear-gradient(to right, ${hex1}, #ad32fe)`;
            copy.textContent = `background-image: linear-gradient(to right, ${hex1} , #ad32fe );`
        }

        const Gradient2 = () => {
            let hex2 = CommonGradientFun();    //Calling the Common Gradient, when ;btn2 is clicked
            btn2.textContent = hex2;  // Updating the text to the hexcode
            btn2.style.backgroundColor = `${hex2}`;   //   Giving same color to a button also
            document.body.style.backgroundImage = `linear-gradient(to right, #45d424, ${hex2})`;
             copy.textContent = `background-image: linear-gradient(to right, #45d424 , ${hex2} );`
       
        }

        // Now once we take the reference, now we need to create a function, that perform the tasks: 
        btn1.addEventListener('click', Gradient1);
        btn2.addEventListener('click', Gradient2);

        copy.addEventListener('click', ()=>{
            //write a js plugin that uses promises to copy the text /clipboard:
            alert('your code is copied...')
            navigator.clipboard.writeText(copy.innerText); 
        })
