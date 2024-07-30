import React from 'react';
import { BannerAdSize, BannerAd } from 'react-native-google-mobile-ads';

const adUnitId = 'ca-app-pub-9530500945466132/2115969089'; 

function Ads() {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      onAdLoaded={() => console.log('Ad loaded')}
      onAdFailedToLoad={(error) => console.error('Ad failed to load: ', error)}
    />
  );
}

export default Ads;
