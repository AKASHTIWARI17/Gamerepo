import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React, { useEffect ,momo } from 'react';
import styles from "@/styles/ad.moduke.css"
const Ads = () => {
  useEffect(() => {
     try{
      (window.adsbygoogle = window.adsbygoogle || []).push({});
     }
     catch(err){
     }
  }, []);

  return (
    <div className={styles.sidebarAd} style={{width:"100%"}}>
      <ins class="adsbygoogle"
      style={{display:"block",width:"100%",height:"100%"}}
      data-ad-client="ca-pub-9530500945466132"
      data-ad-slot="1364589222"
      data-ad-format="auto"
      data-full-width-responsive="true">
     </ins>
    </div>
  );
};

export default Ads;

