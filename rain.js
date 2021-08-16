var sentences = "Listen, Morty, I hate to break it to you, but what people call “love” is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science "
sentences+= "Wubba lubba dub dub "
sentences+= "You gotta get Schwifty "
sentences+="We’ve got a lot of friends and family to exterminate "
sentences+="I’ll tell you how I feel about school, Jerry, it’s a waste of time. Bunch of people running around bumping into each other got a guy up front says, ‘2 + 2,’ and the people in the back say, ‘4.’ Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or something. I mean, it’s not a place for smart people, Jerry. I know that’s not a popular opinion, but that’s my two cents on the issue.” – What do they actually teach you in school that you end up using in life? Absolutely nothing "
sentences+="Weddings are basically funerals with cake ";
sentences+="What, so everyone’s supposed to sleep every single night now? You realize that nighttime makes up half of all time "
sentences+="Don’t get drawn into the culture, Morty. Stealing stuff is about the stuff, not the stealing "
sentences+="He’s not pressing charges… That’s gotta be the “you shot me” equivalent of not being mad "

var words = sentences.split(/[!,?,., ]/);
words=words.filter(word=>word!="");

var words = words.map(function(word) {
    return {"word": " "+word+" ", "color":"red"
}
    });
