var julie = ['You have loads of nice clothes and a good sense of dress!',
    'You have a nice smile!',
    'You are GREAT at making french onion soup!',
    'You are helpful and give people advice on TSR and stuff!',
    'Everyone on Amgen thinks you\'re awesome!',
    'You have good taste in sitcoms!',
    'You made the department magazine practically on your own! In second year!!!',
    'You got the highest mark out of over 100 people!',
    'You are so good at skiing you teach other people how to do it!',
    ];
var i = Math.floor(julie.length*Math.random())
var mess = julie[i]
    document.getElementById("message").textContent = mess;
