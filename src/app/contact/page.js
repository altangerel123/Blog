"use client";
import styles from "@/app/contact/contact.module.css";
export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[1917px] flex bg-white text-[#000] justify-center items-center">
          <div className="w-[895px] h-[895px] mt-[100px] border-[1px] flex flex-col items-center">
            <div className="w-[769px] h-[389px] p-[14px]">
              <h1 className="text-[36px] font-bold">Contact Us</h1>
              <p className="text-[16px] font-normal text-[#696A75] mb-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <div className="flex gap-[50px]">
                <div className="w-[294px] -[133px] border-[1px] border-[#696A75] p-[16px] gap-[10px] rounded-[10px]">
                  <h2 className="text-[24px] font-medium">Address</h2>
                  <p className="text-[#696A75]">
                    1328 Oak Ridge Drive, Saint Louis, Missouri
                  </p>
                </div>
                <div className="w-[294px] -[133px] border-[1px] border-[#696A75] p-[16px] gap-[10px] rounded-[10px]">
                  <h2 className="text-[24px] font-medium">Contact</h2>
                  <p className="text-[#696A75]">313-332-8662 info@email.com</p>
                </div>
              </div>
            </div>
            <div className={styles.contact}>
              <h2 className="text-[18px] font-bold mb-[24px]">
                Leave a Message
              </h2>
              <div className="flex justify-between mb-[20px]">
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Your Name"
                />
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <input
                className="w-[478px] h-[35px] border-[1px] border-[DCDDDF] mb-[24px] rounded-[5px]"
                type="text"
                placeholder="Subject"
              />
              <input
                className="w-[478px] h-[134px]  border-[1px] border-[DCDDDF] rounded-[5px]"
                type="text"
                placeholder="Write a message"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
