import React from 'react';

const Map = () => {
  return (
    <div
      className="bg-primaryBg/80 w-full p-[5%] flex flex-col items-center justify-center"
      id="map"
    >
      <h1 className="border-b border-solid border-b-primary text-[32px] text-primary text-center sm:text-[36px] md:text-[48px]">
        Map
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6322208557785!2d121.55894440000002!3d25.0804516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac0d59a75451%3A0x7e2c2b5bac7425bb!2z5Y-w5YyX6JCs6LGqIEdhcmRlbiBWaWxsYQ!5e0!3m2!1szh-TW!2stw!4v1687771819101!5m2!1szh-TW!2stw"
        title="google map"
        className="w-[75vw] mt-[5%] border-0 h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-col mt-[5%] w-[75vw]">
        <div className="mb-8">
          <h5 className="text-primary text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-4">
            搭乘公車
          </h5>
          <p className="text-black/60">
            請搭乘下列公車至「
            <span className="text-mapContent font-bold">大直美堤花園一站</span>
            」下車：
            <br />
            <span className="text-mapSubtitle font-bold">
              268、645、645副線、棕20、紅3、紅3(區間車)、綠16、藍26
            </span>
          </p>
        </div>
        <div className="mb-8">
          <h5 className="text-primary text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-3">
            搭乘捷運
          </h5>
          <h5 className="text-primary text-[14px] sm:text-[16px] md:text-[18px] font-semibold mb-3">
            捷運 → 公車
          </h5>
          <p className="text-black/60">
            <span className="text-mapSubtitle font-bold">● </span>
            搭乘捷運文湖線至「
            <span className="text-mapContent font-bold">劍南路站</span>
            」，由2號出口出站，轉搭公車「
            <span className="text-mapSubtitle font-bold">紅3(區間車)</span>
            」至「
            <span className="text-mapContent font-bold">大直美堤花園一站</span>
            」下車
          </p>
          <h5 className="text-primary text-[14px] sm:text-[16px] md:text-[18px] font-semibold mt-5 mb-3">
            捷運 → 步行
          </h5>
          <p className="text-black/60">
            <span className="text-mapSubtitle font-bold">● </span>
            搭乘捷運文湖線至「
            <span className="text-mapContent font-bold">劍南路站</span>
            」，由3號出口沿北安路步行，行經敬業四路右轉，路程步行約9分鐘即可抵達
          </p>
        </div>
        <div>
          <h5 className="text-primary text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-4">
            自行開車前往
          </h5>
          <h5 className="text-primary text-[14px] sm:text-[16px] md:text-[18px] font-semibold mb-3">
            開車路線
          </h5>
          <p className="text-black/60">
            <span className="text-mapSubtitle font-bold">● </span>
            國道一號 → 圓山交流道下 → 濱江街 → 上大直橋即靠右行駛 → 明水路 /
            樂群一路 → 敬業三路 → 樂群二路 → 敬業四路 即可抵達
          </p>
          <h5 className="text-primary text-[14px] sm:text-[16px] md:text-[18px] font-semibold mt-5 mb-3">
            停車資訊
          </h5>
          <p className="text-black/60">
            <span className="text-mapSubtitle font-bold">● </span>
            萬豪酒店停車場 (免費)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
