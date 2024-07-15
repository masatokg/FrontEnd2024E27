<?php
// JSON文字列形式に変換する予定の連想配列
$result = array();
// $resultの子供要素として追加する予定の連想配列
$data_array = array();

// $resultの子供要素として追加する連想配列の中身を定義
$data_array = [
    "mail" => $_POST['mail'],
    "name" => "",
];
// $resultの中身を定義(子要素として$data_arrayを持つ)
$result = [
    "result" => false,
    "message" => "ユーザーリスト取得失敗",
    "usercount" => $stmt->rowCount(),
    "data_array" => $data_array
];

// 連想配列オブジェクトをPHPでJSON文字列形式に変換関数
echo json_encode($result);
