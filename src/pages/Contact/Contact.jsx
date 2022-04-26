import contactimg from '../../assets/contact.jpg'
import styles from './Contact.module.css'
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/base/TextareaAutosize'

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-4">
          <img src={contactimg} alt="contact img" />
        </div>
        <div className="row ">
          <div className="col-sm-6 col-md-6 col-lg-3 mb-1">
            <div className={styles.card}>
              <div className={styles.icon}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h4>Visit Our Office</h4>
              <p>123 Great street, Cairo, Egypt</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-1">
            <div className={styles.card}>
              <div className={styles.icon}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <h4>Let's Talk</h4>
              <p>
                <a href="tel:+2-011-5577-7775">+2-011-5577-7775</a>
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 mb-1">
            <div className={styles.card}>
              <div className={styles.icon}>
                <i className="fa fa-envelope"></i>
              </div>
              <h4>E-mail Us</h4>
              <p>
                <a href="mailto:life@gmail.com">life@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3  ">
            <div className={styles.card}>
              <div className={styles.icon}>
                <i className="fa-brands fa-facebook-f"></i>
              </div>
              <h4>facebook</h4>
              <p>
                <a href="https://www.facebook.com">Lifemedical</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* contact us */}
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 col-md-offset-3 text-center">
            <h2>Contact Us</h2>
          </div>
        </div>

        <div className="row justify-content-center container">
          <TextField
            className="col-sm-8 col-lg-5  mb-3 mx-3"
            label="Your name"
            variant="standard"
          />
          <TextField
            className="col-sm-8 col-lg-5 mb-3"
            label="Your Phone"
            variant="standard"
          />
          <TextField
            className="col-sm-8 col-lg-10 mb-3"
            label="Email"
            variant="standard"
            pattern="[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}"
          />
          
          <TextareaAutosize
            aria-label="Message"
            minRows={3}
            placeholder="Message"
            className="col-sm-8 col-lg-10 mb-3 mt-3"
          />

          <button type="submit" className="btn btn-primary col-5 mb-3">
            Send
          </button>
        </div>
      </div>
    </>
  )
}

export default Contact



