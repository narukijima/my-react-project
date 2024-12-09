import React from 'react'
import { Music, DollarSign, Zap, Sparkles, Lock, User, Youtube, TrendingUp, FileVideo, Instagram } from 'lucide-react'

function LandingPage() {
  const mainUrl = "https://www.tunecore.co.jp/creators?keyword=%E9%9D%A9%E5%91%BD%E3%82%B9%E3%83%9F%E3%83%B3&fbclid=PAZXh0bgNhZW0CMTEAAaarxQEi_yKNkAIsQjwLQMJWKm9sQ5aD7RY9t0BPK4KNr-OBjTBpVaydo98_aem_NWqpk4l5qY8OjrmHz9tA4g"

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">
            ショート動画用BGMを<br />
            完全無料で使い放題
          </h1>
          <p className="text-xl mb-8">
            申請不要・クレジット表記不要・即ダウンロードOK<br />
            TikTok・Shorts・Reelsでバズり率アップ
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-bold">1,000+</div>
              <div>クリエイター 利用実績</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-bold">20+</div>
              <div>音源 提供中</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl font-bold">0円</div>
              <div>音源 無料で使い放題</div>
            </div>
          </div>
          
          <a href={mainUrl} className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors">
            👉 無料BGMを今すぐ使う
          </a>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            <Music className="w-8 h-8 text-blue-600" />
            トレンド入りBGM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: 'トリビアBGM',
                embedCode: <iframe width="560" height="315" src="https://www.youtube.com/embed/XfAtyvYZLmU?si=o1kuWGfp1ilGCPpA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              },
              { 
                title: '秘密の事件簿',
                embedCode: <iframe width="560" height="315" src="https://www.youtube.com/embed/7I8dNMeD_Rc?si=2WYPusdOSI16Fcl1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              },
              { 
                title: 'おてんば娘',
                embedCode: <iframe width="560" height="315" src="https://www.youtube.com/embed/nSlzrJ-vx3E?si=i9K9Pewtch7eRpXY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              }
            ].map((bgm, index) => (
              <div key={index} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-4">{bgm.title}</h3>
                  {bgm.embedCode}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            なぜクリエイターに<br />
            選ばれているのか？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <DollarSign className="w-8 h-8 text-blue-500" />, title: '完全無料', text: '登録料・利用料・ロイヤリティなし。一切のコストをかけずに利用可能！' },
              { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: '即時利用可能', text: 'アカウント登録や審査は不要。見つけた瞬間から使えます。' },
              { icon: <Sparkles className="w-8 h-8 text-purple-500" />, title: '商用利用OK', text: '個人・法人問わず、収益化された動画でも使用可能です。' },
              { icon: <Music className="w-8 h-8 text-green-500" />, title: '豊富な音源', text: '20曲以上の楽曲、トレンドを捉えた新曲を毎週追加。' },
              { icon: <Lock className="w-8 h-8 text-red-500" />, title: '著作権対策済み', text: '主要プラットフォームで認証済み。安心してご利用いただけます。' }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  {feature.icon}
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
            バズり事例
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">トリビア動物園さん</h3>
              <p className="text-xl text-blue-600">総再生回数3億再生突破</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
                  <Youtube className="w-6 h-6" />
                  YouTube
                </div>
                <p className="text-blue-600 font-bold">2億再生突破</p>
                <p>登録者10万人超え</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
                  <FileVideo className="w-6 h-6" />
                  TikTok
                </div>
                <p className="text-blue-600 font-bold">5000万回再生突破</p>
                <p>フォロワー7万人超え</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
                  <Instagram className="w-6 h-6" />
                  Instagram
                </div>
                <p className="text-blue-600 font-bold">5000万回再生突破</p>
                <p>フォロワー3万人超え</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            10,000人以上の<br />
            クリエイターが使用中！
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'まなぶさん',
                followers: '総フォロワー20万人超',
                comment: '音源を使って動画がバズりました。再生数がぐんと伸びて本当に感謝しています！'
              },
              { 
                name: 'みぃーさん',
                followers: '総フォロワー14万人超',
                comment: 'フォロワーさんからの評判も良くて、視聴者さんとの一体感が生まれています！'
              },
              { 
                name: 'たいちさん',
                followers: '総フォロワー7万人超',
                comment: '最近は毎日使ってます。無料なのにクオリティが高くて本当に助かっています！'
              }
            ].map((user, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <User className="w-12 h-12 text-gray-400" />
                  <div className="ml-3">
                    <h4 className="text-lg font-bold">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.followers}</p>
                  </div>
                </div>
                <p>「{user.comment}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">フリーBGM一覧</h3>
              <p className="mb-4 text-gray-300">
                配信中の音源はこちらからご確認いただけます。<br />
                各SNSのショート動画(YouTube Shorts, TikTok, Instagram, Facebook)で使用可能。
              </p>
              <a 
                href="https://www.tunecore.co.jp/artists/kakumei-sumin"
                className="text-blue-400 hover:text-blue-300"
              >
                BGM一覧はこちら
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">利用規約</h3>
              <ul className="space-y-3 text-gray-300">
                <li>・ショート動画での使用に限り、商用・個人・法人問わず完全無料</li>
                <li>・著作権は放棄していません</li>
                <li>・YouTube通常動画で使用する場合は、TuneCoreクリエイターズ機能で収益分配を行ってください</li>
              </ul>
              <div className="mt-6 flex flex-col space-y-2">
                <a 
                  href="https://mirror.xyz/0x50d602B586B28cb2e18D949B14Ce1466E1A40335/TM6qRCXaSK4oICicxe7zCMRffOFt83iPCqKk_WuFZUU?fbclid=PAZXh0bgNhZW0CMTEAAaarxQEi_yKNkAIsQjwLQMJWKm9sQ5aD7RY9t0BPK4KNr-OBjTBpVaydo98_aem_NWqpk4l5qY8OjrmHz9tA4g" 
                  className="text-blue-400 hover:text-blue-300"
                >
                  利用規約の詳細はこちら
                </a>
                <a 
                  href={mainUrl}
                  className="text-blue-400 hover:text-blue-300"
                >
                  TuneCoreクリエイターズはこちら
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2024 革命スミン. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage