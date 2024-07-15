<?php
// ヘッダー情報の設定（ドメイン間通信のセキュリティ設定）
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header("Content-type: application/json; charset=UTF-8");

// DB接続情報
$db['user'] = "XXXXXXXXX";  // ユーザー名
$db['pass'] = "XXXXXXXXXX";  // ユーザー名のパスワード
$db['dbname'] = "XXXXXXXXXX";  // データベース名

// DB接続
$pdo = new PDO(
    'mysql:host=' . $db['host'] . ';dbname=' . $db['dbname'] . ';charset=utf8',
    $db['user'],
    $db['pass']
);

// レコード取得
$stmt = $pdo->prepare('SELECT * FROM dvd WHERE id = ? ');
$stmt->execute([$_POST['dvd_id']]);
// $stmt->execute(["1"]);

// レコード情報とメッセージをレスポンスの連想配列に格納
$result = array();
$data_array = array();
if ($stmt->rowCount() == 0) {
    $result = [
        "result" => false,
        "message" => "DVD情報取得失敗",
        "data_array" => $data_array
    ];
} else {
    foreach ($stmt as $row) {
        $data_array[] = [
            "id" => $row["id"],
            "title" => $row["title"],
            "price" => $row["price"],
            "image" => $row["image"],
        ];
    }
    $result = [
        "result" => true,
        "message" => "DVD情報取得成功",
        "data_array" => $data_array
    ];
}
// データベース接続を切断
$pdo = null;
echo json_encode($result);
