import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import makeCondolenceCall from '../../helper/network/make-api-condolonce';
import './css/style.css';
import './css/bootstrap.min.css';
import logo from './img/logo_rose_blue.jpg';

class Condolence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    const script = document.createElement('script');

    script.src = './js/jquery-3.2.1.slim.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.src = './js/jquery.validate.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.src = './js/popper.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.src = './js/bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';
    script.async = true;
    document.body.appendChild(script);

    // script.src = './js/common.js';
    // script.async = true;
    // document.body.appendChild(script);
  }

  submitData = async () => {
    const name = document.getElementById('input_name').value;
    const desc = document.getElementById('description').value;
    const prefix = ''; //document.getElementById('prefix').value;

    const res = await makeCondolenceCall(name, desc, prefix);

    if (res) {
      this.setState({ message: 'Message submitted ' });
    } else {
      this.setState({
        message:
          'Sorry. We would not submit your message at this time due to technical difficulty. Kindly re-submit your message.',
      });
    }
    document.getElementById('input_name').value = '';
    document.getElementById('description').value = '';
  };

  render() {
    const { message } = this.state;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const config = {
      file: {
        forceHLS: !isSafari,
        forceVideo: true,
        hlsVersion: '0.12.4',
        attributes: {
          disablePictureInPicture: true,
        },
      },
    };

    return (
      <>
        <div className='container custom_container'>
          <nav className='navbar navbar-expand-md '>
            {/* <div className='leftHeader'>
              <h2>In Loving Memory</h2>
              <p>
                <b>Shri. Arunkumar Ramniklal Mehta </b>
              </p>
              <p>(Jan 1940 - Jun 2020)</p>
            </div>
            <div className='RightHeader'>
              <img alt='' src={logo} />
            </div> */}
          </nav>

          <div className='feed_container'>
            <div className='feed_video'>
              <ReactPlayer
                id='video'
                url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
                controls
                config={config}
              />
            </div>

            <p className='formTitle'></p>
            <div className='submitForm'>
              <div id='SaveCondolenceMessage'>
                <div className='row'>
                  {/* <div className='col-2'>
                    <select name='prefix' className='form-control' id='prefix'>
                      <option value=''>Prefix</option>
                      <option key='Mr'>Mr.</option>
                      <option key='Ms'>Ms.</option>
                      <option key='Mrs'>Mrs.</option>
                    </select>
                  </div> */}
                  <div className='col-4'>
                    <input
                      type='text'
                      name='name'
                      id='input_name'
                      placeholder='Enter Your Name'
                      className='form-control'
                    />
                  </div>
                </div>

                <textarea
                  rows='8'
                  cols='6'
                  name='message'
                  size='5000'
                  id='description'
                  maxLength='5000'
                  className='form-control'
                  placeholder='Enter Your Message'
                ></textarea>

                <div className='row'>
                  <div className='col-6'>
                    <p className='text-left successMess'>{message}</p>
                  </div>
                  <div className='col-6'>
                    {/* <button
                      style={'display: none;'}
                      onClick={() => this.submitData()}
                      className='btn condBtn pull-right'
                    >
                      Submit
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Condolence;
