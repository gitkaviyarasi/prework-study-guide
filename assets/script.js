var topics = ["HTML", "CSS", "Git", "Javascript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
 for(var x =0;x < topics.length; x++){
    console.log(topics[x]);
 }
}
function selecttopic(){
    if (randomTopic==='HTML'){
        console.log("Let's study HTML");
    }else if(randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    }else if(randomTopic === 'GIT') {
         console.log("Let's study GIT!");
    }else if(randomTopic === 'Javascript') {
         console.log("Let's study Javascript!");
    }else  {
    console.log("Please try again later!");
    }
}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selecttopic();