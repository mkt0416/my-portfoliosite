
'use client'
import { useState } from "react";
import Container from "../common/Container";
import WinAppTableItem from "./WinAppTableItem";
import WinModal from "./WinModal";
import { AnimatePresence } from "framer-motion";

const winAppData = [
    {
        id: '1',
        title: 'Fotune Telling',
        description: 'Randomクラスを使って、毎回ランダムに占い結果を表示するシンプルなアプリです。',
        link: 'https://github.com/mkt0416/Fotune-Telling/releases/tag/v1.0',
        image: '/images/Fotune Telling.png',
        learning: [
            'Randomクラスを利用してランダムな数値を生成する方法',
            'WindowsフォームでのUI要素（TextBox Label Button）の操作方法',
            'ユーザー操作に応じたイベント処理（ボタンのクリックイベント）',
            '配列やリストの繰り返し処理（for）を使ったデータ操作',
        ]
    },
    {
        id: '2',
        title: 'Guess the number',
        description: 'ランダムな数字をヒントを頼りに当てるシンプルゲーム。範囲と回数は自由設定！',
        link: 'https://github.com/mkt0416/Fotune-Telling/releases/tag/v1.0',
        image: '/images/Guess the number.png',
        learning: [
            'Randomクラスを利用してランダムな数値を生成する方法',
            'private/publicのスコープを適切に使い分け、クラス内部の状態管理と外部からのアクセス制御を実装',
            'WindowsフォームでのUI要素（NumericUpDown や TextBox）の操作方法',
            'フラグ変数（GameEnd）によるゲーム進行の制御',
        ],
    },
    {
        id: '3',
        title: 'Calculator',
        description: '四則演算（加算、減算、乗算、除算）ができるシンプルな電卓アプリです。',
        link: 'https://github.com/mkt0416/Calculator/releases/tag/v1.0',
        image: '/images/Calculator.png',
        learning: [
            'Windowsフォームでのボタンイベント処理と表示更新',
            'Decimal型による精度の高い数値計算の実装',
            '四則演算処理を共通メソッド（Calculation）で管理',
            'Math.Roundを利用した小数点の丸め処理',
            'フラグ変数による入力状態の制御（新規入力と連続計算の区別）',
            'エラー処理（例外発生時のメッセージ表示と状態リセット）',
        ],
    },
    {
        id: '4',
        title: 'NotePad',
        description: '新規作成、読み込み、保存機能をもったシンプルなメモ帳アプリです。',
        link: 'https://github.com/mkt0416/NotePad/releases/tag/v1.0',
        image: '/images/NotePad.png',
        learning: [
            'TextBox.Modified プロパティを使った編集状態の検知と変更フラグ管理',
            'ファイル操作前の保存確認ダイアログ（MessageBox.Show）の実装',
            'OpenFileDialog / SaveFileDialog を使ったファイルの読み込み・保存処理',
            'StreamReader / StreamWriter によるテキストファイルの入出力',
            'フォーム終了時（FormClosing イベント）に処理中断や保存確認を行う仕組み'
        ],
    },
    {
        id: '5',
        title: 'PasswordManager',
        description: '日々のさまざまなサービスで使用するパスワード情報を安全かつ簡単に管理できる、シンプルなWindows向けパスワード管理ツールです。新規登録はもちろん、既存パスワードの編集や削除にも対応しております。',
        link: 'https://github.com/mkt0416/PasswordManager/releases/tag/v1.0',
        image: '/images/PasswordManager.png',
        learning: [
            'List<T> やコレクションを使ったデータ管理とカテゴリ別フィルタリング',
            'Windowsフォームでの複数入力フォームとリスト表示の連動',
            'コンボボックスやリストボックスの動的更新処理',
            '編集モードと閲覧モードの切り替え（ReadOnly / Enabled の制御）',
            'メソッド分割による処理の再利用性向上',
            'XmlSerializer を用いたXML形式でのデータ保存・読み込み',
        ],
    },
];

export type winAppDataType = {
    id: string;
    title: string;
    description: string;
    link: string;
    image: string;
    learning: string[];
}[];

export type WinModalType = {
    title: string;
    image: string;
    learning: string[];
};

const WinAppTableList = () => {
    const [modalData, setModalData] = useState<WinModalType | null>(null);

    return (
        <Container>
            <h1 className="text-xl md:text-3xl font-extrabold mb-4">Wiondows App Downloader</h1>
            <p>リンクをクリックして、ダウンロードページをご覧ください。</p>
            <div className="overflow-x-auto mt-10">
                <WinAppTableItem
                    winAppData={winAppData}
                    setModalData={setModalData}
                />
            </div>
            <AnimatePresence>
                <WinModal
                    modalData={modalData}
                    onclose={() => setModalData(null)}
                />
            </AnimatePresence>
        </Container>
    );
};

export default WinAppTableList;