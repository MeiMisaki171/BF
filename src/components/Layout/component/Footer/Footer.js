import './Footer.scss'
import logo2 from '../../../../assets/image/logo/logo2.svg'
import fbIcon from '../../../../assets/image/icons/fb.png'
import igIcon from '../../../../assets/image/icons/igIcon.png'
import twIcon from '../../../../assets/image/icons/twIcon.png'
import appstore from '../../../../assets/image/icons/appStoreIcon.svg'
import chplay from '../../../../assets/image/icons/ggPlayIcon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sectionContainer__wrapper'>
        <div className='sectionContainer__footer'>
          <div className='rowLogo'>
            <div className='ant-row-flex ant-row-flex-middle'>
              <div style={{ flex: "1 1 0%", width: "1px" }}>
                <a href='/'>
                  <img src={logo2} alt='sd' className='logo2'></img>
                </a>
              </div>
            </div>
          </div>
          <div className='divider afterLogo'></div>
          <div className='footer-layout'>
            <div className='ant-row-flex links'>
              <div className='antCol-24 antCollg-6'>
                <div className='link'>
                  <a href='https://www.grab.com/vn/food/'>Về GrabFood</a>
                </div>
                <div className='link'>
                  <a href='https://www.grab.com/vn/food/'>Về Grab</a>
                </div>
                <div className='link'>
                  <a href='https://www.grab.com/vn/food-blog/'>Blog</a>
                </div>
              </div>
              <div className='antCol-24 antCollg-6'>
                <div className='link'>
                  <a href='https://www.grab.com/vn/merchant/food/'>Mở quán trên Grabfood</a>
                </div>
                <div className='link'>
                  <a href='https://www.grab.com/vn/driver/drive/'>Trở thành tài xế Grab</a>
                </div>
              </div>
              <div className='antCol-24 antCollg-6'>
                <div className='link'>
                  <a href='https://help.grab.com/passenger/en-vn/115002258448-GrabFood'>Trung tâm hỗ trợ</a>
                </div>
                <div className='link'>
                  <a href='https://help.grab.com/passenger/en-vn/115002258448-GrabFood'>Câu hỏi thường gặp</a>
                </div>
              </div>
              <div className='antCol-24 antCollg-6'>
                <div className='link'>
                  <a href='https://www.facebook.com/GrabVN/' className='socialIcon' target={'_blank'} rel='noreferrer noopener'>
                    <span className='iconFb'>
                      <img src={fbIcon} alt='sd' className='icons'></img>
                    </span>
                  </a>
                  <a href='https://www.instagram.com/grabfoodvietnam/' className='socialIcon' target={'_blank'} rel='noreferrer noopener'>
                    <span className='iconIg'>
                      <img src={igIcon} alt='sd' className='icons'></img>
                    </span>
                  </a>
                  <a href='https://twitter.com/grabvn' className='socialIcon' target={'_blank'} rel='noreferrer noopener'>
                    <span className='iconTw'>
                      <img src={twIcon} alt='sd' className='icons'></img>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='divider afterLink'></div>
          <div className='ant-row-flex'>
            <div className='antCol2-24 antColmd-24 antCollg-12'>
              <div className='appstore_1'>
                <a href='https://apps.apple.com/app/id647268330?af_prt=food.grab.com&c=direct&is_retargeting=true&l=vi&pid=other_websites' target={'_blank'} rel='noreferrer noopener' className='storeDeepLink1'>
                  <img src={appstore} alt='sd'></img>
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=vi_VN&pid=other_websites&c=direct&is_retargeting=true&af_prt=food.grab.com&pli=1' target={'_blank'} rel='noreferrer noopener' className='storeDeepLink'>
                  <img src={chplay} alt='sd'></img>
                </a>
              </div>
            </div>
            <div className='antCol2-24 antColmd-24 antCollg-12'>
              <div className='term'>
                <div className='term-items'>© 2023 Grab</div>
                <div className='term-item'>
                  <a href="https://www.grab.com/vn/terms/" target="_blank" rel="noreferrer noopener">Câu hỏi thường gặp</a>
                  <span className='dotss'>•</span>
                  <a href="https://www.grab.com/vn/privacy/" target="_blank" rel="noreferrer noopener">Chính sách bảo mật</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer