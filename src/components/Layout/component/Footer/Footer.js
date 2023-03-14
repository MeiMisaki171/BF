import './Footer.scss'
import fbIcon from '../../../../assets/image/logo/j.png'
import logo2 from '../../../../assets/image/logo/logo2.svg'

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
                  <a href='https://www.instagram.com/grabfoodvietnam/' className='socialIcon' target={'_blank'} rel='noreferrer noopener'>a</a>
                  <a href='https://twitter.com/grabvn' className='socialIcon' target={'_blank'} rel='noreferrer noopener'>a</a>
                </div>
              </div>
            </div>
          </div>
          <div className='divider afterLink'></div>
          <div className='ant-row-flex'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer