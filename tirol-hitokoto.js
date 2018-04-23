(function() {
    'use strict';

    var btn = document.getElementById('btn');
    var results = document.getElementById('unsei-text');

    btn.addEventListener('click', function() {
        var unsei = ['「あら、肩にわたしのフンが付いたままよ」',
                     '「私のあさごはん忘れてない？」',
                     '「ぷんすかぷんすか！キャルルルル！」',
                     '「はやく、粟穂をよこしなさい」',
                     '「今夜は甘えて良いかしら。。。」',
                     '「誰がおまんじゅうやねん！💢」',
                     '「午後8時には眠りたいわ」',
                     '「遅かったじゃない。どこへ出かけてたの」',
                     '「誕生日は4月12日よ。よろしく」',
                     '「甘噛みしてあげるわ」'];
        var n = Math.floor(Math.random() * unsei.length);
        results.textContent = unsei[n];
    });
})();
