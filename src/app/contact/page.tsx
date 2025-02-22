import Footer from '@/components/Footer'
import Introduction from '@/components/Introduction'
import Navigation from '@/components/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <Navigation />
      <Introduction
        title="Liên hệ"
        box=''
        link="/contact" />

      <div className='-mt-32'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3048282902946!2d105.54881977476894!3d21.020485688063566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b00206df143%3A0xefde84efe70afdad!2sHanoi%20House%203!5e0!3m2!1svi!2s!4v1740223297490!5m2!1svi!2s"
          width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='flex flex-col-reverse md:flex-row md:gap-5 gap-10 lg:mx-20 md:mx-10 mx-12 my-10'>
        <div className=' flex flex-col w-full md:w-1/2 gap-5'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-row items-center gap-10'>
              <FontAwesomeIcon icon={faPhone} className='text-white p-3 rounded-full bg-[--secondary-color]' />
              <div className='flex flex-col gap-3'>
                <div className='text-xl text-[--primary-color]'>Điện thoại</div>
                <div className='text-lg'>0978310234</div>
              </div>
            </div>
            <div className='flex flex-row items-center gap-10'>
              <FontAwesomeIcon icon={faEnvelope} className='text-white p-3 rounded-full bg-[--secondary-color]' />
              <div className='flex flex-col gap-3'>
                <div className='text-xl text-[--primary-color]'>Email</div>
                <div className='text-lg'>info@gecko.edu.vn</div>
              </div>
            </div>
            <div className='flex flex-row items-center gap-10'>
              <FontAwesomeIcon icon={faLocation} className='text-white p-3 rounded-full bg-[--secondary-color]' />
              <div className='flex flex-col gap-3'>
                <div className='text-xl text-[--primary-color]'>Danh sách trung tâm</div>
                <div className='text-lg'>4 cơ sở</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:w-2/3 w-full gap-3'>
            <span className='block h-[1px] w-full bg-[--primary-color]'></span>
            <div className='flex flex-col gap-3'>
              <span className='text-xl text-[--primary-color]'>Gecko Tứ hiệp</span>
              <span className='text-lg'>98 Đông Mỹ, Vạn Phúc Thanh Trì, Hà Nội</span>
            </div>
            <span className='block h-[1px] w-full bg-[--primary-color]'></span>
            <div className='flex flex-col gap-3'>
              <span className='text-xl text-[--primary-color]'>Gecko Đông Mỹ</span>
              <span className='text-lg'>98 Đông Mỹ, Vạn Phúc Thanh Trì, Hà Nội</span>
            </div>
            <span className='block h-[1px] w-full bg-[--primary-color]'></span>
            <div className='flex flex-col gap-3'>
              <span className='text-xl text-[--primary-color]'>Gecko Pháp Vân</span>
              <span className='text-lg'>NV02-05 Rose Town, Pháp Vân, Hoàng Mai, Hà Nội</span>
            </div>
            <span className='block h-[1px] w-full bg-[--primary-color]'></span>
            <div className='flex flex-col gap-3'>
              <span className='text-xl text-[--primary-color]'>Gecko Hoàng Mai</span>
              <span className='text-lg'>12BT.01 Chung cư Thanh Bình, P. Nguyễn Cảnh Dị, Đại Kim, Hoàng Mai, Hà Nội</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:w-1/2 w-full gap-5'>
          <span className='text-xl font-bold mb-5'>Đăng ký nhận tư vấn lộ trình học miễn phí</span>
          <input type='text' placeholder='Họ và tên học sinh *' className='focus:border-[--primary-color] hover:border-[--primary-color] border rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-gray-400 duration-200'></input>
          <input type='text' placeholder='Ngày sinh *' className='focus:border-[--primary-color] hover:border-[--primary-color] border rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-gray-400 duration-200'></input>
          <input type='text' placeholder='Số điện thoại *' className='focus:border-[--primary-color] hover:border-[--primary-color] border rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-gray-400 duration-200'></input>
          <input type='text' placeholder='Email' className='focus:border-[--primary-color] hover:border-[--primary-color] border rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-gray-400 duration-200'></input>
          <input type='text' placeholder='Chọn trung tâm gần nhất' className='focus:border-[--primary-color] hover:border-[--primary-color] border rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-gray-400 duration-200'></input>
          <button className='mt-5 rounded-full py-3 px-5 bg-[--primary-color] hover:bg-green-600 shadow-md shadow-gray-600 text-white font-bold'>Gửi thông tin</button>
        </div>
      </div>
      <div className='mt-16'>
        <Footer />
      </div>
    </div >
  )
}
