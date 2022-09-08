//問題文をオリジナルに書き換え
const quiz = [
    {
      question: '高水準言語(JavaScript)は誰が読むための言語でしょうか？',
      answers: [ '機械', '動物', '人間', 'ソフトウェア'],
      correct: '人間'
    }, {
      question: '次のうち、コメントイン・アウトを実行できるｼｮｰﾄｶｯﾄはどれでしょう？',
      answers: [ 'Ctl + S', 'Alt + Z', 'Ctl + /', 'Ctl + Shift + J'],
      correct: 'Ctl + /'
    }, {
      question: '配列(Array)の先頭に追加し、長さを返すメソッドはどれでしょう？',
      answers: [ '.unshift', '.push', '.pop', '.shift'],
      correct: '.unshift'
    }
    , {
      question: 'コンソールには何と表示されるでしょう？  const infoObject = { name: "Hana", dog: true, age; 12 };  for (const key in infoObject) {const value = infoObject [key] ;  console.log(value); }',
      answers: [ '"Hana"', '"Hana""true""12"', 'name,dog,age', 'Uncaught SyntaxError'],
      correct: 'Uncaught SyntaxError'
    }
    , {
      question: 'アメリカ海軍で計算機科学者のグレース・ホッパーさん、何歳で退役したでしょう？',
      answers: [ '65歳', '71歳', '79歳', '85歳'],
      correct: '79歳'
    }
  ];
  
  const $window = window;
  const $doc = document;
  const $question = $doc.getElementById('js-question');
  const $buttons = $doc.querySelectorAll('.btn');
  
  const quizLen = quiz.length;
  let quizCount = 0;
  let score = 0;
  
  const init = () => {
    $question.textContent = quiz[quizCount].question;
    
    const buttonLen = $buttons.length;
    
  //while文をforループ文に変更
    for(let i = 0 ; i < buttonLen ; i++ ){
      $buttons[i].textContent = quiz[quizCount].answers[i];
    }
  };
  
  const goToNext = () => {
    quizCount++;
    if(quizCount < quizLen){
      init(quizCount);
    } else {
      showEnd();
    }
  };
  
  const judge = (elm) => {
    if(elm.textContent === quiz[quizCount].correct){
      $window.alert('正解!');
      score++;
    } else {
      $window.alert('不正解!');
    }
    goToNext();
  };
  
  //全問正解したら合格、1問でも間違えたら不合格にする
  //点数表記にする
  const showEnd = () => {
    if (score === quizLen) {
    $question.textContent = '合格です！あなたのスコアは' + Math.round( score / quizLen * 100 ) + '点です';
    } else {
    $question.textContent = 'DAY1からやり直し!! あなたのスコアは' + Math.round( score / quizLen * 100) + '点です';
      }
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
  };
  
  init();
  
  let answersIndex = 0;
  let answersLen = quiz[quizCount].answers.length;
  
  while(answersIndex < answersLen){
    $buttons[answersIndex].addEventListener('click', (e) => {
      judge(e.target);
    });
    answersIndex++;
  }


//カウンタを追加  
let count = 0; //カウントの初期値
timerID = setInterval('countup()',1000); //1秒毎にcountup()を呼び出し
  
function countup() {
    count++;
    document.form_count.counter.value = count + "秒経過";
  }

$(window).on("load", function () {
    $(".js_trigger_sample").on("click", function () {
      var elm = $($(this).parent()).find(".default"), tmp = $(this).attr("src");
      elm.addClass("active");
      elm.removeClass("default");
      elm.find("img").attr("src", tmp)
    });
});
