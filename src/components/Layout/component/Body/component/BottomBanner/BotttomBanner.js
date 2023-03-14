import './BottomBanner.scss'

import bannerImg from '../../../../../../assets/image/icons/bottomBannerIcon.svg'
import bannerImg2 from '../../../../../../assets/image/icons/botomBannerIcon2.svg'
import appstore from '../../../../../../assets/image/icons/appStoreIcon.svg'
import chplay from '../../../../../../assets/image/icons/ggPlayIcon.svg'

const BottomBanner = () => {
  return (
      <div className='bottomBanner__wrapper'>
          <div className='bottomBanner'>
              <div className='antCol-24 antCol-12'>
                  <div className='restaurantContainer'>
                      <img className='bannerImg' src={bannerImg} alt='sd'></img>
                      <div className='bannerTitle'>Curated restaurants</div>
                      <div className='description'>From small bites to big meals, we won't limit your appetite. Go ahead and order all you want.</div>
                  </div>
              </div>
              <div className='antCol-24 antCol-12'>
                  <div className='downloadContainer'>
                      <img className='bannerImg' src={bannerImg2} alt='sd'></img>
                      <div className='bannerTitle'>More cool features available on the app</div>
                      <div className='description'>Download Grab app to use other payment methods and enjoy seamless communication with your driver.</div>
                      <div className='logoContainer'>
                          <a href='https://grab.onelink.me/2695613898?pid=www.google.com&c=non-paid&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&af_prt=food.grab.com&af_web_dp=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid647268330%3Fmt%3D8%26l%3Dvi' className='storeDeepLink'>
                              <img src={appstore} alt='sd'></img>
                          </a>
                          <a href='https://grab.onelink.me/2695613898?pid=www.google.com&c=non-paid&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3Dfood-grab-com%26sourceCampaignName%3DGF-WEB-VN-home-organic&af_prt=food.grab.com&af_web_dp=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.grabtaxi.passenger%26hl%3Dvi_VN' className='storeDeepLink'>
                              <img src={chplay} alt='sd'></img>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default BottomBanner