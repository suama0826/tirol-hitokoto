(function() {
    'use strict';

    var btn = document.getElementById('btn');
    var results = document.getElementById('unsei-text');

    btn.addEventListener('click', function() {
        var unsei = ['「肩にわたしのフンが付いたままよ」',
                     '「私のあさごはん忘れてない？」',
                     '「ぷんすかぷんすか！キャルルルル！」',
                     '「はやく、粟穂をよこしなさい!」',
                     '「今夜は甘えて良いかしら。。。」',
                     '「誰がおまんじゅうやねん！💢」',
                     '「午後8時には眠りたいわ」',
                     '「とにかくはよせえ」',
                     '「誕生日は4月12日よ。よろしく」',
                     '「ラムネくんのことは覚えているわ」'];
        var n = Math.floor(Math.random() * unsei.length);
        results.textContent = unsei[n];
    });
})();
