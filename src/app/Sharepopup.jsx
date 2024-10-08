'use client'
import React, { useState } from 'react';
import { FacebookShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';

const SharePopup = ({ imageUrl }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Share
      </button>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Share this Image</h2>
              <button
                onClick={handleClose}
                className="text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
            </div>
            <div className="flex justify-around">
              <WhatsappShareButton url={imageUrl}>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  WhatsApp
                </button>
              </WhatsappShareButton>

              <FacebookShareButton url={imageUrl}>
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Facebook
                </button>
              </FacebookShareButton>

              <EmailShareButton url={imageUrl}>
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                  Email
                </button>
              </EmailShareButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SharePopup;
