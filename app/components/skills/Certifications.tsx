
'use client'
import { useEffect, useState } from 'react';
import { ModalDataType } from './Skills';
import SubTitle from '../common/SubTitle';
import Container from '../common/Container';
import Modal from './Modal';
import 'aos/dist/aos.css';
import CertificationCard from './CertificationCard';
const AOS: any = require('aos');

const certItems = [
    {
        id: '1',
        title: '日商簿記３級',
        desc: '簿記の基本的な仕組みを理解し、仕訳や財務諸表の基礎知識を学びました。企業のお金の流れや経営数値に強くなりたいという思いから取得しました。',
    },
    {
        id: '2',
        title: 'FP3級',
        desc: 'ライフプラン設計、保険、資産運用などの基礎知識を学びました。お金に関する幅広い知識を身につけ、将来の生活設計にも役立てたいという思いから取得しました。'
    },
    {
        id: '3',
        title: 'ITパスポート',
        desc: 'T知識の不足を感じ、基礎から学習を始めました。ITの基礎知識やセキュリティ、ネットワーク、経営戦略など、幅広い分野の知識を学びました。'
    },
    {
        id: '4',
        title: 'Python3エンジニア認定基礎試験',
        desc: 'プログラミングとは何かを知るきっかけとして取り組みました。文法や制御構文、データ構造などの基本を学びました。'
    },
    {
        id: '5',
        title: 'Python3エンジニア認定データ分析試験',
        desc: 'NumPyやpandasなどを使ったデータ処理や分析手法についての知識を学びました。'
    },
    {
        id: '6',
        title: 'Webクリエーター能力検定試験',
        desc: 'Webとは何かを知るきっかけとして学習を始め、HTML/CSSを用いたWeb制作の基礎知識を身につけました。'
    },
    {
        id: '7',
        title: 'MOS各種',
        desc: 'WordやExcelなどMicrosoft Officeの操作スキルを学習し、実務でも役立てています。ITスキルの不足を感じ、自らの課題を克服するために取得しました。'
    },
    {
        id: '8',
        title: 'VBAエキスパート',
        desc: 'Officeソフトの学習を進める中でVBAの存在を知り、さらなる業務効率化を目指して習得しました。Excel VBAを活用し、仕事での効率化にも取り組んでいます。',
    },
];

const Certifications = () => {
    const [modalData, setModalData] = useState<ModalDataType | null>(null);

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'slide',
            once: true,
        });
    });

    return (
        <Container>
            <SubTitle
                text='Certifications'
                description='プログラミング学習に加えて、以下の資格についても勉強し取得しました。カードをクリックし詳細をご覧いただけます。'
            />
            <ul className='mt-10 space-y-6'>
                {certItems.map((item) => (
                    <CertificationCard
                        key={item.id}
                        item={item}
                        setModalData={setModalData}
                    />
                ))}
            </ul>
            <Modal
                modalData={modalData}
                onclose={() => setModalData(null)}
            />
        </Container>
    );
};

export default Certifications;