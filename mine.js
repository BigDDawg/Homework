/**
 * Created by johnmcswain on 10/27/16.
 */

module.exports = function(robot) {
  //  YOUR CODE HERE
  //  Example

  //`.hear` command listens for a specific phrase anywhere in the Slack room. You don't have to mention
  //your Hubot in order to get a response.
  // Works!!! - CD! For hearing
  robot.hear(/Yo!!!/, function(res) {
    return res.send("Yo!Yo!");
  });

  robot.hear(/Arnold/i, function(res) {
    return res.send("Who? Are you calling Arnold Palmer. He died last month.");
  });

  robot.hear(/Money/, function(res) {
    return res.send("Listen here
    Now that ain't workin' that's the way to do it ' +
    'You play the guitar on the M.T.V.That ain't workin' that's the way you do it
    Money for nothin' and your chicks for free
    Money for nothin' and the chicks for free
    (Get your) Money for nothin' and chicks for free
    Money for nothin' and the chicks for free (I want my, I want my MTV)
    Money for nothin' and the chicks for free");
  });



//`.respond` is similar to `.hear`, except it will only be triggered when someone specifically mentions
//the Hubot using `@`, or sends a direct message
robot.respond(/What's your favorite food?/, function(res) {
  return res.send("I'm a robot--I don't eat food!");
});



  robot.respond(/find the modulus of (.*) and (.*)/i, function(msg) {
    var c;
    var d;
    c = parseInt(msg.match[1]);
    d = parseInt(msg.match[2]);
    e = c % d;
    return msg.reply("The remainder of " + c + " and " + d + " = " + e);
  });

  robot.respond(/add (.*) and (.*)/i, function(msg) {
    var aa;
    var bb;
    aa = parseInt(msg.match[1]);
    /// This is converting the variable to a number b/c it is in a string.
    bb = parseInt(msg.match[2]);
    cc = aa + bb;
    return msg.reply(aa + " plus " + bb + " = " + cc);
  });


  // Works!!! - CD! for responding.
  robot.respond(/Finally!!!!!!!!!!!!!!!!!!!!!/, function(res) {
    return res.send("Hell yeah!!!!!!!!!!!!!!!!!");
  });



robot.respond(/Yo Hubbie! My name is (.*)/i, function(msg) {
  var name =;
  name = msg.match[1];
  if (name == "Hubot") {
  return msg.send("You're not Hubot--I'm Hubot!");
} else {
  return msg.reply("Nice to meet you, " + name + "!");
}
});


  robot.hear(/Yo Hubot!!!/, function(res) {
    return res.send("Yo!Yo! Yo Yoo!");
  });

  robot.respond(/what is your favorite (.*)/, function(msg) {
    var fav;
    fav = msg.match[1];
    console.log(fav);
    switch (fav) {
      case "sport":
        return msg.reply("I'm a Hobot--I don't eat food!");
        break;
      case "band":
        return msg.reply("It's gotta be Daft Punk!");
        break;
      case "programming language":
        return msg.reply("Javascript, of course!");
        break;
      default:
        return msg.reply("I don't have a favorite " + fav + ". What's yours?");
    }
  });


}; ///// This ends the module function....Put code above.


























