import React, { useEffect } from "react";

function AdSense() {
  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle;
        console.log({ adsbygoogle });
        adsbygoogle.push({});
      } catch (e) {
        console.error(e);
      }
    };

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd();
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    // <div style={{ backgroundColor: "red" }}>
    //   {/* <script
    //     async
    //     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6468318084768115"
    //     crossOrigin="anonymous"
    //   ></script> */}
    //   <ins
    //     className="adsbygoogle"
    //     style={{ display: "block", width: "100%", height: "100%" }}
    //     data-ad-client="ca-pub-6468318084768115"
    //     data-ad-slot="1077052955"
    //     data-ad-format="auto"
    //     data-full-width-responsive="true"
    //   ></ins>

    // </div>
    <div>
      {/* Google AdSense Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100px" }}
        data-ad-client="ca-pub-5506848456941351"
        data-ad-slot="1077052955"
        data-ad-format="auto"
      ></ins>
    </div>
  );
}

export default AdSense;
