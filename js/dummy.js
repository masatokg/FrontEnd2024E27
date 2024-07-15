"use strict";
let = json_object = {
    "name": "山田太郎",
    "age": 18,
    "active": true,
    "love_fruits": [
        "orange", "banana"
    ],
    "work": {
        "company": "株式会社テスト",
        "position": "エンジニア"
    }
}

// JSONオブジェクトの値をキーで取得
let name = json_object.name; // 名前
let love_fruits = json_object.love_fruits; // 好きな果物配列
let love_fruits_0 = json_object.love_fruits[0]; // 好きな果物配列の0番目
let work = json_object.work; // 仕事オブジェクト
let work_company = json_object.work.company; // 仕事オブジェクトの会社名

// JSONオブジェクトを文字列に変換
let json_string = JSON.stringify(json_object);



// ユーザーリストをhttpsリクエストで取得する関数
let do_GetRequest = function () {
    fetch('URL')
        .then(function (response) {
            // console.log(response);
            // レスポンスのデータ部分をJSONオブジェクトに変換する
            let json_object = response.json();
            // JSONオブジェクトをリターンして関数終了
            return json_object;
        })
        .then(function (jsonData) {
            // リターンされたJSONオブジェクトを処理したい関数に引き渡す
            // ここではshow_users関数に引き渡している
            show_users(jsonData);
        })
        .catch(function (error) {
            // エラーがあったらキャッチしてコンソールにエラーメッセージを表示
            console.error('エラー:', error);
        })
};






