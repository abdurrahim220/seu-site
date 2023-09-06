import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (



    <div className="bg-cyan-950">
      <footer className=" mx-auto container text-white items-center justify-around py-20 flex-1 lg:flex ">



        <div className="">
          <div className="flex gap-2 items-center  mb-5">
            <div>
              <img src="./image/Frame.png" alt="" />

            </div>
            <div>
              <h1 className="text-3xl font-bold">UniAlumni</h1>
              <p className="text-xs">University Alumni Html Template</p>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugiat  <br /> aliquam molestiae id possimus asperiores quae autem maiores blanditiis.</p>
          <div className="mt-5 flex gap-10">
            <h2 className="font-bold">Phone: +87454796221</h2>
            <h2 className="font-bold">Fax: +88457842121</h2>
          </div>
          <h2 className="mt-2 font-bold">Email: demoemail@gmail.com</h2>
        </div>




        <div className="grid gap-6">
          <span className="text-3xl font-bold">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>



        <div>
          <span className="text-3xl font-bold">Get In Touch</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="mt-4 label-text text-white">We are Legend Lorem ipsum dolor sitmet , nsecte iplsicing eit, sed</span>
            </label>
            <div className="mt-4 text-black relative">
              <input type="text" placeholder="Enter your email address" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>

          <div className="flex mt-5 text-2xl gap-4 text-blue-500">
            <a href=""><BsFacebook /></a>
            <a href=""><BsInstagram /></a>
            <a href=""><BsLinkedin /></a>
            <a href=""><BsTwitter /></a>
          </div>

        </div>

      </footer>
      <aside>
        <p>RB_1.1.1</p>
      </aside>
    </div>


  );
};

export default Footer;
