import { ColorBurn } from "./color-burn";
import { ColorDodge } from "./color-dodge";
import { Darken } from "./darken";
import { HardLight } from "./hard-light";
import { Lighten } from "./lighten";
import { Multiply } from "./multiply";
import { Normal } from "./normal";
import { Overlay } from "./overlay";
import { Screen } from "./screen";

/**
 * https://developer.mozilla.org/ja/docs/Web/CSS/mix-blend-mode
 * https://ja.wikipedia.org/wiki/%E3%83%96%E3%83%AC%E3%83%B3%E3%83%89%E3%83%A2%E3%83%BC%E3%83%89
 */
export const examples = {
  normal: Normal,
  /**
   * 元の画像よりも必ず暗くなる。 (値域が0~1のため)
   */
  multiply: Multiply,
  /**
   * 画像が明るくなる。(反転させて計算するから)
   */
  screen: Screen,

  /**
   * 基本的には、下のレイヤーが明るかった場合はさらに明るくなり、下のレイヤーが暗かった場合はさらに暗くなるように働く。
   * つまり、コントラストが強くなる。
   * 同一の画像をオーバーレイした場合、「トーンカーブ」ダイアログで
   * 「Sカーブ」状に編集した時のようなコントラスト効果が得られる。
   */
  overlay: Overlay,

  /**
   * Darken Only
   * 値が小さいほうだけを表示する。
   */
  darken: Darken,

  /**
   * Lighten Only
   * 値が小さいほうだけを表示する。
   */
  lighten: Lighten,
  /**
   * 下手に使わない方が良い。
   * クリッピングが起きない程度に「覆い焼きカラー」をかけた場合、コントラストを増加させる効果を及ぼす。
   */
  "color-dodge": ColorDodge,
  /**
   * 下手に使わない方が良い
   */
  "color-burn": ColorBurn,
  /**
   * オーバーレイとハードライトは逆の関係性を持っており、相互に切り替え可能なブレンド方式である
   */
  "hard-light": HardLight,

  /**
   * ソフトライトの実装方式は、いろいろある。
   * 2012年時点でのGIMPで採用されているソフトライトの実装は、オーバーレイと全く同じ効果が得られるが、これは単なるバグである。
   */
  "soft-light": HardLight,

  /**
   * 絶対値を取っているため、下のレイヤーと上のレイヤーを入れ替えても同じ結果となる。
   * このブレンドモードは「差分アリ」の画像を扱う際に便利である。ほとんど同じだが微妙に違う、と言う2枚のコンテンツを「差の絶対値」でブレンドすることで、どこがどう違うのか確認できる。
   */
  difference: HardLight,

  /**
   * ?????
   */
  exclusion: HardLight,
  /**
   * 下のレイヤーの輝度と彩度はそのままで、上のレイヤーの色相で上書きされる。
   */
  hue: HardLight,
  /**
   * 下のレイヤーの輝度と色相はそのままで、上のレイヤーの彩度で上書きされる。
   */
  saturation: HardLight,
  /**
   * 下のレイヤーの輝度はそのままで、上のレイヤーの色相と彩度で上書きされる
   */
  color: HardLight,
  /**
   * 下のレイヤーの色相と彩度はそのままで、上のレイヤーの輝度で上書きされる。
   */
  luminosity: HardLight,
};
