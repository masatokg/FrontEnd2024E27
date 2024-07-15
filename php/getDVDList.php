<?php
// ヘッダー情報の設定（ドメイン間通信のセキュリティ設定）
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header("Content-type: application/json; charset=UTF-8");
// DB接続情報

$db['host'] = "XXXXXXXXX";  // DBサーバのURL
$db['user'] = "XXXXXXXXX";  // ユーザー名
$db['pass'] = "XXXXXXXXXX";  // ユーザー名のパスワード
$db['dbname'] = "XXXXXXXXXX";  // データベース名
// DB接続
$pdo = new PDO(
    'mysql:host=' . $db['host'] . ';dbname=' . $db['dbname'] . ';charset=utf8',
    $db['user'],
    $db['pass']
);

// DVDリスト取得
$stmt = $pdo->query('SELECT * FROM dvd');
// レコード取得
$result = array();
$data_array = array();
if ($stmt->rowCount() == 0) {
    // Sdata_array  には何もしない
    $result = [
        "result" => false,
        "message" => "DVDリスト取得失敗",
        "usercount" => $stmt->rowCount(),
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
        "message" => "DVDリスト取得成功",
        "data_array" => $data_array
    ];
}
// データベース接続を切断
$pdo = null;
// オブジェクトをPHPでJSON文字列形式に変換関数
echo json_encode($result);
