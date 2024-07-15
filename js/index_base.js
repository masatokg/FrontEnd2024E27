"use strict";

// DVD行採番用の変数
let user_num_count = 1;

// DVDリストをhttpsリクエストで取得する関数
let get_dvd_list = function () {
    fetch('https://masatokg.watson.jp/FrontEnd2024E/FrontEnd2024E27/php/getDVDList.php')
        .then(function (response) {
            // console.log(response);
            // レスポンスのデータ部分をJSONオブジェクトに変換する
            let json_object = response.XXXXXXXX;
            // JSONオブジェクトをリターンして関数終了
            return json_object;
        })
        .then(function (jsonData) {
            // リターンされたJSONオブジェクトを関数に引き渡す
            show_dvds(XXXXXXXX);
        })
        .catch(function (error) {
            // エラーがあったらキャッチしてコンソールにエラーメッセージを表示
            console.error('エラー:', error);
        })
};

// JSONオブジェクトデータを受け取ってDVDリストを表示する関数
let show_dvds = function (data) {
    // JSONオブジェクトデータを画面下部 idの値がresの要素に表示する関数をよびだす
    XXXXXXXX
    // idがresの要素にDVD数を追記
    document.getElementById('res').innerHTML += ('<br>DVD数：' + data.XXXXXXXX.XXXXXXXX);

    // idがdvdlist_areaの要素を取得
    let dvdlist_area = document.getElementById(XXXXXXXX);
    // DVDリスト表示エリアを初期化
    let max = data.data_array.length;
    // DVDリスト表示エリアにDVD情報をDVDの分だけ繰り返して表示
    for (let i = 0; i < max; i++) {
        // DVD情報表示用の行のdivを作成
        let user_row = document.createElement(XXXXXXXX);
        // DVD情報表示用の行のdivにクラスとIDをセット
        user_row.XXXXXXXX(XXXXXXXX, 'row');
        user_row.XXXXXXXX(XXXXXXXX, 'user_num_count' + user_num_count++);

        // DVD情報表示用の行のdivに商品idを表示するdivを作成
        let dvd_id_col = document.createElement(XXXXXXXX);
        // DVD情報表示用の行のdivに商品idを表示するdivにクラスとスタイルをセット
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'col col-3 border border-primary border-2 mt-2');
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'font-size: 0.75rem; font-weight: bold; color: black; background-color: lightgray;');
        // DVD情報表示用の行のdivに商品idを表示するdivに商品idを表示
        dvd_id_col.innerHTML = "id: " + data.data_array[i].XXXXXXXX;


        // DVD情報表示用の行のdivにタイトルを表示するdivを作成
        let title_col = document.createElement(XXXXXXXX);
        // DVD情報表示用の行のdivにタイトルを表示するdivにクラスとスタイルをセット
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'col col-3 border border-primary border-2 mt-2');
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'font-size: 0.75rem; font-weight: bold; color: black; background-color: lightgray;');
        // DVD情報表示用の行のdivにタイトルを表示するdivにタイトルを表示
        title_col.innerHTML = "title: " + data.data_array[i].XXXXXXXX;

        // DVD情報表示用の行のdivに価格を表示するdivを作成
        let price_col = document.createElement(XXXXXXXX);
        // DVD情報表示用の行のdivに価格を表示するdivにクラスとスタイルをセット
        XXXXXXXX.XXXXXXXX('class', 'col col-3 border border-success border-2 mt-2');
        XXXXXXXX.XXXXXXXX('style', 'font-size: 0.75rem; font-weight: bold; color: black; background-color: lightgray;');
        // DVD情報表示用の行のdivに価格を表示するdivに価格を表示
        price_col.innerHTML = "price: " + data.data_array[i].XXXXXXXX;
        // DVD情報表示用の行のdivにタイトルを表示するdivと価格を表示するdivを子要素として追加
        user_row.appendChild(XXXXXXXX);
        user_row.appendChild(XXXXXXXX);
        user_row.appendChild(XXXXXXXX);
        // DVDリスト表示エリアにDVD情報表示用の行のdivを子要素として追加
        dvdlist_area.appendChild(XXXXXXXX);
    }
}

// JSONオブジェクトデータを受け取って丸ごと文字列化してidがresの要素に表示する関数
let show_log = function (data) {
    document.getElementById('res').innerHTML = JSON.stringify(data);
}

// DVD情報取得をhttpsPOSTリクエストで行う関数
let get_dvd_info = function () {
    // HTML入力フォームと同じ形式のFormDataオブジェクトを生成
    const formData = new XXXXXXXX();
    // idがmailの要素のvalueの値を取得
    const dvd_id = document.getElementById('dvd_id').value;
    // FormDataオブジェクトに商品IDのキーと値をセット
    XXXXXXXX.append('dvd_id', XXXXXXXX);
    // fetchでPOSTリクエストを送信
    fetch('https://masatokg.watson.jp/FrontEnd2024E/FrontEnd2024E27/php/getDVDInfo.php', {
        // POSTリクエストを指定
        method: XXXXXXXX,
        headers: {
            // ヘッダーにContent-Typeを指定
            XXXXXXXX: 'application/x-www-form-urlencoded'
        },
        // bodyにFormDataオブジェクトを文字列化（シリアル化）してセット
        body: new URLSearchParams(formData).toString()
    })
        .then(function (response) {
            // console.log(response);
            // レスポンスのデータ部分をJSONオブジェクトに変換する
            let json_object = response.XXXXXXXX;
            // JSONオブジェクトをリターンして関数終了
            return XXXXXXXX;
        })
        .then(function (jsonData) {
            // 関数が無事に終了したら、処理を続ける
            // 情報取得結果を表示する関数にJSONオブジェクトを引き渡す
            XXXXXXXX(jsonData);
        })
        .catch(function (error) {
            // エラーがあったらキャッチしてコンソールにエラーメッセージを表示
            console.error('エラー:', error);
        })
};

//JSONデータを引数に受け取ってDOM操作を行う関数を作成
let show_dvd_info = function (data) {
    // JSON文字列データをコンソールに表示
    show_log(data);
    // idがinfo_resultの要素を取得
    let info_result = document.getElementById('info_result');
    // 情報取得結果表示エリアのスタイルを設定
    info_result.setAttribute(XXXXXXXX, 'font-size: 0.75rem; font-weight: bold; color: red;');
    // 情報取得結果表示エリアを初期化
    info_result.innerHTML = '';
    // JSONのresultキーの値がtrueなら、情報取得結果表示エリアに情報取得結果メッセージを表示
    if (data.XXXXXXXX) {
        // DVD情報表示用の行のdivを作成
        let dvd_info_row = document.createElement(XXXXXXXX);
        // DVD情報表示用の行のdivにクラスとIDをセット
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'row');
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'login_user');

        // DVD情報表示用の行のdivにタイトルを表示するdivを作成
        let title_col = document.createElement(XXXXXXXX);
        // DVD情報表示用の行のdivにタイトルを表示するdivにクラスとスタイルをセット
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'col col-4 border border-primary border-2 m-2');
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'font-size: 0.75rem; font-weight: bold; color: black; background-color: lightgray;');
        // DVD情報表示用の行のdivにタイトルを表示するdivにタイトルを表示
        title_col.innerHTML = "title: " + data.data_array[0].XXXXXXXX;

        // DVD情報表示用の行のdivに価格を表示するdivを作成
        let price_col = document.createElement('div');
        // DVD情報表示用の行のdivに価格を表示するdivにクラスとスタイルをセット
        XXXXXXXX.XXXXXXXX('class', 'col col-4 border border-success border-2 m-2');
        XXXXXXXX.XXXXXXXX('style', 'font-size: 0.75rem; font-weight: bold; color: black; background-color: lightgray;');
        // DVD情報表示用の行のdivに価格を表示するdivに価格を表示
        price_col.innerHTML = "price: " + data.data_array[0].XXXXXXXX;


        // DVD情報表示用の行のdivを作成
        let dvd_img_row = document.createElement(XXXXXXXX);
        // DVD情報表示用の行のdivにクラスとIDをセット
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'row');
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'login_user');

        // DVD情報表示用の行のdivに画像を表示するdivを作成
        let img_col = document.createElement(XXXXXXXX);
        // DVD情報表示用の行のdivに画像を表示するdivにクラスをセット
        XXXXXXXX.XXXXXXXX(XXXXXXXX, 'col ');
        // DVD情報表示用の行のdivに画像を表示するdivに画像を表示
        XXXXXXXX.innerHTML = "<img src = ./img/" + data.data_array[0].image + " height='200rem'>";


        // DVD情報表示用の行のdivにタイトルを表示するdivと価格を表示するdivを子要素として追加
        XXXXXXXX.appendChild(XXXXXXXX);
        XXXXXXXX.appendChild(XXXXXXXX);
        // DVD画像表示用の行のdivに画像を表示するdivを子要素として追加
        XXXXXXXX.appendChild(XXXXXXXX);

        // 情報取得結果表示エリアにDVD情報表示用の行のdivを子要素として追加
        info_result.appendChild(dvd_info_row);
        // 情報取得結果表示エリアに画像表示用の行のdivを子要素として追加
        info_result.appendChild(dvd_img_row);
    }
    // 情報取得結果表示エリアにレスポンスのJSONデータのmessageキーの値を追記
    info_result.innerHTML += ('<br>' + data.message);

}

// ページ読み込み時に実行
window.onload = function () {

    // idがbtn_dvd_listの要素を取得
    let btn_dvd_list = document.getElementById(XXXXXXXX);
    // DVDリスト表示ボタンのスタイルを設定
    btn_dvd_list.style.color = 'yellow';
    btn_dvd_list.style.fontSize = '1.5rem';
    btn_dvd_list.style.fontWeight = 'bold';
    // DVDリスト表示ボタンのclickイベントに処理を紐づける
    // （処理：文字色を青に変更してDVDリスト取得関数get_dvd_listを実行）
    btn_dvd_list.addEventListener(XXXXXXXX, () => {
        btn_dvd_list.style.color = 'orange'; XXXXXXXX;
    });

    // idがbtn_dvd_infoの要素を取得
    let btn_dvd_info = document.getElementById(XXXXXXXX);
    // DVD情報取得ボタンのスタイルを設定
    btn_dvd_info.style.color = 'yellow';
    btn_dvd_info.style.fontSize = '1.5rem';
    btn_dvd_info.style.fontWeight = 'bold';
    // DVD情報取得ボタンのclickイベントに処理を紐づける
    // （処理：文字色を青に変更してDVD情報取得表示関数を実行）
    btn_dvd_info.addEventListener(XXXXXXXX, () => {
        btn_dvd_info.style.color = 'orange'; XXXXXXXX;
    });

}