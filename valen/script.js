$(document).ready(function () {
  var envelope = $("#envelope");
  var choices = $("#choiceButtons");

  envelope.click(function () {
    openEnvelope();
  });

const START_SCALE = 1;
const GROWTH_PER_CLICK = 0.25;
const MAX_NO_CLICKS = 5;

let noCount = 0;
let yesScale = START_SCALE;

const noMessages = [
  "Are you sure?",
  "Love please",
  "Di ko mo dawat :(",
  "You are breaking my heart :<",
  "Hilak nalang ko sa gidli"
];


$("#no").click(function () {
  if (noCount >= MAX_NO_CLICKS) return;

  // show message
  $("#no-message")
    .text(noMessages[noCount])
    .css("opacity", 1)
    .animate({opacity: 1}, 300);

  // show gif
  $("#no-gif")
    .hide()
    .attr("src", `images/image${noCount + 2}.gif`)
    .fadeIn(300);

  // grow YES
  yesScale += GROWTH_PER_CLICK;
  $("#yes-wrapper").css("transform", `scale(${yesScale})`);

  // move NO away a bit
  $("#no").css(
    "transform",
    `translateX(${noCount * 20}px)`
  );

  noCount++;

  if (noCount === MAX_NO_CLICKS) {
    $("#no").fadeOut();
  }
});

  $("#yes").click(function () {
    $("#envelope").fadeOut(300);
    $("#choiceButtons").fadeOut(300);
    $("#no-gif-container").fadeOut(200);
    $("body").css("overflow", "hidden");
    $("#yes-result").fadeIn(400);
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");

    // show Yes / No after animation
    setTimeout(function () {
      choices.fadeIn();
    }, 800);
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
    choices.fadeOut();
  }

  // RANDOM HEART BACKGROUND
  const hearts = ["💖", "💕", "💗", "💓", "💞", "💘", "❤️", "🩷"];
  const heartBg = $("#heart-bg");

  for (let i = 0; i < 60; i++) {
    const heart = $("<div class='bg-heart'></div>");
    heart.text(hearts[Math.floor(Math.random() * hearts.length)]);

    heart.css({
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      fontSize: Math.random() * 2 + 1 + "rem",
      transform: `rotate(${Math.random() * 360}deg)`,
      animationDelay: Math.random() * 5 + "s"
    });

    heartBg.append(heart);
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get("from") === "flower") {
    $("#envelope").hide();
    $("#choiceButtons").hide();
    $("#no-gif-container").hide();
    $("#yes-result").show();
  }
  
});
