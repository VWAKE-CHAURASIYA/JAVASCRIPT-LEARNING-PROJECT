//HERE FIRST WE TAKE THE REFERENCE OF ACCORDIAN, THAT CONTAINT THE QUESTION AND ANSWER: 

let accordian = document.querySelectorAll('.accordian'); //here it contains all the accordian in the array form, we need to access it one by one:

accordian.forEach((accordian)=>
{
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    //CREATING A FUNCTION, THAT ACTIVATE THE ICON AND ANSWER , WEHN CLICK:
    accordian.addEventListener('click', ()=>
    {
        //WE KNOW THAT WE CAN USE CLASSLIST TO CREATE A CLASS INSIDE ANY DIV'S, USING CLASSLIST WE CAN USE THREE THINGS; ADD, REMOVE AND TOGGLE, SO USING TOGGLE, WE CAN PUT OUR ACTIVE CLASS WHICH WE DEFINED...
        icon.classList.toggle('active');
        answer.classList.toggle('active');


        //THIS IS ALSO THE BEST APPROACH: 
        // if(icon.classList.contains('active'))
        // {
        //     icon.classList.remove('active');
        //     answer.style.maxHeight = null;
        // }
        // else{
        //     icon.classList.add('active')
        //     answer.style.maxHeight = answer.scrollHeight;
        // }


    })
})
