import x from '../../assets/x.svg'
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__copyright'>
        <p className='footer_copyright__text'>© 2023 - Stefania Verónica Bruera</p>
      </div>
      <div className='footer__social'>
        <ul>
          <li>
            <a
              href='https://twitter.com/stefifm'
              className='x-twitter'>
              <img
                src={x}
                alt=''
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/stefania-bruera/'
              className='linkedin'>
              <img
                src={linkedin}
                alt=''
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/bruerastefania/'
              className='instagram'>
              <img
                src={instagram}
                alt=''
              />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/stefifm'
              className='github'>
              <img
                src={github}
                alt=''
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
