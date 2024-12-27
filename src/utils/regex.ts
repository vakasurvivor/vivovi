// 有効なurlかを確認するための正規表現
const OTHER_URL_PATTERN = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/i;

// 有効なYouTubeのurlかを確認し、さらにvideoIDを抽出するための正規表現
const YOUTUBE_URL_PATTERN =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/;

// 有効なX（旧Twitter）のurlかを確認するための正規表現
const X_URL_PATTERN =
  /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/([a-zA-Z0-9_]+)\/status\/([0-9]+)(\S*)?$/;

export { OTHER_URL_PATTERN, X_URL_PATTERN, YOUTUBE_URL_PATTERN };
