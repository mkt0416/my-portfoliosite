
'use client'
import { useState } from "react";
import Container from "../common/Container";
import SubTitle from "../common/SubTitle";
import WinAppTableItem from "./WinAppTableItem";
import WinModal from "./WinModal";
import { AnimatePresence } from "framer-motion";

const winAppData = [
    {
        id: '1',
        title: 'NotePad',
        description: '新規作成、読み込み、保存機能をもったシンプルなメモ帳アプリです。',
        link: 'https://github.com/mkt0416/NotePad/releases/tag/v1.0',
        image: '/images/NotePad.png',
    },
    {
        id: '2',
        title: 'PasswordManager',
        description: '日々のさまざまなサービスで使用するパスワード情報を安全かつ簡単に管理できる、シンプルなWindows向けパスワード管理ツールです。新規登録はもちろん、既存パスワードの編集や削除にも対応しております。',
        link: 'https://github.com/mkt0416/PasswordManager/releases/tag/v1.0',
        image: '/images/PasswordManager.png',
    },
];

export type winAppDataType = {
    id: string;
    title: string;
    description: string;
    link: string;
    image: string;
}[];

export type WinModalType = {
    title: string;
    image: string;
};

const WinAppTableList = () => {
    const [modalData, setModalData] = useState<WinModalType | null>(null);

    return (
        <Container>
            <SubTitle text="App List" />
            <p className='mb-2'>
                Alongside web development, I’m also exploring Windows app development.
            </p>
            <span className='text-gray-400 text-xs'>
                Webと並行してWindowsアプリ開発にも挑戦中です。
            </span>
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