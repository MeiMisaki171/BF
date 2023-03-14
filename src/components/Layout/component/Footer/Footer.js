import './Footer.scss'

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
                <div className='link'></div>
              </div>
              <div className='antCol-24 antCollg-6'>
                <div className='link'></div>
                <div className='link'></div>
              </div>
              <div className='antCol-24 antCollg-6'>
                <div className='link'></div>
                <div className='link'></div>
              </div>
              <div className='antCol-24 antCollg-6'>
                <div className='link'></div>
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