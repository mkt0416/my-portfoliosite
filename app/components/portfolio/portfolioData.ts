
export type Portfolio = {
    id: string;
    image: string;
    title: string;
    description: string;
    projectUrl: string;
    githubUrl: string;
    githubUrlBackend?: string;
};

export const portfolioData = [
    {
        id: "teamintroduction",
        image: "/images/portfolio/team-introduction.png",
        title: "team-introduction",
        description: "架空の企業チーム紹介をテーマにしたWebサイトです。Next.js、TypeScript、Tailwind CSSを使用し、開発の効率性と可読性を重視しています。アニメーションには Framer Motion と AOS を活用し、ユーザー体験を向上。お問い合わせフォームは EmailJS を用いて実装し、メール送信を可能にしました。また、コンポーネントの分割や設計にも工夫を加え、保守性と拡張性を意識した構成となっています。",
        projectUrl: "https://spteam-introduction.vercel.app/",
        githubUrl: "https://github.com/mkt0416/spteam-introduction",
    },
    {
        id: "ReactTodoApp",
        image: "/images/portfolio/React Todo App.png",
        title: "React Todo App",
        description: "ReactとCSSを用いて作成したシンプルなToDoリストアプリです。タスクは「@hello-pangea/dnd」ライブラリを活用し、ドラッグ＆ドロップで直感的に優先順位を変更可能です。また、タスクデータはローカルストレージに保存されるため、ページを再読み込みしても状態が保持されます。",
        projectUrl: "https://todo-nine-murex-29.vercel.app",
        githubUrl: "https://github.com/mkt0416/todo",
    },
    {
        id: "myportfoliosite",
        image: "/images/portfolio/my-portfoliosite.png",
        title: "my-portfoliosite",
        description: "Next.jsとTypescript、Tailwind CSSを用いて制作したポートフォリオサイトです。コンテンツ管理にはMicroCMSを導入し、ブログ機能を実装しています。また、EmailJSを用いたお問合せフォームも備えており、外部サービスとの連携によるメール送信機能も実現しました。デザインから機能面までをフルスタックで開発し、自身のスキルや成果物を発信できる構成としています。",
        projectUrl: "https://my-portfoliosite-two.vercel.app",
        githubUrl: "https://github.com/mkt0416/my-portfoliosite",
        githubUrlBackend: "https://github.com/mkt0416/my-portfoliosite-backend",
    },
    {
        id: "reacttsweatherapp",
        image: "/images/portfolio/react-weather-app.png",
        title: "react-ts-weather-app",
        description: "ReactとTypeScriptを用いて開発した、世界各地の気象情報を取得・表示するアプリです。WeatherAPIと連携してリアルタイムの天気データを取得し、JSONレスポンスを元に情報を表示します。TypeScriptによる型定義を活用し、型安全なコーディングやAPIレスポンスの取り扱いに関する理解を深めました。",
        projectUrl: "https://react-ts-weather-app-tau.vercel.app/",
        githubUrl: "https://github.com/mkt0416/react-ts-weather-app",
    },
    {
        id: "covidtrackerts",
        image: "/images/portfolio/covid-tracker-ts.png",
        title: "covid-tracker-ts",
        description: "ReactとTypeScriptを用いて開発した、世界各国の新型コロナウイルス感染状況を可視化するアプリです。外部APIと連携してリアルタイムの感染データを取得し、JSONレスポンスを元に各種情報を表示します。ルーティングには react-router-dom を使用し、ページ遷移の設計を実装。また、グローバルステートの管理には React Context を用い、状態管理の基礎を実践的に学びました。さらに、TypeScriptによる厳密な型定義を通じて、型安全なコーディングとAPIレスポンスの取り扱いに対する理解を深めています。",
        projectUrl: "https://covid-tracker-ts-nine.vercel.app/",
        githubUrl: "https://github.com/mkt0416/covid-tracker-ts.png",
    },
    {
        id: "Mealfinderts",
        image: "/images/portfolio/Meal-finder-ts.png",
        title: "Meal-finder-ts",
        description: "ReactとTypeScriptを用いて開発した、料理のレシピデータを取得・表示するWebアプリです。外部APIと連携してリアルタイムのレシピ情報を取得し、JSONレスポンスをもとに各種データを表示します。ルーティングには react-router-dom を使用し、ページ遷移を実装。また、グローバルステートの管理には React Context を採用し、状態管理の基礎を実践的に学びました。さらに、カスタムフックや条件付きレンダリングの実装を通して、再利用性の高いコンポーネント設計を意識した開発方法を学びました。TypeScriptによる厳密な型定義も取り入れ、型安全な開発とAPIレスポンスの扱いに対する理解を深めています。",
        projectUrl: "https://meal-finder-ts.vercel.app/",
        githubUrl: "https://github.com/mkt0416/meal-finder-ts",
    },
];