
import React from 'react'
import SubTitle from '../common/SubTitle';
import Container from '../common/Container';

const timeLineItem = [
    {
        id: '1',
        year: '1988',
        title: 'I was born in Yamagata City.',
        jpTitle: '山形市で生まれる',
        description: '幼少期から体を動かすことが大好きでバスケットボールクラブに所属していました。'
    },
    {
        id: '2',
        year: '2002',
        title: 'Start skateboarding.',
        jpTitle: 'スケートボードを始める',
        description: '勉強もろくにせず朝から晩までスケートボードに没頭し、毎日親に怒られる日々を過ごしました。'
    },
    {
        id: '3',
        year: '2006',
        title: 'Entering society as a working adult.',
        jpTitle: '社会人として働き始める',
        description: '働きながらも継続してスケートボードに取り組み、充実した日々を過ごしました。'
    },
    {
        id: '4',
        year: '2018',
        title: 'Get married.',
        jpTitle: '結婚',
        description: '結婚と同時に部署のチームリーダーに就任し、責任のある立場となりました。'
    },
    {
        id: '5',
        year: '2019',
        title: 'A child is born.',
        jpTitle: '子どもが生まれる',
        description: '子育てや時間的な都合により自然とスケートボードから遠ざかりました。'
    },
    {
        id: '6',
        year: '2023',
        title: 'Became aware of IT literacy gap.',
        jpTitle: 'ITリテラシーの低さに危機感を抱く',
        description: '仕事をする中で自分のITスキルの不足に気づき、まずはExcelやwordの基本的な操作から勉強を始めました。'
    },
    {
        id: '7',
        year: '2024',
        title: 'Discovered Programming.',
        jpTitle: 'プログラミングとの出会い',
        description: ' HTMLやCSS、JavaScriptに興味を持ち学習を始め、Webで何かを作る楽しさを知りました。'
    },
];

const TimeLine = () => {
    return (
        <Container>
            <SubTitle text='TimeLine' />
            <div className='border-l-2 border-gray-200 pl-6 space-y-8'>
                {timeLineItem.map((item) => (
                    <div
                        key={item.id}
                        className='border-b-2 p-4 border-gray-200'
                    >
                        <span className='text-gray-400 text-lg'>{item.year}</span>
                        <h3
                            className='text-xl md:text-3xl font-bold'>{item.title}</h3>
                        <span className='text-gray-400 text-xs'>{item.jpTitle}</span>
                        <p className='mt-2'>{item.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default TimeLine;